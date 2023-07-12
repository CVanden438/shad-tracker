'use server';
import { db } from '@/lib/prisma';
import { StepsForm } from '../components/steps-form';
import { getCurrentUser } from '@/lib/session';

const addSteps = async (input: StepsForm) => {
  const user = await getCurrentUser();
  if (!user) return;
  const trimmedDate = input.date.toString().substring(0, 10);
  const result = db.steps.upsert({
    where: {
      date: trimmedDate,
    },
    update: {
      count: input.count,
    },
    create: {
      count: input.count,
      date: trimmedDate,
      userId: user?.id,
    },
  });
  return result;
};

export default addSteps;
