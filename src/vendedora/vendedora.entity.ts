import { myBaseEntity } from "src/baseClass/baseEntity.entity";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Unique(['nome'])
@Entity('vendedora')
export class Vendedora extends myBaseEntity{

}