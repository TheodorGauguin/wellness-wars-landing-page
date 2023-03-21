import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Faq from '~/components/faq/faq';
import Footer from '~/components/footer/footer';
import Hero from '~/components/hero/hero';
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
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
