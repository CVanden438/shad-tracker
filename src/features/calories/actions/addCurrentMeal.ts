'use server';

import { db } from '@/lib/prisma';
import { getCurrentUser } from '@/lib/session';

const addCurrentMeal = async (mealName: string) => {
  const user = await getCurrentUser();
  if (!user) return;
  const result = await db.currentMeal.create({
    data: {
      userId: user?.id,
      mealName,
    },
  });
  return result;
};

export default addCurrentMeal;
