
import "./globals.css";
import Navbar from "@/components/navbar"; 

export const metadata = {
  title: 'Helpers Platform',
  description: 'Platform for help in finding best rated worker for different purposes near you.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <div className="relative w-full flex items-center justify-center">
          <Navbar/>
        </div>
        {children}
      </body>
    </html>
  );
}
