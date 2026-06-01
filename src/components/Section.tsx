import { useEffect, useRef, type ReactNode } from 'react';

export default function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className: string;
  id?: string;
}) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }, // 10% секции видно
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`fade-in-section ${className}`}
    >
      {children}
    </section>
  );
}
