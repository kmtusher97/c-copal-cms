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
import UsageSection from "../components/UsageSection";
import ThreadManagementSection from "../components/ThreadManagementSection";
import ProfileManagementSection from "../components/ProfileManagementSection";
import CostTrackingSection from "../components/CostTrackingSection";
import LocalDevelopmentSection from "../components/LocalDevelopmentSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24 bg-gray-50">
      <HeroSection />
      <WhatIsCopalSection />
      <HowItWorksSection />
      <UsageSection /> {/* Added */}
      <KeyFeaturesSection />
      <SupportedLLMProvidersSection />
      <ThreadManagementSection /> {/* Added */}
      <ProfileManagementSection /> {/* Added */}
      <CostTrackingSection /> {/* Added */}
      <ExamplesUseCasesSection />
      <BenefitsSection />
      <GettingStartedSection />
      <LocalDevelopmentSection /> {/* Added */}
      <DocumentationCommunitySection />
      <Footer />
    </main>
  );
}