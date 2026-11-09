import { Body, Controller, Post } from "@nestjs/common";
import { ApiCreatedResponse } from "@nestjs/swagger";
import { Auth } from "../core/auth/auth";
import { TokenResponse, ValidateInput } from "./auth.models";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: Auth) { }

    @Post()
    @ApiCreatedResponse({ type: TokenResponse })
    async validate(@Body() credentials:ValidateInput): Promise<TokenResponse> {
        if (credentials.grant_type != 'client_credentials') {
            throw new Error('Invalid grant_type');
        }
        else {
            return {
                access_token: await this.authService.validate(credentials.client_id, credentials.client_secret),
                token_type: 'Bearer',
                expires_in: 300 //5 min
            }
        }


    }
}
