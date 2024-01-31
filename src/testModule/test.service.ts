import { AppController } from '@/app.controller'
import { UrlGeneratorService } from '@/urlGenerator/urlGenerator.service'
import { Injectable } from '@nestjs/common'

@Injectable()
export class TestService {
  constructor(private readonly _urlGeneratorService: UrlGeneratorService) {}

  getSignedUrl(): string {
    return this._urlGeneratorService.signControllerUrl({
      controller: AppController,
      controllerMethod: AppController.prototype.protectedRoute,
    })
  }
}
