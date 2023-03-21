import { component$, useStore, $ } from "@builder.io/qwik";

export default component$(() => {
  const store = useStore(
    {
      content: [
        {
          title: "Is This For You?",
          checks: [
            {
              title: "You work from home most of the time",
            },
            {
              title: "You work in front of a computer most of the day",
            },
            {
              title: "You love playing video games",
            },
          ],
        },
        {
          title: "What are the benefits of Wellness Wars?",
          checks: [
            {
              title: "You get to have fun while improving your health significantly",
            },
            {
              title: "You don’t have to motivate yourself to do healthy activities anymore",
            },
            {
              title: "You don't need to guess which activities are most effective, we tell you",
            },
          ],
        },
        {
          title: "Why join now?",
          checks: [
            {
              title: "The prices will increase once the app leaves its beta phase",
            },
            {
              title: "You get to keep your low price even when leaving the beta",
            },
            {
              title: "The sooner you start, the faster you will feel the results",
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
      if (currentCheckbox && currentCheckbox?.offsetTop < scrollY + windowHeight / 2.5) {
        (currentCheckbox as HTMLInputElement).checked = true;
        currentCheckbox.parentElement?.classList.add("text-gray-500", "transform", "translate-x-4");
      }
    }
  });

  return (
    <section
      class="dark:bg-base-200 dark:text-gray-100"
      window:onScroll$={() => onScroll()}
    >
      <div class="container max-w-xl p-6 py-12 mx-auto space-y-16 lg:px-8 lg:max-w-7xl">
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
                    <div class="flex-shrink-0">
                      <div class="form-control">
                        <div class="cursor-pointer label transition-all space-x-4">
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
                src="https://source.unsplash.com/random/360x480"
                alt=""
                class="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});
