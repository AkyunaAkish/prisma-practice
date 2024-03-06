import type { PrismaClient } from '@prisma/client';

export const deleteMany = async (prisma: PrismaClient) => {
  await prisma.user.deleteMany();
};
