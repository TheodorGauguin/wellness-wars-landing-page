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
              checked: false,
            },
            {
              title: "Per ei quaeque sensibus",
              description: "Ex usu illum iudico molestie.",
              checked: false,
            },
            {
              title: "Pro ne agam facete mediocritatem",
              description: "Ridens labore facete mea ei.",
              checked: false,
            },
          ],
        },
        {
          title: "Who are we?",
          checks: [
            {
              title: "Per ei quaeque sensibus",
              description: "Ex usu illum iudico molestie.",
              checked: false,
            },
            {
              title: "Pro ne agam facete mediocritatem",
              description: "Ridens labore facete mea ei.",
              checked: false,
            },
            {
              title: "Pro id apeirian dignissim",
              description: "Pro id apeirian dignissim.",
              checked: false,
            },
          ],
        },
        {
          title: "Who are we?",
          checks: [
            {
              title: "Per ei quaeque sensibus",
              description: "Ex usu illum iudico molestie.",
              checked: false,
            },
            {
              title: "Pro ne agam facete mediocritatem",
              description: "Ridens labore facete mea ei.",
              checked: false,
            },
            {
              title: "Pro id apeirian dignissim",
              description: "Pro id apeirian dignissim.",
              checked: false,
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
      if (currentCheckbox && currentCheckbox?.offsetTop < scrollY + windowHeight / 3) {
        currentCheckbox.checked = true;
        currentCheckbox.parentElement?.classList.add("text-gray-500", "transform", "translate-x-4");
      }
    }
  });

  return (
    <section
      class="dark:bg-base-200 dark:text-gray-100"
      window:onScroll$={() => onScroll()}
    >
      <div class="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
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
                Who is this for?
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
                        <div class="cursor-pointer label text-green-50 transition-all space-x-4">
                          <input
                            type="checkbox"
                            checked={check.checked}
                            id={`check-${i * store.content.length + index}`}
                            class="checkbox checkbox-secondary"
                          />
                          <h4 class="text-xl sm:text-2xl font-medium leading-6">
                            {check.title}
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div class="ml-4">
                      <p class="mt-2 dark:text-gray-400" hidden>
                        {check.description}
                      </p>
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
