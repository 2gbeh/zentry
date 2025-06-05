import { APP } from "@/constants/APP";

export const Jumbotron = () => {
  return (
    <hgroup className="flex flex-col items-center gap-4">
      {/* <h1 className="text-center text-5xl leading-16 font-bold sm:text-6xl">
        Share code snippets with
      </h1>
      <h1 className="text-5xl font-bold sm:text-6xl">{APP.name}</h1> */}
      <h1 className="text-center text-5xl leading-16 font-bold sm:text-6xl">
        {APP.tagline}
      </h1>
    </hgroup>
  );
};
