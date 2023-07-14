'use server';

import { getCurrentUser } from '@/lib/session';
import { AddMealForm, AddMealSchema } from '../components/addMealForm';
import { db } from '@/lib/prisma';
import addIntegers from '../utils/addDefinedIntegers';
import addCurrentMeal from './addCurrentMeal';

const addMeal = async (input: AddMealSchema) => {
  const {
    name,
    item1,
    item2,
    item3,
    item4,
    item5,
    calories1,
    calories2,
    calories3,
    calories4,
    calories5,
  } = input;
  console.log('gelloeoeo');
  const total = addIntegers([
    calories1,
    calories2,
    calories3,
    calories4,
    calories5,
  ]);
  const user = await getCurrentUser();
  console.log(user);
  if (!user) return;
  const result = await db.meal.create({
    data: {
      userId: user.id,
      name: name,
      totalCals: total,
      item1: item1,
      item2: item2,
      item3: item3,
      item4: item4,
      item5: item5,
      calories1: calories1,
      calories2: calories2,
      calories3: calories3,
      calories4: calories4,
      calories5: calories5,
    },
  });
  await addCurrentMeal(name);
  return result;
};

export default addMeal;
