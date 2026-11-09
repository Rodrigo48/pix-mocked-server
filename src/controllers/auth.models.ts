import { ApiProperty } from "@nestjs/swagger"

export class ValidateInput{ 
    @ApiProperty({ description: 'Tipo de autenticação', example: 'client_credentials' })  
    grant_type: string
    @ApiProperty({ description: 'Id do assinante', example: '111' })  
    client_id: string
    @ApiProperty({ description: 'Senha do assinante', example: 'aaa' })
    client_secret: string 
}

export class TokenResponse {
    @ApiProperty({ description: 'Token de acesso', example: '123-abc' })
    access_token: string
    @ApiProperty({ description: 'Tipo do token', example: 'Bearer' })
    token_type: 'Bearer'
    @ApiProperty({ description: 'Tempo de expiração do token em segundos', example: 300 })
    expires_in: number
}
