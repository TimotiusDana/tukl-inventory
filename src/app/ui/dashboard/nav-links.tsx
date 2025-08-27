'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Define types for better type safety
interface NavigationLink {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links: NavigationLink[] = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Inventories',
    href: '/dashboard/invent',
    icon: DocumentDuplicateIcon,
  },
  { name: 'People In Charge', href: '/dashboard/incharge', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1" aria-label="Main navigation">
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href;
        
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              // Base styles
              'flex h-12 grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium transition-colors',
              // Default state
              'bg-gray-50 text-gray-700 hover:bg-sky-100 hover:text-blue-600',
              // Responsive styles
              'md:flex-none md:justify-start md:p-2 md:px-3',
              // Active state
              {
                'bg-sky-100 text-blue-600': isActive,
              }
            )}
            aria-current={isActive ? 'page' : undefined}
          >
            <LinkIcon 
              className="h-6 w-6" 
              aria-hidden="true"
            />
            <span className="hidden md:block">{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}