import { Module } from '@nestjs/common'
import { ProtectedTestController, TestController } from './test.controller'
import { TestService } from './test.service'

@Module({
  controllers: [TestController, ProtectedTestController],
  providers: [TestService],
})
export class TestModule {}
