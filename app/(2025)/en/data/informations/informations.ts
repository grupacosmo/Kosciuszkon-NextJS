import styles from './SliderImageStyles.module.scss';

export const sliderContent = [
    {
        id: '2025-slide-1',
        image: {
            src: '/p2025/bcg/kwadrat.webp',
            alt: 'The building housing the Kwadrat studio.',
            imageClass: styles['slideImage1'],
        },
        content: {
            title: 'What is Kościuszkon?',
            text: `Kościuszkon is a hackathon organized by the PK Foundation, WRRS WiiT, WRSS WIEiK. 
      If you enjoy programming, presenting, designing, or simply have great ideas and some free time over the weekend, come join us with your friends. This is the 3rd edition of this fantastic event!`,
        },
    },
    {
        id: '2025-slide-2',
        image: {
            src: '/p2025/bcg/wydarzenie_live.webp',
            alt: 'A cameraman recording an interview.',
            imageClass: styles['slideImage2'],
        },
        content: {
            title: 'Hackathon',
            text: `Do you want to test your skills and create a practical application? Or maybe you're simply creative, good at selling ideas, and quick to learn new technologies? Gather a team or sign up, and we will find one for you. 
      The theme will be revealed during the event. For participants, we provide food, drinks, and a place for a great time!`,
        },
    },
    {
        id: '2025-slide-3',
        image: {
            src: '/p2025/bcg/kwadrat_napis.webp',
            alt: 'The word "Kwadrat" on the door of the club entrance.',
            imageClass: styles['slideImage3'],
        },
        content: {
            title: 'Event Progress',
            text: `Participants in the competition will have 24 hours to present their solution to a designated problem. 
      Projects will be evaluated by a jury, which includes event partners and staff from the Krakow University of Technology.`,
        },
    },
    {
        id: '2025-slide-4',
        image: {
            src: '/p2025/bcg/fotoramka_gigachad_aura.webp',
            alt: 'A photo taken in a photo frame, with a person pointing a finger at the photographer.',
            imageClass: styles['slideImage4'],
        },
        content: {
            title: 'Attractions',
            text: `There will be no shortage of entertainment and opportunities for integration during the event! In their free time, participants can relax with board games, PlayStation, or take part in an exciting quiz inspired by popular TV game shows like Va Banque or Familiada. It’s a perfect opportunity to combine fun with a little competition and test your knowledge in a relaxed, friendly atmosphere! 
      Additionally, participants can enjoy a special photo frame, where they can capture the best moments of the event and take home some memorable photos!`,
        },
    },
    {
        id: '2025-slide-5',
        image: {
            src: '/p2025/bcg/prezentacja.webp',
            alt: 'A shot from a job fair.',
            imageClass: styles['slideImage5'],
        },
        content: {
            title: 'Mentoring Session',
            text: `During the event, you'll have a unique opportunity to talk to experienced professionals. 
      The mentoring session will not only be a chance for networking but also valuable support in refining your project during the hackathon. 
      It’s the perfect moment to get tips, solve problems, and strengthen your concept before presenting it!`,
        },
    },
];
