import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BasicAuthGuard implements CanActivate {
  constructor(private configService: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('Authorization header is missing');
    }

    const [type, credentials] = authHeader.split(' ');

    if (type !== 'Basic') {
      throw new UnauthorizedException('Invalid authentication type');
    }

    const [username, password] = Buffer.from(credentials, 'base64').toString().split(':');

    const validUsername = this.configService.get<string>('BASIC_AUTH_USERNAME');
    const validPassword = this.configService.get<string>('BASIC_AUTH_PASSWORD');

    if (username === validUsername && password === validPassword) {
      return true;
    }

    throw new UnauthorizedException('Invalid credentials');
  }
}
