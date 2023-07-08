import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import AddItemDialog from '@/features/calories/components/add-item-dialog';
import FoodItem from '@/features/calories/components/food-item';

export default function Page() {
  return (
    <div className='p-4 w-11/12'>
      <h2 className='text-5xl font-bold'>Calories</h2>
      <div className='h-[500px] w-[400px] border rounded-md'>
        <h3 className='font-bold text-3xl text-center mb-2'>Today</h3>
        <div className='mb-2'>
          <FoodItem />
          <FoodItem />
        </div>
        <AddItemDialog />
      </div>
    </div>
  );
}
