import { myBaseEntity } from "src/baseClass/baseEntity.entity";
import { Produto } from "src/produto/produto.entity";
import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Unique(['nome'])
@Entity('vendedora')
export class Vendedora extends myBaseEntity{

    @OneToMany(() => Produto, produto => produto.vendedora)   
    @JoinColumn({name: 'id_produto'}) 
    produtos: Produto[];

}