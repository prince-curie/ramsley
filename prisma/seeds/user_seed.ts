import { faker } from "@faker-js/faker";
import * as bcrypt from 'bcrypt';
import { ConfigService } from "@nestjs/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const config = new ConfigService();

export async function main() {
    let email = faker.internet.email()
    let password = await bcrypt.hash('password', parseInt(config.get('SALT')))

    await prisma.user.upsert({
        where: { email },
        update: {},
        create: {
            email,
            password,
            username: faker.internet.displayName(),
        }
    })
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
