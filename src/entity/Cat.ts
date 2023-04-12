import { Field, Int, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
@ObjectType()
export class Cat {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id!: number;

  @Column()
  @Field()
  name!: string;

  @Column()
  @Field()
  age!: number;

  @Column()
  @Field()
  breed!: string;

  @Column()
  @Field()
  color!: string;

  @Column()
  @Field()
  energy_level!: number;

  @Column()
  @Field()
  createdAt!: Date;

  @Column("text", { array: true })
  @Field(() => [String])
  temperament!: string[];
}
