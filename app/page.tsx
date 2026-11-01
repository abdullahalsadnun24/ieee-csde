import {
  AboutSection,
  CallForPapersSection,
  CommitteeSection,
  ContactSection,
  DatesSection,
  Hero,
  KeynotesSection,
  PhotosSection,
  ProgramSection,
  PublicationSection,
  RegistrationSection,
  SponsorsSection,
  SubmissionSection,
  SupportersSection,
  TopicsSection,
} from "@/components/pages/home";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <PhotosSection />
      <CallForPapersSection />
      <TopicsSection />
      <DatesSection />
      <KeynotesSection />
      <CommitteeSection />
      <SubmissionSection />
      <RegistrationSection />
      <ProgramSection />
      <PublicationSection />
      <SponsorsSection />
      <SupportersSection />
      <ContactSection />
    </>
  );
}
