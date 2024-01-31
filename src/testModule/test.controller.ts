import { Controller, Get } from '@nestjs/common'
import { TestService } from './test.service'

@Controller()
export class TestController {
  constructor(private readonly _testService: TestService) {}

  @Get('get-signed-url')
  async getSignedUrl(): Promise<string> {
    return this._testService.getSignedUrl()
  }
}
