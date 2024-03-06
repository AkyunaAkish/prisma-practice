import type { PrismaClient } from '@prisma/client';

export const create = async (prisma: PrismaClient) => {
  await prisma.user.deleteMany();

  const user = await prisma.user.create({
    data: {
      name: 'Q',
      age: 29,
      email: 'q@test.com',
      userPreference: {
        create: {
          emailUpdates: true,
        },
      },
    },
    // to get only part of some item
    select: {
      name: true,
      // userPreference: true, // full user preference
      userPreference: { select: { id: true } },
    },
    // to get full referenced item (you cannot do a select + includes, only one or the other)
    // include: {
    //   userPreference: true,
    // },
  });

  console.log('User: ', user);
};
