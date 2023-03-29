import { component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import Signup from "../signup/signup";
import styles from "./hero.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  const headingIdeas = [
    {
      prefix: "",
      highlighted: "Transform Your Health ",
      suffix: "with Our Engaging Health Platform",
    },
    {
      prefix: "Make the ",
      highlighted: "Healthy Choice ",
      suffix: "the Easy One",
    },
    {
      prefix: "Stop Being ",
      highlighted: "So Hard ",
      suffix: "On Yourself",
    },
    {
      prefix: "Make Reaching Your ",
      highlighted: "Health Goals Easy",
    },
    {
      prefix: "Being Healthy Can Be ",
      highlighted: "So Easy",
    },
    {
      prefix: "Being Fit Will ",
      highlighted: "Get So Easy",
    },
    {
      prefix: "Let Being Fit Become ",
      highlighted: "Second Nature",
    },
    {
      prefix: "Battle for Better Health with ",
      highlighted: "Wellness Wars",
      suffix: ": Unleash Your Inner Warrior!",
    },
  ];
  const currentHeadingIdeaIndex = 7; //Math.floor(Math.random() * ideas.length);

  const subheadingIdeas = [
      "Make Healthy Habits easy with Our Fun and Rewarding Gamification Approach!",
      "Play your very own game of life with gamified Yoga, Stretches and Exercises. You just keep playing, and let us take care of the rest!",
      "Discover a new world of motivation, challenge, and achievement in your wellness journey.",
      "Unlock rewards, level up, and stay motivated as you transform your fitness routine.",
    ],
    currentSubheadingIdeaIndex = 3;

  const joinBetaClicked = useSignal(false);

  return (
    <section id="hero" class="text-orange-50">
      <div class="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-48 md:pb-24 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 class="text-4xl sm:text-5xl mb-4">
          {headingIdeas[currentHeadingIdeaIndex].prefix}
          <span class="dark:text-[#44ee44] [#55ff55] font-black">
            {headingIdeas[currentHeadingIdeaIndex].highlighted}
          </span>
          {headingIdeas[currentHeadingIdeaIndex].suffix}
        </h1>
        <div hidden={joinBetaClicked.value} class="h-72">
          <p class="p-4 mb-8 text-xl">
            {subheadingIdeas[currentSubheadingIdeaIndex]}
          </p>
          <div class="flex flex-wrap justify-center space-x-4">
            <button
              class="btn btn-primary"
              onClick$={() => (joinBetaClicked.value = true)}
            >
              Join the beta
            </button>
            <button class="btn btn-ghost" onClick$={() => window.scrollTo(0, document.getElementById("hero")?.getBoundingClientRect().bottom || 0)}>Learn how</button>
          </div>
        </div>
        <div hidden={!joinBetaClicked.value} class="h-72 w-full">
          <Signup />
        </div>
      </div>
    </section>
  );
});
