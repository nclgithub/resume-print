// components/Navbar.js
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // for App Router

interface NavbarProps {
  basePath?: string; // optional, default to root
}

export default function Navbar({ basePath = '' }: NavbarProps) {
  const pathname = usePathname(); // highlights active page

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'PDF', href: '/pdf' },
    { name: 'Print', href: '/print' },
  ];

  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      {links.map((link) => {
        const fullPath = basePath + link.href;

        return (
          <Link
          key={fullPath}
          href={fullPath}
          style={{
            marginRight: '1rem',
            textDecoration: pathname === fullPath ? 'underline' : 'none',
            fontWeight: pathname === fullPath ? 'bold' : 'normal',
          }}
        >
          {link.name}
        </Link>
        )
      })}
    </nav>
  );
}
