'use server';

import { db } from '@/lib/prisma';
import { getCurrentUser } from '@/lib/session';
import { Prisma } from '@prisma/client';

const getSteps = async () => {
  const user = await getCurrentUser();
  if (!user) return;
  const result = await db.steps.findMany({
    where: { userId: user.id },
    select: {
      count: true,
      date: true,
    },
  });
  console.log(user.id);
  return result;
};

export type GetSteps = Prisma.PromiseReturnType<typeof getSteps>;
export default getSteps;
