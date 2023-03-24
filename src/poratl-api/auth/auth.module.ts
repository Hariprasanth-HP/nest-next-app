import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { handle } from './authService/handler/list';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
