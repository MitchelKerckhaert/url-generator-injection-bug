import { Controller, Get, UseGuards } from '@nestjs/common'
import { TestService } from './test.service'
import { SignedUrlGuard } from '@/urlGenerator/signedUrlGuard'

@Controller()
export class TestController {
  constructor(private readonly _testService: TestService) {}

  @Get('get-signed-url')
  async getSignedUrl(): Promise<string> {
    return this._testService.getSignedUrl()
  }
}

@Controller()
export class ProtectedTestController {
  constructor(private readonly _testService: TestService) {}

  @Get('protected')
  @UseGuards(SignedUrlGuard)
  protectedRoute(): string {
    return 'This route can only be accessed using a signed URL'
  }
}
