import { IsNumber } from "class-validator"

export class CreateVendaDto{


    @IsNumber()
    valor: number

    @IsNumber()
    desconto: number
    
    @IsNumber()
    id_item: number

    @IsNumber()
    id_vendedora: number

}