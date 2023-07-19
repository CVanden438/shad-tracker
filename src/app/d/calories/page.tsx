import getCurrentMeals from '@/features/calories/actions/getCurrentMeals';
import getSavedMeals from '@/features/calories/actions/getSavedMeals';
import AddMealDialog from '@/features/calories/components/addMealDialog';
import MealItem from '@/features/calories/components/mealItem';

export default async function Page() {
  const meals = await getSavedMeals();
  const currentMeals = await getCurrentMeals();
  return (
    <div className='p-4 w-11/12'>
      <h2 className='text-5xl font-bold'>Calories</h2>
      <div className='h-[500px] w-[400px]  rounded-md'>
        <h3 className='font-bold text-3xl text-center mb-2'>Today</h3>
        <div className='mb-2'>
          {currentMeals?.map((meal) => (
            <MealItem key={meal.meal.name} data={meal.meal} />
          ))}
        </div>
        <AddMealDialog meals={meals} />
      </div>
    </div>
  );
}
