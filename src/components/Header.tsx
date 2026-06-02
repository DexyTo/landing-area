import { useState } from 'react';
import { smoothScroll } from '../utils/scrolling';
import { getAssetPath } from '../utils/paths';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerBtnIcon = isMenuOpen ? 'closeIcon.svg' : 'butterIcon.svg';

  return (
    <>
      <header>
        <div className='hidden justify-between items-center md:flex pt-4 pb-20'>
          <a href='#' className='text-3xl font-medium'>
            Area
          </a>
          <nav className='hidden fixed left-1/2 -translate-x-1/2 backdrop-blur-lg rounded-4xl z-40 px-6 py-5 md:block'>
            <ul className='flex gap-6.75'>
              {links.map((link) => (
                <li
                  key={link.href}
                  className='text-sm font-bold text-nowrap leading-[1.4] transition-colors duration-500 hover:text-accent-clr-5'
                >
                  <a
                    href={link.href}
                    onClick={() => smoothScroll(link.href, 1000)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href='#'
            className='group inline-block text-sm font-bold text-white bg-accent-clr-1 rounded-full px-5.5 py-3.5 transition-colors duration-400 hover:bg-accent-clr-3'
          >
            <span className='mr-0.5'>Learn More</span>
            <img
              src={getAssetPath('arrow.png')}
              alt='стрелка'
              className='inline-block group-hover:-translate-y-1.5'
            />
          </a>
        </div>
        <div className='fixed left-0 top-0 min-w-full bg-white shadow-lg rounded-b-3xl z-40 md:hidden'>
          <div className='relative m-5 mb-5.5'>
            <a href='#' className='inline-block text-3xl font-medium'>
              Area
            </a>
            <button
              type='button'
              className='absolute right-0 top-0'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <img
                src={getAssetPath(headerBtnIcon)}
                alt=''
                className='w-6 h-6 object-none'
              />
            </button>
          </div>
          <nav className={`${!isMenuOpen ? 'hidden' : ''} mx-5 mt-14.5 mb-8`}>
            <ul className='mb-12.5'>
              {links.map((link) => (
                <li
                  key={link.href}
                  className='text-sm font-bold text-nowrap leading-[1.4] border-t border-divider-clr py-7.5 transition-colors duration-500 hover:text-accent-clr-5'
                >
                  <a
                    href={link.href}
                    onClick={() => smoothScroll(link.href, 1000)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href='#'
              className='group inline-block text-sm font-bold text-white bg-accent-clr-1 rounded-full px-5.5 py-3.5 transition-colors duration-400 hover:bg-accent-clr-3'
            >
              <span className='mr-0.5'>Learn More</span>
              <img
                src={getAssetPath('arrow.png')}
                alt='стрелка'
                className='inline-block group-hover:-translate-y-1.5'
              />
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

const links = [
  {
    href: '#benefits',
    name: 'Benefits',
  },
  {
    href: '#specifications',
    name: 'Specifications',
  },
  {
    href: '#how-to',
    name: 'How to',
  },
  {
    href: '#contact-us',
    name: 'Contact Us',
  },
];
