export const metadata = {
  title: "All in One",
  description: "A hidden sanctuary for writers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
