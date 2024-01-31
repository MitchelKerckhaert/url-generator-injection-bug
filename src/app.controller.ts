import { Controller, Get, UseGuards } from '@nestjs/common'
import { AppService } from './app.service'
import { SignedUrlGuard } from './urlGenerator/signedUrlGuard'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Get('protected')
  @UseGuards(SignedUrlGuard)
  protectedRoute(): string {
    return 'This route can only be accessed using a signed URL'
  }
}
