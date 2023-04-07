import { component$ } from "@builder.io/qwik";

export default component$(() => {
  const features = [
    {
      icon: "/images/daily_quests.png",
      title: "Daily Quests",
      description:
        "Complete daily challenges tailored to your fitness level, and earn experience points to level up your avatar and unlock new, exciting workouts!",
      tags: ["Simple Accountability", "Easy Habit Building"],
    },
    {
      icon: "/images/working_out_with_friends.png",
      title: "Dungeon Runs with Friends",
      description:
        "Team up with your friends for epic group workouts (aka dungeon runs). Conquer bosses together while burning calories and having fun!",
      tags: ["Social Interaction", "Gaming with Friends"],
    },
    {
      icon: "/images/The_early_morning_sun_rising_over_the_ocean.png",
      title: "Streak Tracking",
      description:
        "Keep your daily streaks alive to receive bonus rewards and special in-game perks, helping you stay motivated and consistent.",
      tags: ["Rewards for Consistency", "Steady Improvement"],
    },
  ];

  const colors = ["#234d2d", "#1c2220", "#4e2935"];
  // array with

  return (
    <section class="px-4 py-16 xl:px-40 md:py-32 dark:text-white">
      {/*
        <div class="card rounded-none h-60 bg-gradient-to-br from-[#234d2d] to-[#1c2220]"></div>
  <div class="card rounded-none h-60 col-span-2 bg-gradient-to-br from-[#1c2220] to-[#4e2935]"></div>*/}
      <div class="container mx-auto mt-12 mb-20 space-y-2 grid md:grid-cols-2 gap-8 md:gap-16">
        <div>
          <h2 class="text-5xl md:text-6xl font-bold pb-12">
            Built for Gamers by Gamers
          </h2>
          <button class="btn btn-lg clip clip-sm bg-gradient-to-r from-[#52f7d4] to-[#faf597] rounded-none text-[#1b2220]">
            Sign up now
          </button>
        </div>
        <p class="text-2xl text-neutral-300">
          We understand the challenges of maintaining consistency in our health
          pursuits. That's precisely why we designed our app with gamification
          at its core. By integrating the most captivating aspects of gaming
          into fitness, we've crafted a thrilling and immersive experience that
          will continually entice you to strive for more.
        </p>
      </div>
      <div class="container mx-auto grid justify-center gap-8 sm:grid-cols-1 lg:grid-cols-3">
        {features.map((feature, i) => (
          <div
            class={`card h-full bg-neutral [${colors[i]}] overflow-hidden shadow-xl rounded-none clip clip-md transition-transform hover:scale-105`}
          >
            <figure>
              <img src={feature.icon} alt={feature.title} />
            </figure>
            <div class="card-body">
              <h2 class="card-title pb-4 text-3xl">{feature.title}</h2>
              <p class="pb-4 text-xl text-neutral-200">{feature.description}</p>
              <div class="card-actions justify-end">
                <div class="badge bg-gradient-to-r from-[#52f7d4] to-[#faf597] text-black ml-1 text-base p-[1px] h-[26px]">
                  <div class="badge bg-neutral text-base px-[14px] h-[22px]">
                    {feature.tags[0]}
                  </div>
                </div>
                <div class="badge bg-gradient-to-r from-[#52f7d4] to-[#faf597] text-black ml-1 text-base p-[1px] h-[26px]">
                  <div class="badge bg-neutral text-base px-[14px] h-[22px]">
                    {feature.tags[1]}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});
