import './globals.css';

export const metadata = {
  title: 'Vadym Loiko - Frontend Developer & Designer',
  description:
    'Портфоліо Вадима Лойка: адаптивна HTML, CSS і JavaScript верстка, web-проєкти, графічний дизайн та 3D-візуалізації.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
