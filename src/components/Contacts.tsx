import { getAssetPath } from '../utils/paths';
import Section from './Section';

export default function Contacts() {
  return (
    <Section id='contact-us' className='max-w-150 text-center mx-auto py-30'>
      <h2 className='heading1 mb-10'>Connect with us</h2>
      <p className='paragraph text-paragraph-clr mb-10'>
        Schedule a quick call to learn how Area can turn your regional data into
        a powerful advantage.
      </p>
      <a
        href='#'
        className='group inline-block w-full text-sm text-white font-bold leading-[1.4] bg-accent-clr-1 rounded-full transition-colors duration-400 py-3.5 hover:bg-accent-clr-3'
      >
        <span className='mr-0.5'>Learn More</span>
        <img
          src={getAssetPath('arrow.png')}
          alt='стрелка'
          className='inline-block group-hover:-translate-y-1.5'
        />
      </a>
    </Section>
  );
}
