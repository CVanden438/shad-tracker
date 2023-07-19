'use server';
import { db } from '@/lib/prisma';
import { getCurrentUser } from '@/lib/session';

const updateName = async (input: string) => {
  const user = await getCurrentUser();
  if (!user) return;
  const result = db.user.update({
    where: {
      id: user.id,
    },
    data: {
      name: input,
    },
  });
  return result;
};

export default updateName;
