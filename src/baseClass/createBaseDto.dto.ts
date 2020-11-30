import { IsNotEmpty } from "class-validator";

export abstract class CreateBaseDto{

    @IsNotEmpty()
    nome: string
}