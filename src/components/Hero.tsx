import Section from './Section';

export default function Hero() {
  return (
    <Section className='overflow-hidden max-md:mt-26.5'>
      <h1 className='display-text text-center mb-30 md:mb-35 xl:mb-60'>
        Browse everything.
      </h1>
      <div className='relative h-90.5 bg-accent-clr-3 rounded-4xl'>
        <div className='absolute left-1/2 -translate-x-1/2 -top-12.5 w-67.5 h-135.5 bg-black rounded-4xl p-4.75 md:w-169.25 md:h-120 md:-top-15 xl:w-226.75 xl:h-161 xl:-top-35'>
          <div className='w-full h-full bg-[url(/heroImages/heroImage.png)] bg-no-repeat bg-cover rounded-4xl md:bg-[url(/heroImages/heroImageMD.png)] xl:bg-[url(/heroImages/heroImageXL.png)]'></div>
          <div className='absolute left-1/2 -translate-x-1/2 top-8 w-25 h-8 bg-black rounded-3xl md:hidden'></div>
        </div>
      </div>
    </Section>
  );
}
