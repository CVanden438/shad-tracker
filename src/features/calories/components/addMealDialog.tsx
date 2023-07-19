import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import SavedFoodItem from './savedFoodItem';
import { AddMealForm } from './addMealForm';
import { GetSavedMeals } from '../actions/getSavedMeals';

const AddMealDialog = ({ meals }: { meals: GetSavedMeals }) => {
  if (!meals) return;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='mx-auto block'>Add Item</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enter Food Item</DialogTitle>
          <DialogDescription>
            Choose from saved meals or add a new one
          </DialogDescription>
        </DialogHeader>
        <span>Saved Meals</span>
        <div className='border rounded-md p-2'>
          <ul>
            {meals.map((meal) => {
              return <SavedFoodItem key={meal.name} meal={meal} />;
            })}
          </ul>
        </div>
        <span>Add New Meal</span>
        <AddMealForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddMealDialog;
