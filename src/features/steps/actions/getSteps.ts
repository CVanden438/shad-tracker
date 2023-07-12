'use server';

import { db } from '@/lib/prisma';
import { getCurrentUser } from '@/lib/session';

const getSteps = async () => {
  const user = await getCurrentUser();
  if (!user) return;
  const result = db.steps.findMany({
    where: { userId: user.id },
    select: {
      count: true,
      date: true,
    },
  });
  return result;
};

export type GetSteps = ReturnType<typeof getSteps>;
export default getSteps;
