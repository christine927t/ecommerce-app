
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Signer } from '@aws-sdk/rds-signer';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client.js';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    const host = process.env.DB_HOST!;
    const port = Number(process.env.DB_PORT ?? 5432);
    const user = process.env.DB_USER ?? 'postgres';
    const database = process.env.DB_NAME ?? 'postgres';
    const region = process.env.AWS_REGION ?? 'us-east-2';

    const signer = new Signer({
      hostname: host,
      port,
      username: user,
      region,
    });

    const adapter = new PrismaPg({
      host,
      port,
      user,
      database,
      password: async () => signer.getAuthToken(),
      ssl: { rejectUnauthorized: false },
    });

    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}