import { Button } from '@/components/ui/button';

const SavedFoodItem = () => {
  return (
    <li className=' hover:bg-slate-50'>
      <Button variant='ghost' className='flex justify-between w-full'>
        <h4>Meal</h4>
        <span>200</span>
      </Button>
    </li>
  );
};

export default SavedFoodItem;
