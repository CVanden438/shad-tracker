import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import getSavedMeals from '@/features/calories/actions/getSavedMeals';
import AddItemDialog from '@/features/calories/components/addMealDialog';
import FoodItem from '@/features/calories/components/mealItem';
import calcTotalCalories from '@/features/calories/utils/calcTotalCalories';

export default async function Page() {
  const meals = await getSavedMeals();

  return (
    <div className='p-4 w-11/12'>
      <h2 className='text-5xl font-bold'>Calories</h2>
      <div className='h-[500px] w-[400px] border rounded-md'>
        <h3 className='font-bold text-3xl text-center mb-2'>Today</h3>
        <div className='mb-2'>
          <FoodItem />
          <FoodItem />
        </div>
        <AddItemDialog meals={meals} />
      </div>
    </div>
  );
}
