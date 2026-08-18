import './globals.css';

export const metadata = {
  title: 'HTML CSS JS Developer Portfolio',
  description:
    'Портфоліо HTML CSS JS розробника: сучасні інтерфейси, адаптивна верстка, анімації та чистий JavaScript.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
