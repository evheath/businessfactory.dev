import Image from "next/image";
const Page = () => {
  const yearsExperience = new Date().getFullYear() - 2018;
  return (
    <div className="m-24">
      <div className="sm:flex items-center space-x-3">
        <Image
          className="h-36 w-36 rounded-full"
          src={
            "https://firebasestorage.googleapis.com/v0/b/business-factory-30cbd.appspot.com/o/profile.jpg?alt=media&token=fd885feb-73c5-4e85-962b-eed81edff527"
          }
          alt={"Elliot Heath"}
          height={144}
          width={144}
        />
        <p className="text-white text-5xl font-medium font-sans">
          Web and Mobile Developer
        </p>
      </div>
      <div className="mt-6 max-w-3xl">
        <p className="text-gray-300 text-lg">
          I'm Elliot, a developer based in Madison, Wisconsin. For the last{" "}
          {yearsExperience} years, I have been building bespoke apps for small
          businesses.
        </p>
      </div>
    </div>
  );
};
export default Page;
