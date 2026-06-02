import { getAssetPath } from '../utils/paths';
import Section from './Section';

export default function TrustedBy() {
  return (
    <Section className='py-12.5'>
      <h2 className='text-[15px] font-normal text-paragraph-clr mb-7.5'>
        Trusted by
      </h2>
      <ul className='flex flex-wrap justify-center gap-x-10 gap-y-5'>
        {logoList.map((logo, ind) => (
          <li key={logo} className='flex w-37.5 h-21 xl:w-38.5'>
            <img
              src={getAssetPath(`trustedIcons/${logo}`)}
              alt={`Лого ${ind}`}
              className='object-none'
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}

const logoList = [
  'Logo1.svg',
  'Logo2.svg',
  'Logo3.svg',
  'Logo4.svg',
  'Logo5.svg',
  'Logo6.svg',
];
