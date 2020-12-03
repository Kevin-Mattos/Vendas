import { IsNumber, IsString } from "class-validator"

export class UpdateVendaDto{


    @IsNumber()
    valor: number

    @IsNumber()
    desconto: number

    @IsString()
    data: string
    
    @IsNumber()
    id_produto: number

    @IsNumber()
    id_vendedora: number

}