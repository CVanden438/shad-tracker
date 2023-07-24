import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
      <Tabs defaultValue='account'>
        <TabsList className='w-full'>
          <TabsTrigger value='account' className='w-1/2'>
            Current
          </TabsTrigger>
          <TabsTrigger value='password' className='w-1/2'>
            Graph
          </TabsTrigger>
          <TabsTrigger value='k' className='w-1/2'>
            Calander
          </TabsTrigger>
        </TabsList>
        <TabsContent value='account'>
          Make changes to your account here.
        </TabsContent>
        <TabsContent value='password'>Change your password here.</TabsContent>
      </Tabs>
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
