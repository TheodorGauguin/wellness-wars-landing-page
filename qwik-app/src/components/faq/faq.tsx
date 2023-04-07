import { component$ } from "@builder.io/qwik";

export default component$(() => {
  const qas = [
    {
      question: "How does the gamification aspect of the app work?",
      answer:
        "Our app incorporates game elements like currency, badges, and leaderboards to motivate users and make their fitness journey more engaging. " +
        "By completing workouts, challenges, and goals, you'll earn rewards and unlock new features, making the experience both fun and rewarding.",
    },
    {
      question:
        "Is the app suitable for beginners with no prior experience in yoga or exercise?",
      answer:
        "Absolutely! Our app is designed for users of all skill levels, including beginners. We offer guided tutorials, customizable workout plans, " +
        "and a variety of routines to help you ease into your fitness journey at your own pace.",
    },
    {
      question:
        "How do I choose the right workout routine for my needs and goals?",
      answer:
        "Our app includes a diverse range of yoga, stretching, and exercise routines, allowing you to select the ones that best fit your preferences, " +
        "fitness level, and goals. You can also customize your workout plan, track your progress, and receive personalized recommendations based on your performance and feedback.",
    },
    {
      question:
        "Can I connect with friends or participate in group challenges within the app?",
      answer:
        "Yes! Our app fosters a social and supportive community by allowing you to connect with friends, join group challenges, and share your achievements. " +
        "You can also access our community forums to exchange tips, discuss progress, and stay motivated throughout your fitness journey.",
    },
    {
      question: "Are there any subscription fees or in-app purchases?",
      answer:
        "We offer a free trial period that allows you to experience the app's features without any commitment. After the trial, you can choose from our " +
        "flexible subscription plans that cater to different needs and budgets. Some premium features and content may be available through in-app purchases.",
    },
    {
      question:
        "How do you ensure user privacy and data security within the app?",
      answer:
        "We take your privacy and data security very seriously. Our app utilizes industry-standard encryption and security measures to protect your personal " +
        "information. We also have a transparent privacy policy that outlines how we collect, use, and safeguard your data.",
    },
  ];

  return (
    <section class="dark:bg-neutral dark:text-white">
      <div class="container flex flex-col justify-center py-24 mx-auto md:py-32 items-center lg:max-w-7xl">
        <p
          hidden
          class="p-2 text-sm font-medium tracking-wider text-center uppercase"
        >
          How it works
        </p>
        <h2 class="mb-16 text-4xl font-bold leading-none text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div class="grid gap-10 sm:p-3 px-4 md:px-0 mb-8">
          {qas.map((qa) => (
            <div>
              <hr />
              <div class="collapse">
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium">
                  <h3 class="font-semibold dark:text-gray-100">
                    {qa.question}
                  </h3>
                </div>
                <div class="collapse-content">
                  <p class="mt-1 text-xl"> {qa.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button class="md:hidden btn btn-lg clip clip-sm bg-gradient-to-r from-[#52f7d4] to-[#faf597] rounded-none text-[#1b2220] w-fit">
          Join Now
        </button>
      </div>
    </section>
  );
});
