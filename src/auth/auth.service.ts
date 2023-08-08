import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService, 
        private jwtService: JwtService
    ) {}

    async login(loginDto: LoginDto) {
        try {
            const user = await this.prisma.user.findUnique({
                where: {
                  username: loginDto.username,
                },
            });
    
            if(!user) {
                throw new BadRequestException('Username or password incorrect');
            }

            const isMatch = await compare(loginDto.password, user.password);
    
            if(!isMatch) {
                throw new BadRequestException('Username or password incorrect');
            }
    
            const data = { sub: user.id, username: user.username, email: user.email};
    
            const token = await this.jwtService.signAsync(data);
    
            return {
                message: 'Login successful',
                data: {
                    token
                }
            }
        } catch (error) {
            if(error.status === 400) return error;

            throw new InternalServerErrorException();
        }
    }
}
