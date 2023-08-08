import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, ConfigModule.forRoot({isGlobal: true}), PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
