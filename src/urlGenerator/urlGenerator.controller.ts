import { Controller, Get } from '@nestjs/common'
import { UrlGeneratorService } from './urlGenerator.service'

@Controller('url-generator')
export class UrlGeneratorController {
  constructor(private readonly _urlGeneratorService: UrlGeneratorService) {}

  @Get('test')
  async test() {
    return this._urlGeneratorService.signControllerUrl({
      controller: UrlGeneratorController,
      controllerMethod: UrlGeneratorController.prototype.test,
    })
  }
}
