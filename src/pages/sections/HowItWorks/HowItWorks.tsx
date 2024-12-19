import { Timeline } from './Timeline';

export function HowItWorks() {
  const data = [
    {
      title: 'PAY',
      content: (
        <div className="grid grid-cols-1 w-xl">
          <img src="/steps/pay.png" alt="startup template" className="rounded-lg object-cover w-full" width={300} height={300} />
        </div>
      ),
    },
    {
      title: 'CONFIGURE',
      content: (
        <div className="grid grid-cols-1 w-xl">
          <img src="/steps/configure.png" alt="startup template" className="rounded-lg object-cover w-full" width={300} height={300} />
        </div>
      ),
    },
    {
      title: 'LAUNCH',
      content: (
        <div className="grid grid-cols-1 w-xl">
          <img src="/steps/launch.png" alt="startup template" className="rounded-lg object-cover w-full" width={300} height={300} />
        </div>
      ),
    },
  ];
  return (
    <section id="how-it-works" className="relative bg-light-200 dark:bg-primary-1200 w-screen pt-60 [mask-image:linear-gradient(to_bottom,transparent_0%,black_5%,black_90%,transparent_100%)]">
      <Timeline data={data} />
    </section>
  );
}
