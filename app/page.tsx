import {
  Header,
  Hero,
  Informations,
  Schedule,
  Questions,
  Enrolment,
  Partners,
  Footer,
  SectionDivider,
  SectionGradient,
} from './2025/containers';

export default function Home() {
  return (
    <main className='main'>
      <Header />
      <Hero />
      <SectionDivider name='zapisy' />
      <Enrolment />
      <SectionGradient />
      <SectionDivider name='o wydarzeniu' />
      <Informations />
      <SectionGradient />
      <SectionDivider name='harmonogram' />
      <Schedule />
      <SectionGradient />
      <SectionDivider name='faq' />
      <Questions/>
      <SectionGradient />
      <SectionDivider name='partnerzy' />
      <Partners />
      <Footer />
    </main>
  );
}
