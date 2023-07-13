'use server';

import { db } from '@/lib/prisma';
import { getCurrentUser } from '@/lib/session';
import { Prisma } from '@prisma/client';

const getSavedMeals = async () => {
  const user = await getCurrentUser();
  if (!user) return;
  const result = await db.meal.findMany({
    where: { userId: user.id },
    select: {
      name: true,
      totalCals: true,
    },
  });
  return result;
};

export type GetSavedMeals = Prisma.PromiseReturnType<typeof getSavedMeals>;

export default getSavedMeals;
