import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./hero.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="bg-[#1b2220] md:h-screen hero-container">
      {/* Only show hovering mockups on big screens */}
      <div class="hidden md:flex md:absolute top-0 right-0 left-0 bottom-0 flex-col md:flex-row justify-center mx-2 xl:mx-16 overflow-hidden">
        <div class="2xl:flex-1"></div>
        <div class="flex-1 flex justify-center md:pt-[70vh] lg:pt-[60vh] 2xl:pt-[55vh] mb-8 h-fit">
          <img class="vert-move w-[80%] drop-shadow-2xl" src="/images/mockup_1.png" />
        </div>
        <div class="flex-1 flex justify-center md:pt-[60vh] lg:pt-[50vh] 2xl:pt-[40vh] mb-8 h-fit">
          <img class="anim-delay-300 vert-move w-[80%] drop-shadow-2xl" src="/images/mockup_1.png" />
        </div>
        <div class="flex-1 flex justify-center md:pt-[50vh] lg:pt-[40vh] 2xl:pt-[25vh] mb-16 h-fit">
          <img class="anim-delay-600 vert-move w-[80%] drop-shadow-2xl" src="/images/mockup_1.png" />
        </div>
      </div>
      { /* Heading and CTA */}
      <div id="heading" class="pt-[20vh] 2xl:pt-[30vh] px-8 md:px-24 md:pl-24 xl:pl-36 2xl:pl-48">
        <h1 class="text-6xl md:text-7xl text-[#5ad8b9] font-bold leading-tight pb-6">Battle for Better Health <br class="hidden lg:block" />with <span class="bg-gradient-to-r from-[#78eaa0] to-[#e2da72] bg-clip-text text-transparent">Wellness Wars</span></h1>
        <p class="text-lg md:text-2xl pb-12 text-green-50 leading-relaxed">Unlock rewards, level up, and stay motivated as you <br/>transform your fitness routine.</p>
        <button class="btn btn-lg clip clip-sm bg-gradient-to-r from-[#52f7d4] to-[#faf597] rounded-none text-[#1b2220] mb-12 md:mb-32">Join the beta</button>
      </div>
      {/* Carousel on small screens */}
      <div class="md:hidden carousel rounded-box pb-8">
        <div class="carousel-item w-full">
          <img src="/images/mockup_1.png" class="w-[90%] mx-[5%]" alt="Tailwind CSS Carousel component" />
        </div> 
        <div class="carousel-item w-full">
          <img src="/images/mockup_1.png" class="w-[90%] mx-[5%]" alt="Tailwind CSS Carousel component" />
        </div> 
        <div class="carousel-item w-full">
          <img src="/images/mockup_1.png" class="w-[90%] mx-[5%]" alt="Tailwind CSS Carousel component" />
        </div> 
      </div>
    </div>
  )
});