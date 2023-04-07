import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Faq from '~/components/faq/faq';
import Footer from '~/components/footer/footer';
import Hero from '~/components/hero_alt/hero';
import Alignment from '~/components/alignment/alignment';
import Features from '~/components/features/features';

export default component$(() => {
  
  return (
    <div>
      <Hero />
      <Features />
      <Alignment />
      <Faq />
      <Footer />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Wellness Wars',
  meta: [
    {
      name: 'description',
      content: 'Wellness Wars is a fun and easy way to improve your health',
    },
  ],
};
