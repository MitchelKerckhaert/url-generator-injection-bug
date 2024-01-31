import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { applicationConfig } from './configuration/application.config'
import { UrlGeneratorModule } from './urlGenerator/urlGenerator.module'
import { TestModule } from './testModule/test.module'

@Module({
  imports: [
    ConfigModule.forRoot({ load: [applicationConfig] }),
    TestModule,
    UrlGeneratorModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        appUrl: configService.get<string>('application.url') ?? '',
        secret: configService.get<string>('application.secret') ?? '',
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
