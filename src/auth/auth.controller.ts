import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    @HttpCode(200)
    @ApiTags('auth')
    @ApiBadRequestResponse()
    @ApiInternalServerErrorResponse()
    @ApiOkResponse()
    login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }
}
