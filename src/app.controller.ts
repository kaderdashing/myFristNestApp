import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service'; // Assurez-vous d'importer le service AuthService si ce n'est pas déjà fait.
import { JwtAuthGuard } from './auth/jwtAuthGuard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  getProfile() {
    // Cette route est sécurisée par le JwtAuthGuard.
    // Seuls les utilisateurs authentifiés avec un JWT valide peuvent y accéder.
    // Vous pouvez renvoyer des données brutes ici si nécessaire.
    return 'This is protected data in plain text for the profile route.';
  }
}
