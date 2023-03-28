import { component$ } from "@builder.io/qwik";

export default component$(() => {
  const features = [
    {
      icon: "/public/images/daily_quests.png",
      title: "⚔️ Daily Quests",
      description: "Complete daily challenges tailored to your fitness level, and earn experience points to level up your avatar and unlock new, exciting workouts!",
    },
    {
      icon: "/public/images/working_out_with_friends.png",
      title: "🏰 Dungeon Runs with Friends",
      description: "Team up with your friends for epic group workouts (aka dungeon runs). Conquer bosses together while burning calories and having fun!",
    },
    {
      icon: "/public/images/The_early_morning_sun_rising_over_the_ocean.png",
      title: "🔥 Streak Tracking",
      description: "Keep your daily streaks alive to receive bonus rewards and special in-game perks, helping you stay motivated and consistent.",
    },
  ];

  return (
    <section class="px-4 py-8 md:px-8 md:py-20 dark:bg-neutral dark:text-gray-100">
      <div class="container mx-auto p-12 pt-0 space-y-2 text-center">
        <h2 class="text-5xl font-bold">Built for Gamers by Gamers</h2>
        <p class="dark:text-gray-400" hidden>...that struggled with their health goals too.</p>
      </div>
      <div class="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div class="flex flex-col items-center p-4">
            <img
              src={feature.icon}
              alt={feature.title}
              class="w-[80%] h-auto rounded-xl transition duration-300 transform hover:scale-105"
            />
            <h3 class="my-4 mt-8 text-3xl font-semibold">{feature.title}</h3>
            <div class="space-y-1 leading-tight text-center text-xl">
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});