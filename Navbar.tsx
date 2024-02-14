import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiMoonFill,
  RiPinterestFill,
  RiSunFill,
  RiTwitterFill
} from 'react-icons/ri';

function Navbar() {
  return (
    <nav className="max-w-4xl mx-auto flex items-center justify-between pt-4 lg:pt-8 pb-8 text-gray-800 dark:text-gray-100">
      <Link
        href="/"
        className="text-lg lg:text-xl font-semibold hover:underline hover:underline-offset-2"
      >
        @chirantanpradhan
      </Link>
      <div className="text-lg lg:text-xl flex space-x-4">
        {links.map(({ href, alt, icon }, index) => (
          <Link key={index} aria-label={alt} href={href} target="_blank">
            {icon}
          </Link>
        ))}
        <ToggleTheme />
      </div>
    </nav>
  );
}

function ToggleTheme() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {mounted ? (
        resolvedTheme === 'dark' ? (
          <RiSunFill />
        ) : (
          <RiMoonFill />
        )
      ) : (
        <RiSunFill className="invisible" />
      )}
    </button>
  );
}

const links = [
  {
    href: 'https://pin.it/4qTAjSa',
    alt: 'Pinterst',
    icon: <RiPinterestFill />
  },
  {
    href: 'https://twitter.com/Chirant04206451',
    alt: 'Twitter',
    icon: <RiTwitterFill />
  },
  {
    href: 'https://www.instagram.com/chirantan6109/',
    alt: 'Instagram',
    icon: <RiInstagramFill />
  },
  {
    href: 'https://github.com/CHIRANTAN1455',
    alt: 'GitHub',
    icon: <RiGithubFill />
  },
  {
    href: 'https://www.linkedin.com/in/chirantan-pradhan-76673019b/',
    alt: 'Linkedin',
    icon: <RiLinkedinFill />
  }
];

export default Navbar;
