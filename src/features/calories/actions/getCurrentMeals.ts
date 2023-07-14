'use server';

import { db } from '@/lib/prisma';
import { getCurrentUser } from '@/lib/session';
import { Prisma } from '@prisma/client';

const getCurrentMeals = async () => {
  const user = await getCurrentUser();
  if (!user) return;

  const result = await db.currentMeal.findMany({
    where: {
      userId: user.id,
    },
    select: {
      meal: {
        select: {
          calories1: true,
          calories2: true,
          calories3: true,
          calories4: true,
          calories5: true,
          item1: true,
          item2: true,
          item3: true,
          item4: true,
          item5: true,
          totalCals: true,
          name: true,
        },
      },
    },
  });
  return result;
};

export type GetCurrentMeals = Prisma.PromiseReturnType<typeof getCurrentMeals>;

export default getCurrentMeals;
