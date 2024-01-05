import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import FooterCredit from '@/components/FooterCredit';
import AuthProvider from '@/utils/AuthProvider';

const quickSand = Quicksand({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "Siddhant Mishra - Portfolio",

  description: 'Siddhant mishra full stack we developer',
  keywords: [
    'Siddhant Mishra',
    'Web Developer Siddhant Mishra',
    'Next.js Developer',
    'React Developer',
    'Full-Stack Web Developer',
    'Front-End Engineer',
    'MERN Stack Specialist',
    'UI/UX Enthusiast',
    'JavaScript Developer',
    'Responsive Web Design Expert',
    'Code Maestro',
    'Creative Developer',
    'Digital Innovator',
    'Dynamic Web Solutions',
    'Coding Virtuoso',
    'Tech Explorer',
    'Interactive Web Developer',
    'Tech Enthusiast',
    'Modern Web Applications Craftsman',
    'Performance Optimization Guru'    
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${quickSand.className} mx-auto max-w-screen-2xl text-[#e6ebff]`}
      >
        <AuthProvider>
          <NavBar />
          {children}
          <FooterCredit />
        </AuthProvider>
      </body>
    </html>
  );
}
