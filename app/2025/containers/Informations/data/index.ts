import styles from './SliderImageStyles.module.scss';

export const sliderContent = [
  {
    id: '2025-slide-1',
    image: {
      src: '/p2025/bcg/kwadrat.webp',
      alt: 'Budynek w którym mieści się studio kwadrat.',
      imageClass: styles['slideImage1']
    },
    content: {
      title: 'Czym jest Kościuszkon?',
      text: `Kościuszkon to hackathon organizowany przez Fundację PK, WRRS WiiT, WRSS WIEiK. 
      Jeśli lubisz programować, prezentować, projektować lub masz po prostu dużo świetnych
      pomysłów i czas w weekend, to wpadnij ze znajomymi. To już III edycja tego wspaniałego
      wydarzenia! `,
    },
  },
  {
    id: '2025-slide-2',
    image: {
      src: '/p2025/bcg/wydarzenie_live.webp',
      alt: 'Kamerzysta nagrywający wywiad.',
      imageClass: styles['slideImage2']
    },
    content: {
      title: 'Hackathon',
      text: `Chcesz przetestować swoje umiejętności i stworzyć praktyczną
      aplikację? A może jesteś poprostu kreatywny, potrafisz dobrze
      sprzedać pomysł i szybko się uczysz nowych technologii? Zbierz
      drużynę lub zapisz się, a my ją dla Ciebie znajdziemy. 
      Temat ujawnimy podczas wydarzenia. Dla uczestników zapewniamy jedzenie, napoje oraz miejsce do super zabawy!`,
    },
  },
  {
    id: '2025-slide-3',
    image: {
      src: '/p2025/bcg/kwadrat_napis.webp',
      alt: 'Napis "Kwadrat" na drzwiach przed wejściem do klubu.',
      imageClass: styles['slideImage3']
    },
    content: {
      title: 'Przebieg wydarzenia',
      text: `Konkursowi uczestnicy mają 24 godziny na przedstawienie swojego rozwiązania dla wyznaczonego problemu. 
      Projekty zostaną ocenione przez jury, w skład którego wchodzą partnerzy wydarzenia oraz pracownicy Politechniki Krakowskiej.`,
    },
  },
  {
    id: '2025-slide-4',
    image: {
      src: '/p2025/bcg/fotoramka_gigachad_aura.webp',
      alt: 'Zdjęcie z fotoramki, osoby wskazującej palcem w stronę fotografa.',
      imageClass: styles['slideImage4']
    },
    content: {
      title: 'Atrakcje',
      text: `Podczas wydarzenia nie zabraknie rozrywki i okazji do integracji! Uczestnicy w wolnej chwili 
      będą mogli zrelaksować się przy grach planszowych, PlayStation oraz wziąć udział w emocjonującym quizie 
      inspirowanym popularnymi teleturniejami, takimi jak Va Banque czy Familiada. To doskonała okazja, 
      aby połączyć dobrą zabawę z odrobiną rywalizacji i sprawdzić swoją wiedzę w luźnej, przyjaznej atmosferze!
      Dodatkowo na uczestników czeka specjalna fotoramka, dzięki której będzie można uwiecznić najlepsze 
      chwile wydarzenia i zabrać ze sobą pamiątkowe zdjęcia!`,
    },
  },
  {
    id: '2025-slide-5',
    image: {
      src: '/p2025/bcg/prezentacja.webp',
      alt: 'Kadr z targów pracy.',
      imageClass: styles['slideImage5']
    },
    content: {
      title: 'Sesja mentoringowa',
      text: `Podczas wydarzenia czeka na Was wyjątkowa okazja do rozmów z doświadczonymi specjalistami. 
      Sesja mentoringowa będzie nie tylko szansą na networking, ale także cennym wsparciem 
      w dopracowaniu Waszego projektu podczas hackathonu. 
      To idealny moment, aby uzyskać wskazówki, rozwiązać problemy i wzmocnić swoją koncepcję przed prezentacją!`
    },
  },
];
