import '@/styles/2025/main.scss';

export const metadata = {
  metadataBase: new URL('https://kosciuszkon.pk.edu.pl/'),
  title: 'Kościuszkon - III Edycja 2025',
  description: `Trzecia edycja hackathonu organizowanego przez Wydział
  Informatyki i Telekomunikacji Politechniki Krakowskiej. Wydarzenie odbędzie się 31 maja 2025 roku o godzinie 11 w klubie Kwadrat.
  Na uczestników czekają 24 godziny pracy nad ciekawym wyzwaniem, dobra zabawa oraz wspaniałe nagrody.`,
  robots: {
    nosnippet: true,
    googleBot: {
      nosnippet: true,
    },
  },
  openGraph: {
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 2048,
        height: 2048,
        alt: 'Logo hackathonu Kościuszkon',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
