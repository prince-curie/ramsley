import { faker } from "@faker-js/faker";
import * as bcrypt from 'bcrypt';
import { ConfigService } from "@nestjs/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const config = new ConfigService();

export async function main() {
    let password = await bcrypt.hash('P@5sword', parseInt(config.get('SALT')))

    await prisma.user.create({
        data: {
            email: faker.internet.email(),
            password,
            username: 'last_born_001',
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
