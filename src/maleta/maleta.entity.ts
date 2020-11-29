import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Maleta extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string
}