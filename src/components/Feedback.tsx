import Section from './Section';

export default function FeedBack() {
  return (
    <Section className='grid gap-10 pb-25 md:pb-30 xl:grid-cols-2 xl:gap-5'>
      <img
        src='/feedbackImg.jpg'
        alt='Сфера между другими сферами'
        className='w-full h-full object-cover rounded-3xl'
      />
      <div className='px-4 pt-10 md:px-0 md:py-10.5 xl:pl-12.5 xl:py-35'>
        <blockquote className='heading2 mb-12.5'>
          “I was skeptical, but Area has completely transformed the way I manage
          my business. The data visualizations are so clear and intuitive, and
          the platform is so easy to use. I can't imagine running my company
          without it.”
        </blockquote>
        <cite className='not-italic'>
          <p className='paragraph mb-2'>John Smith</p>
          <span className='text-sx leading-[1.4] text-captions-clr'>
            Head of Data
          </span>
        </cite>
      </div>
    </Section>
  );
}
