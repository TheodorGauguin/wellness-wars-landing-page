import { component$, useStore, $ } from "@builder.io/qwik";

export default component$(() => {
  const store = useStore(
    {
      content: [
        {
          title: "Is This Meant For You?",
          imageUrl: "/images/A_person_working_from_home_illustration.png",
          checks: [
            {
              title: "You are a fellow home office enjoyer 🌟🏠",
            },
            {
              title: "You are reaching peak levels of screen time 💻⏳",
            },
            {
              title: "You are a passionate virtual Adventurer 🎮🚀",
            },
          ],
        },
        {
          title: "Unlock the Power of Wellness Wars:",
          imageUrl: "/images/happy_person_at_a_window.png",
          checks: [
            {
              title: "Transform your health with fun and excitement 🎉🏃‍♀️🍎",
            },
            {
              title: "Say goodbye to self-motivation struggles 💪🚀",
            },
            {
              title:
                "Effortlessly identify the most effective activities for you 🎯📈",
            },
          ],
        },
        {
          title: "Why You Shouldn't Wait:",
          imageUrl: "/images/person_running_out_of_time.png",
          checks: [
            {
              title:
                "Secure the best price before beta ends and prices rise 🤑💰",
            },
            {
              title: "Lock in your exclusive low price for life 💸🔒",
            },
            {
              title:
                "Start now to experience rapid, life-changing results ⏩🏋️‍♂️💥",
            },
          ],
        },
      ],
    },
    { deep: true }
  );

  const onScroll = $(() => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    for (let i = 0; i < 9; i++) {
      const currentCheckbox = document.getElementById("check-" + i);
      if (
        currentCheckbox &&
        currentCheckbox?.offsetTop < scrollY + windowHeight / 2.5
      ) {
        (currentCheckbox as HTMLInputElement).checked = true;
        currentCheckbox.parentElement?.classList.add(
          "text-gray-500",
          "transform",
          "translate-x-4"
        );
      }
    }
  });

  return (
    <section
      class="dark:bg-base-200 dark:text-gray-100"
      window:onScroll$={() => onScroll()}
    >
      <div class="container py-8  max-w-xl p-6 md:py-20 mx-auto space-y-16 lg:px-8 lg:max-w-7xl">
        <div>
          <h2 class="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">
            What you should know:
          </h2>
          <p
            class="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400"
            hidden
          >
            We all struggle with sticking to our health goals.
          </p>
        </div>
        {store.content.map((element, i) => (
          <div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 class="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
                {element.title}
              </h3>
              <p class="mt-3 text-lg dark:text-gray-400" hidden>
                Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos
                etiam regione ut, persius eripuit quo id. Sit te euismod
                tacimates.
              </p>
              {element.checks.map((check, index) => (
                <div class="mt-12 space-y-12">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 w-full text-left">
                      <div class="form-control">
                        <div class="cursor-pointer label transition-all space-x-4 justify-start">
                          <input
                            type="checkbox"
                            id={`check-${i * store.content.length + index}`}
                            class="checkbox checkbox-secondary"
                          />
                          <h4 class="text-lg sm:text-xl font-medium leading-6">
                            {check.title}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              aria-hidden="true"
              class={`mt-10 lg:mt-0 ${i % 2 ? "lg:row-start-1" : ""}`}
            >
              <img
                src={element.imageUrl}
                alt={element.title}
                class="mx-auto rounded-lg shadow-lg dark:bg-gray-500 h-[600px] w-[400px] object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});
