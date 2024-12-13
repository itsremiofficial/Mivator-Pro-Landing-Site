import IconSecurity from '@/components/Icon/Features/IconSecurity';
import Balancer from 'react-wrap-balancer';

const SecurityCard = () => {
  return (
    <div className="flex items-center justify-between grow">
      <Balancer className="feature-card-title font-medium leading-normal text-3xl">Robust Security System</Balancer>
      <div className="mask mask-squircle w-max relative">
        <div className="p-6 size-max bg-gradient-to-bl from-secondary to-secondary dark:from-primary-1000/50 dark:to-primary/30 rounded-3xl ">
          <IconSecurity className="size-16 text-light-100 dark:text-primary-600" />
        </div>
      </div>
    </div>
  );
};

export default SecurityCard;
