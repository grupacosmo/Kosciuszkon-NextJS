import '@/styles/2024/main.scss';

export const metadata = {
  metadataBase: new URL('https://kosciuszkon.pk.edu.pl/2023'),
  title: 'Kościuszkon - I Edycja 2023',
  description: `Pierwsza edycja hackathonu organizowanego przez Wydział
  Informatyki i Telekomunikacji Politechniki Krakowskiej. Pierwsza edycja odbyło się 5 marca 2023 roku o godzinie 11:00.
  Głównymi tematami wydarzenia było zdrowie psychiczne, zdrowie fizyczne oraz kultura i rozrywka.
  Na uczestników czekały 24 godziny pracy nad ciekawym wyzwaniem, dobra zabawa oraz liczne atrakcje.`,
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
  return    (
      <html lang="pl">
      <body>{children}</body>
      </html>
  )
}
