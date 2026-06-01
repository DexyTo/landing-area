import Section from './Section';

export default function Features() {
  const features = [
    'Spot Trends in Seconds: No more digging through numbers.',
    'Get Everyone on the Same Page: Share easy-to-understand reports with your team.',
    'Make Presentations Pop: Interactive maps and dashboards keep your audience engaged.',
    'Your Global Snapshot: Get a quick, clear overview of your entire operation.',
  ];

  return (
    <Section className='grid mx-4 pb-30 md:mx-0 xl:grid-cols-2 xl:gap-5'>
      <div className='border-t border-divider-clr pt-15 pb-20'>
        <h2 className='heading1 text-headline-clr mb-10'>
          See the Big Picture
        </h2>
        <p className='paragraph text-paragraph-clr mb-10'>
          Area turns your data into clear, vibrant visuals that show you exactly
          what's happening in each region.
        </p>
        <ul className='mb-10'>
          {features.map((feature, ind) => (
            <li
              key={feature}
              className='flex gap-7.5 border-t border-divider-clr py-5 pr-20'
            >
              <span className='text-[15px] leading-[1.4] font-bold tracking-[-0.5%] text-paragraph-clr'>
                {'0' + (ind + 1)}
              </span>
              <p className='paragraph text-headline-clr'>{feature}</p>
            </li>
          ))}
        </ul>
        <a href='#' className='discover-more-btn'>
          Discover More
        </a>
      </div>
      <img
        src='/featureImage.jpg'
        alt='Изображение трех белых цилиндрических колонн на фоне теплого кремового цвета'
        className='w-full h-full object-cover rounded-4xl'
      />
    </Section>
  );
}
