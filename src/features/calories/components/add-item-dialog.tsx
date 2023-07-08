import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import SavedFoodItem from './saved-food-item';
import { FoodItemForm } from './food-item-form';

const AddItemDialog = () => {
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
            <SavedFoodItem />
            <SavedFoodItem />
            <SavedFoodItem />
          </ul>
        </div>
        <span>Add New Meal</span>
        <FoodItemForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddItemDialog;
