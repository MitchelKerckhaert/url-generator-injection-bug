import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { applicationConfig } from './configuration/application.config'

@Module({
  imports: [ConfigModule.forRoot({ load: [applicationConfig] })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
