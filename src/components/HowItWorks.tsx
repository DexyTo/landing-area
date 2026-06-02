import { getAssetPath } from '../utils/paths';
import Section from './Section';

export default function HowItWorks() {
  return (
    <Section id='how-to' className='border-t border-divider-clr pt-20'>
      <div className='flex flex-wrap justify-between items-center gap-10 mb-20'>
        <h2 className='heading1 text-headline-clr'>Map Your Success</h2>
        <a href='#' className='discover-more-btn'>
          Discover More
        </a>
      </div>
      <ul className='grid grid-cols-[repeat(3,minmax(240px,1fr))] gap-5 overflow-auto mb-25 md:mb-30'>
        {steps.map((step, ind) => (
          <li
            key={step.title}
            className='border-t border-divider-clr pt-15 pb-5'
          >
            <span className='inline-block text-[80px] text-accent-clr-6 leading-none mb-15'>
              {`0${ind + 1}`}
            </span>
            <h3 className='heading3 mb-5'>{step.title}</h3>
            <p className='paragraph text-paragraph-clr'>{step.description}</p>
          </li>
        ))}
      </ul>
      <img
        src={getAssetPath('mountainTrailImg.png')}
        alt='горная тропа'
        className='w-full min-h-150 object-cover rounded-3xl mb-10'
      />
    </Section>
  );
}

const steps = [
  {
    title: 'Get Started',
    description: 'With our intuitive setup, you’re up and running in minutes.',
  },
  {
    title: 'Customize and Configure',
    description: 'Adapt Area to your specific requirements and preferences.',
  },
  {
    title: 'Grow Your Business',
    description: 'Make informed decisions to exceed your goals.',
  },
];
