import { UrlGeneratorService } from '@/urlGenerator/urlGenerator.service'
import { Injectable } from '@nestjs/common'
import { ProtectedTestController } from './test.controller'

@Injectable()
export class TestService {
  constructor(private readonly _urlGeneratorService: UrlGeneratorService) {}

  getSignedUrl(): string {
    return this._urlGeneratorService.signControllerUrl({
      controller: ProtectedTestController,
      controllerMethod: ProtectedTestController.prototype.protectedRoute,
    })
  }
}
