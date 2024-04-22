import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { LoginDto, RegisterDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly jwtService: JwtService,
    // private readonly prisma: 
    private readonly configService: ConfigService,
  ) { }

  // Register user service
  async register(registerDto: RegisterDto, response: Response) {
    const { name, email, password } = registerDto;
    const user = {
      name,
      email,
      password,
    };
    return user;
  }

  // Login service
  async login(loginDto: LoginDto, response: Response) {
    const { email, password } = loginDto;
    const user = {
      email,
      password,
    };
    return user;
  }

  // Get all users service
  async getUsers() {
    const users = [
      {
        id:"1234",
        name:"test",
        email:"abc@gmail.com",
        password:"1234567f",
      },
    ];
    return users;
  }
}
