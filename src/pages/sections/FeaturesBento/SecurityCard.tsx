import IconSecurity from '@Icons/Features/IconSecurity';

const SecurityCard = () => {
  return (
    <div className="flex items-center justify-between grow gap-4">
      <h2 className="feature-card-title font-medium leading-normal text-3xl text-balance ">Robust Security System</h2>
      <div className="mask mask-squircle w-max relative">
        <div className="p-6 size-max bg-gradient-to-bl from-secondary to-secondary dark:from-primary-1000/50 dark:to-primary/30 rounded-3xl ">
          <IconSecurity className="size-16 text-light-100 dark:text-primary-600" />
        </div>
      </div>
    </div>
  );
};

export default SecurityCard;
