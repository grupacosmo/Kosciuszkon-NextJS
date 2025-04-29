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
  SocialMedia,
} from '@/app/containers/2025/containers';

import {header, hero, enrollment, footer} from "@/app/(2025)/(pl)/data";
import {scheduleData} from "@/app/(2025)/(pl)/data/schedule";
import {questionsData} from "@/app/(2025)/(pl)/data/questions";
import {partnersData} from "@/app/(2025)/(pl)/data/partners";
import {sliderContent} from "@/app/(2025)/(pl)/data/informations/informations";

export default function Home() {
  return (
    <main className="main">
      <Header data = {header} />
      <Hero data = {hero}/>
      <SectionDivider name="o wydarzeniu" />
      <Informations sliderContent={sliderContent}/>
      <SectionGradient />
      <SectionDivider name="zapisy" />
      <Enrolment data={enrollment}/>
      <SectionGradient />
      <SectionDivider name="harmonogram" />
      <Schedule scheduleData = {scheduleData} />
      <SectionGradient />
      <SectionDivider name="faq" />
      <Questions questionsData = {questionsData} />
      <SectionGradient />
      <SectionDivider name="social media" />
      <SocialMedia />
      <SectionGradient />
      <SectionDivider name="partnerzy" />
      <Partners {...partnersData} />
      <Footer data={footer}/>
    </main>
  );
}
