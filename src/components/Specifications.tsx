import Section from './Section';

export default function Specifications() {
  return (
    <Section id='specifications' className='border-t border-accent-clr-6'>
      <div className='flex flex-col gap-10 items-center max-w-180 text-center mx-auto py-20 mb-5'>
        <span className='inline-block text-xs text-captions-clr'>Specs</span>
        <h2 className='heading1 text-headline-clr'>Why Choose Area?</h2>
        <p className='paragraph text-paragraph-clr'>
          You need a solution that keeps up. That’s why we developed Area. A
          developer-friendly approach to streamline your business.
        </p>
        <a href='#' className='discover-more-btn'>
          Discover More
        </a>
      </div>
      <ul className='grid grid-cols-[repeat(3,minmax(200px,1fr))] overflow-x-auto mb-30 -mx-2 md:mx-0'>
        {specs.map((spec, ind) => (
          <li
            key={spec.heading}
            className={`${ind === 0 ? 'shadow-[2px_0_6px_-1px_rgba(0,0,0,0.1)] border border-divider-clr rounded-2xl' : 'border-t border-transparent'}`}
          >
            <header className='text-center border-b border-accent-clr-6'>
              <h3
                className={`text-2xl font-medium ${ind === 0 ? 'text-headline-clr' : 'text-accent-clr-5'} leading-[1.2] pt-10 pb-6.25`}
              >
                {spec.heading}
              </h3>
            </header>
            <ul>
              {spec.items.map((item) => (
                <li
                  key={item}
                  className={`flex items-center gap-2 h-20 ${ind > 0 ? 'border-r-[0.5px]' : ''} border-b-[0.5px] border-divider-clr overflow-auto pl-7.5`}
                >
                  <img src='/mark.svg' alt='галочка' className='w-3.5 h-3.5' />
                  <p className='text-xs text-headline-clr leading-[1.4]'>
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}

const specs = [
  {
    heading: 'Area',
    items: [
      'Ultra-fast browsing',
      'Advanced AI insights',
      'Seamless integration',
      'Advanced AI insights',
      'Ultra-fast browsing',
      'Full UTF-8 support',
    ],
  },
  {
    heading: 'WebSurge',
    items: [
      'Fast browsing',
      'Basic AI recommendations',
      'Restricts customization',
      'Basic AI insights',
      'Fast browsing',
      'Potential display errors',
    ],
  },
  {
    heading: 'HyperView',
    items: [
      'Moderate speeds',
      'No AI assistance',
      'Steep learning curve',
      'No AI assistance',
      'Moderate speeds',
      'Partial UTF-8 support',
    ],
  },
];
