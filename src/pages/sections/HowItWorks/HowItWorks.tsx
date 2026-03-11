import githubPagesBase from '@/assets/CONSTANTS';
import { Timeline } from './Timeline';

export function HowItWorks() {
  const data = [
    {
      title: 'PAY',
      content: (
        <div className="grid grid-cols-1 xl:w-xl">
          <picture>
            <source srcSet={`/${githubPagesBase}steps/pay.webp`} type="image/webp" />
            <img src={`/${githubPagesBase}steps/pay.avif`} alt="Step Pay" className="rounded-lg object-cover w-full" width={300} height={300} />
          </picture>
        </div>
      ),
    },
    {
      title: 'CONFIGURE',
      content: (
        <div className="grid grid-cols-1 xl:w-xl">
          <picture>
            <source srcSet={`/${githubPagesBase}steps/configure.webp`} type="image/webp" />
            <img src={`/${githubPagesBase}steps/configure.avif`} alt="Step Configure" className="rounded-lg object-cover w-full" width={300} height={300} />
          </picture>
        </div>
      ),
    },
    {
      title: 'LAUNCH',
      content: (
        <div className="grid grid-cols-1 xl:w-xl">
          <picture>
            <source srcSet={`/${githubPagesBase}steps/launch.webp`} type="image/webp" />
            <img src={`/${githubPagesBase}steps/launch.avif`} alt="Step Launch" className="rounded-lg object-cover w-full" width={300} height={300} />
          </picture>
        </div>
      ),
    },
  ];
  return (
    <section
      id="how-it-works"
      className="relative bg-light-200 dark:bg-primary-1200 w-screen section_padding [mask-image:linear-gradient(to_bottom,transparent_0%,black_5%,black_90%,transparent_100%)]"
    >
      <Timeline data={data} />
    </section>
  );
}
