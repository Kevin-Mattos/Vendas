import { BaseEntity, Column, Entity,  PrimaryGeneratedColumn } from "typeorm";


export abstract class myBaseEntity extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number


    @Column()
    nome: string
}