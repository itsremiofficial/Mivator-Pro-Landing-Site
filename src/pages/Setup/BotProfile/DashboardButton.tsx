import { Rocket01Icon } from 'hugeicons-react';
import { Button } from '../ui/Button';
interface DashboardButtonProps {
  onClick?: () => void;
}

export function DashboardButton({ onClick }: DashboardButtonProps) {
  return (
    <Button variant="primary" type="button" className="w-full uppercase !py-6 flex gap-2" onClick={onClick}>
      Launch <Rocket01Icon />
    </Button>
  );
}
