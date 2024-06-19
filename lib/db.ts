import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

async function test() {
  const token = await db.sMSToken.findUnique({
    where: {
      id: 3,
    },
  });

  console.log('token');
  console.log(token);
}
test();

export default db;
