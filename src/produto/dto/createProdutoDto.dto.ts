import { IsNotEmpty, IsNumber, IsOptional } from "class-validator"

export class CreateProdutoDto{

    
    @IsNotEmpty()
    nome: string

    @IsNotEmpty()
    valor: number

    @IsOptional()
    modelo: string

    @IsOptional()
    @IsNumber()
    id_maleta: number

    @IsNumber()
    id_vendedora: number

    @IsNumber()
    id_tipo: number
}