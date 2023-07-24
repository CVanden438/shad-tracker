'use client';
import { Button } from '@/components/ui/button';
import addCurrentMeal from '../actions/addCurrentMeal';
import { useRouter } from 'next/navigation';

const SavedFoodItem = ({
  meal,
}: {
  meal: { name: string; totalCals: number };
}) => {
  const router = useRouter();
  const addMeal = async () => {
    await addCurrentMeal(meal.name);
    router.refresh();
  };
  return (
    <li className=''>
      <Button
        variant='ghost'
        className='flex justify-between w-full'
        onClick={addMeal}
      >
        <h4>{meal.name}</h4>
        <span>{meal.totalCals}</span>
      </Button>
    </li>
  );
};

export default SavedFoodItem;
