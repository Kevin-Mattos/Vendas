import { myBaseEntity } from 'src/baseClass/baseEntity.entity'
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('venda')
export class Venda extends BaseEntity{

    @PrimaryGeneratedColumn() 
    id: number
    
    @Column()
    valor: number

    @Column()
    desconto: number

    @Column()
    data: string

    @Column()
    id_produto: number
    
    @Column()
    id_vendedora: number



}