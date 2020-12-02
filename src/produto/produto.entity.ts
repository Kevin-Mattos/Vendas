import { myBaseEntity } from "src/baseClass/baseEntity.entity";
import { Vendedora } from "src/vendedora/vendedora.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";


@Entity('produto')
export class Produto extends myBaseEntity{


    
    @Column()
    valor: number

    @Column()
    vendido: number

    @Column()
    modelo: string

    @Column()
    id_tipo: number

    @Column()
    id_maleta: number
    
    @Column()
    id_vendedora: number


   
    @ManyToOne(() => Vendedora, vendedora => vendedora.produtos)    
    @JoinColumn({name: 'id_vendedora'})
    vendedora: Vendedora;



}