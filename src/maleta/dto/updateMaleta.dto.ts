import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { CreateBaseDto } from "src/baseClass/createBaseDto.dto";

export class UpdateMaletaDto{
    
    @IsOptional()
    @IsString()
    nome: string


    @IsOptional()
    @IsNumber()
    id_vendedora: number

}