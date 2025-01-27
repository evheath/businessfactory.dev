---
title: "Reducing client JavaScript bundle size with Next.js"
description: "Next.js use case: making your app faster by reducing the size of your JavaScript bundle."
date: "2022-06-29"
heroImgUrl: https://firebasestorage.googleapis.com/v0/b/business-factory-30cbd.appspot.com/o/nextjs-2885206612.png?alt=media&token=2c688710-aa88-4182-b515-4e61c7260ecc
technologies: ["Next.js", "React", "TypeScript"]
---

I'm [building a silly browser game](https://dallehangman.com/) and my JavaScript bundle **quadrupled** in size with the inclusion of a single package

I like to insert placeholder data into input forms to inspire my users, so I leverage [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker) to generate names, nouns, adjectives, animals, etc. you name it. Now, I have nothing but good things to say about Faker, but look at this bullshit:

![Including faker increases my bundle 4x 😩](https://firebasestorage.googleapis.com/v0/b/business-factory-30cbd.appspot.com/o/Screen%20Shot%202022-06-29%20at%209.46.09%20AM.png?alt=media&token=6484cbdd-98d2-4c31-ac8d-567b5e711388)

When I first included Faker, Angular wouldn't even let me build without modifying my bundle size budget.

![🚩A red flag in retrospect 🚩](https://firebasestorage.googleapis.com/v0/b/business-factory-30cbd.appspot.com/o/Screen%20Shot%202022-06-29%20at%2010.09.26%20AM.png?alt=media&token=4e0f1170-d351-4744-b97a-d3c7a8c4bd18)

I'm not knocking Faker or trying to single it out. In fact, I love Faker and I want to use it in my game. But does its inclusion make my user experience four times better? I would argue **not like this**, because

## Large bundle sizes negatively impact a page's [web vitals](https://web.dev/vitals/)

A user with a lousy internet connection might think your website is down when really it just needs more time.

A user might become irritated when your page begins to render, but he or she cannot interact while JavaScript continues to download.

And lastly, a user will become infuriated when the layout of your page changes while they are interacting with it.

These three experiences are commonplace to an app that performs badly on the core metrics: loading, interactivity, and visual stability.

## Poor vitals will cause your site to [rank poorly among search engines](https://developers.google.com/search/blog/2020/11/timing-for-page-experience)

Which of course, makes it harder for your site to gain organic traffic. In my case, sure, fake placeholder data might be a nice touch for the users who actually stick around to see the page load. But what about all the users who don't get to see _any_ feature of my game because they never even find the app?

So what should be done? If you don't know any better, you might think compromises are your only choices:

1. Forgo the feature at the cost of a less interesting app
1. Keep the package at the cost of web vitals
1. Implement the feature yourself at the cost of _your_ vitals 🤬

# Next.js: no compromises

Next.js can keep your initial bundle size small _and_ retain the use of an otherwise weighty JavaScript package.

Next.js provides many solutions but broadly there are two strategies: keep the package entirely on the server or, if you must, send it to the client responsibly&trade;

## Keep the package entirely on the server: SSR

If the utilities from the package are only being called once, consider a Server Side Render (SSR) approach.

At the time of the client's first request for a page, Next.Js permits developers to run some code using **getServerSideProps()**. The result of this function can be passed immediately into the HTML response that is sent to the client.

So in my case, should I need one random name:

```tsx
import { faker } from "@faker-js/faker";

export async function getServerSideProps() {
  return {
    props: {
      name: faker.name.findName(),
    },
  };
}

export default function Component({ name }) {
  return <div>Hello {name}</div>;
}
```

### Client initiated requests for data

Perhaps the client will need additional data after load or perhaps you don't wish to use SSR. For this, wrap the Faker code in an API endpoint for client consumption.

For example, in `/api/name.tsx`

```tsx
import { faker } from "@faker-js/faker";
export default function handler(req, res) {
  res.status(200).json({ name: faker.name.findName() });
}
```

Then in our client component:

```tsx
import { useState } from "react";

export default function Consume() {
  const [name, setName] = useState("Elliot Heath");
  async function getNewName() {
    console.log("getting new name");
    const json = await (await fetch("/api/name")).json();
    setName(json.name);
  }
  return (
    <>
      <div>name: {name}</div>
      <button onClick={getNewName}>Get random name</button>
    </>
  );
}
```

Depending on the data coming back from the API, the size of these requests are less than a kilobyte. Think of the bandwidth savings if you are using a metered hosting provider! In terms of bandwidth, a users would have to average above 5000 API requests&mdash;_before_ refreshing or navigating away&mdash;to exceed the size of loading Faker _one time_. That seems like an extreme outlier case not representative of the average user. And even in such a scenario with excessive, you probably still wouldn't want to weigh down the initial page load with Faker anyways.

### The wrong way

Here is how you don't want to access the Faker package:

```tsx
import { faker } from "@faker-js/faker";
export default function Mycomponent() {
  return <div>{faker.name.findName()}</div>;
}
```

Notice that the call to faker exists inside the component sent to client. Meaning, this _will_ send the package over the wire, which is what we are trying to avoid. You can verify this by looking at the dev tools network or source tab:

![2.4 MB just to generate 'David Koss'](https://firebasestorage.googleapis.com/v0/b/business-factory-30cbd.appspot.com/o/Screen%20Shot%202022-06-29%20at%2011.47.40%20AM.png?alt=media&token=080adbed-4f12-4225-8bd9-ca84382a7873)

Compare this to when we use getServerSideProps():

![When faker isn't sent over the wire, the component is only 3.9 kB](https://firebasestorage.googleapis.com/v0/b/business-factory-30cbd.appspot.com/o/Screen%20Shot%202022-06-29%20at%2011.56.14%20AM.png?alt=media&token=08a649b5-f098-48e4-b8a5-d0f6aedfc227)
