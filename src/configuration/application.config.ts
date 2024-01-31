import { registerAs } from '@nestjs/config'

export const applicationConfig = registerAs('application', () => ({
  port: 3000,
  url: 'http://localhost:3000',
}))
