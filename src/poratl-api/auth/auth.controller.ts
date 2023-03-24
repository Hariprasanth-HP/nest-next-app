import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get()
  getAuth(): Promise<{ color: string; capacity: number }[]> {
    return this.authService.getAll();
  }
}
