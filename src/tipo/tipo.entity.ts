import { myBaseEntity } from "src/baseClass/baseEntity.entity";
import { BaseEntity, Column, Entity, Unique } from "typeorm";

@Unique(['nome'])
@Entity('tipo')
export class Tipo extends myBaseEntity{

}