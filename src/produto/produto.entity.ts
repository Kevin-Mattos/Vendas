import { myBaseEntity } from "src/baseClass/baseEntity.entity";
import { Column, Entity } from "typeorm";


@Entity('produto')
export class Produto extends myBaseEntity{


    
    @Column()
    valor: number

    @Column()
    vendido: boolean

    @Column()
    modelo: string

    @Column()
    id_tipo: number

    @Column()
    id_maleta: number
    
    @Column()
    id_vendedora: number



}