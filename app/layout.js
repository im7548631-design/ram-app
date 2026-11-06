import './globals.css';

export const metadata = {
  title: 'RAM Service API',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
