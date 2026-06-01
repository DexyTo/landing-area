import Section from './Section';

export default function Benefits() {
  return (
    <Section id='benefits' className='pt-20 pb-30'>
      <span className='inline-block text-xs text-captions-clr mb-12.5'>
        Benefits
      </span>
      <h2 className='heading1 text-headline-clr mb-12.5'>
        We’ve cracked the code.
      </h2>
      <p className='paragraph text-paragraph-clr mb-22.5'>
        Area provides real insights, without the data overload.
      </p>
      <ul className='grid gap-5 mb-15 md:grid-cols-2 xl:grid-cols-4'>
        {benefits.map((benefit, ind) => (
          <li
            key={benefit.heading}
            className='border-t border-divider-clr py-10'
          >
            <img
              src={`/benefitsIcons/${benefit.icon}`}
              alt={`Иконка ${ind}`}
              className='w-6 h-6 mb-6'
            />
            <h4 className='heading3 text-headline-clr mb-5'>
              {benefit.heading}
            </h4>
            <p className='text-[15px] text-paragraph-clr leading-[1.4]'>
              {benefit.description}
            </p>
          </li>
        ))}
      </ul>
      <img
        src='/mountainImage.png'
        alt='Изображение гор'
        className='w-full h-150 object-cover rounded-4xl'
      />
    </Section>
  );
}

const benefits = [
  {
    icon: 'icon1.svg',
    heading: 'Amplify Insights',
    description:
      'Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.',
  },
  {
    icon: 'icon2.svg',
    heading: 'Control Your Global Presence',
    description:
      'Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.',
  },
  {
    icon: 'icon3.svg',
    heading: 'Remove Language Barriers',
    description:
      'Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.',
  },
  {
    icon: 'icon4.svg',
    heading: 'Visualize Growth',
    description:
      'Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.',
  },
];
