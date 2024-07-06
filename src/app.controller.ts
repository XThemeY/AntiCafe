import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  async default(): Promise<{ status: string }> {
    return { status: 'Server is running' };
  }
}
