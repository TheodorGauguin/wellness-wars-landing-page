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
              title: "You work from home most of the time",
            },
            {
              title: "You spend most of your time in front of a screen",
            },
            {
              title: "You love playing video games",
            },
          ],
        },
        {
          title: "Unlock the Power of Wellness Wars:",
          imageUrl: "/images/happy_person_at_a_window.png",
          checks: [
            {
              title: "Transform your health while gaming",
            },
            {
              title: "Say goodbye to self-motivation struggles ",
            },
            {
              title:
                "Only do what is proven to be most effective and stop wasting time and energy on subpar exercises",
            },
          ],
        },
        {
          title: "Why You Shouldn't Wait:",
          imageUrl: "/images/person_running_out_of_time.png",
          checks: [
            {
              title: "Secure the best price before beta ends and prices rise",
            },
            {
              title: "Lock in your exclusive low price for life",
            },
            {
              title: "Start now to experience rapid, life-changing results",
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
        currentCheckbox?.offsetTop < scrollY + windowHeight / 2.3
      ) {
        currentCheckbox.classList.remove(
          "bg-neutral",
          "from-neutral",
          "to-neutral",
          "p-0"
        );
        currentCheckbox.classList.add(
          "dark:text-neutral-500",
          "transform",
          "scale-95",
          "from-[#52f7d4]",
          "to-[#faf597]",
          "text-neutral",
          "p-[2px]"
        );
      }
    }
  });

  return (
    <section class="" window:onScroll$={() => onScroll()}>
      <div class="container p-6 mx-auto mt-12 lg:px-8 lg:max-w-7xl">
        <div>
          <h2
            class="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50"
            hidden
          >
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
          <div class="grid mb-32 lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 class="text-3xl font-bold tracking-tight sm:text-4xl dark:text-gray-50">
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
                      <div
                        id={`check-${i * store.content.length + index}`}
                        class="form-control transition-all p-0 bg-red-400 clip clip-sm cursor-pointer space-x-4 justify-start bg-gradient-to-r from-neutral to-neutral text-[#ffffff]"
                      >
                        <div class="rounded-none p-8 clip clip-sm bg-neutral">
                          <h4 class="text-xl sm:text-2xl font-medium leading-6">
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
      {/* Add a header with a call to action button */}
      <div class="container lg:max-w-7xl mx-auto mb-32 flex flex-col items-center">
        <h2 class="text-4xl md:text-5xl font-bold text-white m-4 mb-16">
          Achieve the Unthinkable with{" "}
          <span class="bg-gradient-to-r from-[#78eaa0] to-[#e2da72] bg-clip-text text-transparent">
            Wellness Wars
          </span>{" "}
          - Register and Begin Your Journey!
        </h2>
        <button class="btn btn-lg clip clip-sm bg-gradient-to-r from-[#52f7d4] to-[#faf597] rounded-none text-[#1b2220] w-fit">
          Register Now
        </button>
      </div>
    </section>
  );
});
