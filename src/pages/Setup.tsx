import useLocoScroll from '@/utils/useLocoScroll';
import { Stepper } from './Setup/Stepper';

const Setup = () => {
  // @ts-ignore
  const { scrollToSection } = useLocoScroll('[data-scroll-container]');
  return (
    <div data-scroll-container>
      <Stepper />
    </div>
  );
};

export default Setup;
