import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    mobile: number;

    @ApiProperty()
    city: string;

    @ApiProperty()
    isActive: boolean;
}
