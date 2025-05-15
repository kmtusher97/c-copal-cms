import HeroSection from "../components/HeroSection";
import WhatIsCopalSection from "../components/WhatIsCopalSection";
import SupportedLLMProvidersSection from "../components/SupportedLLMProvidersSection";
import KeyFeaturesSection from "../components/KeyFeaturesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import GettingStartedSection from "../components/GettingStartedSection";
import ExamplesUseCasesSection from "../components/ExamplesUseCasesSection";
import BenefitsSection from "../components/BenefitsSection";
import DocumentationCommunitySection from "../components/DocumentationCommunitySection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24 bg-gray-50">
      <HeroSection />
      <WhatIsCopalSection />
      <SupportedLLMProvidersSection />
      <KeyFeaturesSection />
      <HowItWorksSection />
      <GettingStartedSection />
      <ExamplesUseCasesSection />
      <BenefitsSection />
      <DocumentationCommunitySection />
      <Footer />
    </main>
  );
}
