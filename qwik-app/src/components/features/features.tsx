import { component$ } from "@builder.io/qwik";

export default component$(() => {
  const features = [
    {
      icon: "",
      title: "Product",
      description: "Similique quas ea veniam",
    },
  ];

  return (
    <section class="p-4 md:p-8 dark:bg-neutral dark:text-gray-100">
      <div class="container mx-auto p-4 my-6 space-y-2 text-center">
        <h2 class="text-5xl font-bold">Built for Gamers by Gamers</h2>
        <p class="dark:text-gray-400">...that struggled with their health goals too.</p>
      </div>
      <div class="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div class="flex flex-col items-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-8 h-8 dark:text-violet-400"
            >
              <path
                fill-rule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <h3 class="my-3 text-3xl font-semibold">{feature.title}</h3>
            <div class="space-y-1 leading-tight">
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});
