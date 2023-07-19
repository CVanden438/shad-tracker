'use client';
import { Button } from '@/components/ui/button';
import addCurrentMeal from '../actions/addCurrentMeal';

const SavedFoodItem = ({
  meal,
}: {
  meal: { name: string; totalCals: number };
}) => {
  return (
    <li className=''>
      <Button
        variant='ghost'
        className='flex justify-between w-full'
        onClick={() => addCurrentMeal(meal.name)}
      >
        <h4>{meal.name}</h4>
        <span>{meal.totalCals}</span>
      </Button>
    </li>
  );
};

export default SavedFoodItem;
