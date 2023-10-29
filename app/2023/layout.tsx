import '@/styles/2023/main.scss';

export const metadata = {
  title: 'Kościuszkon - Hackathon WIiT PK - I Edycja',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pl'>
      <body>
        {children}
      </body>
    </html>
  );
}