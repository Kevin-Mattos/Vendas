import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";
import { CreateBaseDto } from "src/baseClass/createBaseDto.dto";

export class CreateMaletaDto extends CreateBaseDto{
    
    @IsOptional()
    @IsNumber()
    id_vendedora: number
}