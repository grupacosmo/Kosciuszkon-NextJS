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

import {header, hero, enrollment, footer} from "@/app/(2025)/en/data";
import {scheduleData} from "@/app/(2025)/en/data/schedule";
import {questionsData} from "@/app/(2025)/en/data/questions";
import {partnersData} from "@/app/(2025)/en/data/partners";
import {sliderContent} from "@/app/(2025)/en/data/informations/informations";

export default function Home() {
  return (
    <main className="main">
      <Header data={header}/>
      <Hero data={hero}/>
      <SectionDivider name="About" />
      <Informations sliderContent={sliderContent}/>
      <SectionGradient />
      <SectionDivider name="Enrollment" />
      <Enrolment data = {enrollment}/>
      <SectionGradient />
      <SectionDivider name="Schedule" />
      <Schedule scheduleData={scheduleData} />
      <SectionGradient />
      <SectionDivider name="FAQ" />
      <Questions questionsData={questionsData} />
      <SectionGradient />
      <SectionDivider name="social media" />
      <SocialMedia />
      <SectionGradient />
      <SectionDivider name="Sponsors" />
      <Partners {...partnersData} />
      <Footer data={footer}/>
    </main>
  );
}
