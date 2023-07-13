import { Button } from '@/components/ui/button';
import { GetSavedMeals } from '../actions/getSavedMeals';

const SavedFoodItem = ({
  meal,
}: {
  meal: { name: string; totalCals: number };
}) => {
  return (
    <li className=''>
      <Button variant='ghost' className='flex justify-between w-full'>
        <h4>{meal.name}</h4>
        <span>{meal.totalCals}</span>
      </Button>
    </li>
  );
};

export default SavedFoodItem;
