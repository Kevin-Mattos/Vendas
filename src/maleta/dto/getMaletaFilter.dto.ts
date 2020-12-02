import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { CreateBaseDto } from "src/baseClass/createBaseDto.dto";

export class GetMaletaFilterDto{
    @IsOptional()
    nome: string
}