import type { PrismaClient } from '@prisma/client';

export const createMany = async (prisma: PrismaClient) => {
  await prisma.user.deleteMany();

  const users = await prisma.user.createMany({
    data: [
      {
        name: 'Q',
        age: 29,
        email: 'q@test.com',
      },
      {
        name: 'Xerxes',
        age: 1240,
        email: 'xerxes@test.com',
      },
    ],
  });

  console.log('Users: ', users);
};
