---
title: "A data fetching strategy for server components in Next.js"
description: "Reduce redundant data fetching in your Next.js app, featuring Zustand"
date: "2025-01-26"
heroImgUrl: https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc37ZmoKsQjKyp7WizfuerN4wJadgCIkEPGRt56
technologies: ["Next.js", "React", "TypeScript", "Zustand"]
---

In traditional single-page React applications, fetching data--e.g. API calls, authentication checks, database queries, etc--was handled client-side _after_ receiving the HTML, CSS, and JavaScript from the web server. Essentially, a web server was passing kilobytes (possibly even megabytes 🤢) of instructions to your device on how to acquire and display the data you want, but notably not the data itself.

![The traditional data flow](https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3IIx88kP8Dm39btMjNTIVcKdgaCsh67qLEyHk)

Now if you are inclined to think of the HTML, CSS, and JavaScript _as_ data, you might be wondering "Why am I getting data on how to get data, and not just the damn data 🤔?" For years, developers have been solving questions of data fetching, caching, and revalidation at the expense of the end user experience vis-à-vis increased JavaScript bundle sizes and longer time to interactive (TTI) on their devices.

Vercel, the company behind Next.js, hopes to change this paradigm with [Server Components](https://nextjs.org/docs/basic-features/data-fetching#server-components). Their big idea is that now the server handles the data fetching at time of the client's request. Meaning, data arrives pre-fetched at the client along with the HTML, CSS, and any JavaScript needed to display it; the end result is a faster time to interactive (TTI) and a smaller JavaScript bundle size.

![Data arrives at the client pre-fetched with the server component data flow.](https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3TP0ycJmn28VI5eDG6SmKqWAZwhyUtdPY1HMg)

No need to throw the baby out with the bath water, however. The lessons learned from robust client-side data fetching libraries like [React Query](https://react-query.tanstack.com/) can still be applied to Server Components. For example, if data from one query is needed in multiple components, it would be wasteful to fetch the data multiple times. This can be naively accomplished by fetching the data once and then passing the data as a prop to any needy child components. However, there are two problems with this approach: 1) the prop drilling will become difficult to maintain as the component tree grows in complexity, and 2) some server components cannot pass props to one another (e.g. a layout component and a page component).

While working on the [B&W project](/portfolio), I encountered this second issue when I had a progress bar inside a layout component while the page component needed the same underlying data in order to fill out form fields. The solution to these problems is a state management library, with my choice being [Zustand](https://zustand.surge.sh/). I started by creating a hook that would sit between the data fetching logic and the components that needed the data as well a component to bootstraps the store on mount. Here's how it looks:

```tsx
"use client";
import { create } from "zustand";
import { useEffect } from "react";
// Allows client components to access the data
export const useMyStore = create<{
  data: string | null;
  setData: (data: string) => void;
}>((set) => ({
  data: null,
  setData: (data: string) => set({ data }),
}));
// Allows server component to set the data
export const SetMyStore = ({ someData }: { someData: string }) => {
  const { setData } = useOrganizerStore();
  useEffect(() => setData(someData), [someData, setData]);
  return <></>; // no need to render anything
};
```

After a server component fetches the data, you must bootstrap the store via a client component because the hook useMyStore cannot be used in a server component. This is done like so:

```tsx
import { SetMyStore } from "@/hooks/useMyStore";
import { queries } from "@/queries";
export default async function MyServerComponent() {
  const someData = await queries.getSomeData();
  return (
    <>
      <SetMyStore someData={someData} />
      ...
    </>
  );
}
```

When you have a component that needs the data, it would be consumed like this:

```tsx
"use client";
import { useMyStore } from "@/hooks/useMyStore";
export default function MyComponent() {
  const { data } = useMyStore();
  return <div>{data}</div>;
}
```

This way, whether a component falls under the layout or page tree, it can access the data without prop drilling or duplicate data fetching. The data is fetched once and shared across all components that need it. This is a simple example, but the same pattern can be applied to more complex data fetching scenarios.
