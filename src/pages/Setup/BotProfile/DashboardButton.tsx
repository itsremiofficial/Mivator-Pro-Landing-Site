import { Button } from '../ui/Button';
import { IconDashboard } from '@/components/Icons';
export function DashboardButton() {
  return (
    <Button variant="primary" type="button" className="w-full uppercase !py-6 flex gap-2">
      Go to Dashboard <IconDashboard fill/>
    </Button>
  );
}
