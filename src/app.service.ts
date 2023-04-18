import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  async getHello(): Promise<string> {
    return `Total marketplaces is ${await this.prismaService.marketsplaces.count()}`;
  }
}
