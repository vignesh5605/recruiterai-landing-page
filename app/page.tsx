import Hero from '@/components/sections/Hero';
import WorkflowSolution from '@/components/sections/WorkflowSolution';
import HowItWorks from '@/components/sections/HowItWorks';
import Impact from '@/components/sections/Impact';
import Distribution from '@/components/sections/Distribution';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <WorkflowSolution />
      <HowItWorks />
      <Impact />
      <Distribution />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
