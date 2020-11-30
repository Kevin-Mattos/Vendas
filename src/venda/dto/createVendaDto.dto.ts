import { IsNumber } from "class-validator"

export class CreateVendaDto{


    @IsNumber()
    valor: number

    @IsNumber()
    desconto: number
    
    @IsNumber()
    id_produto: number

    @IsNumber()
    id_vendedora: number

}