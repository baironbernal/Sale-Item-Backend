import {
  Table,
  Column,
  Model,
  IsEmail,
  AllowNull,
} from "sequelize-typescript";

@Table({
  timestamps: true,
  tableName: "users",
})

export class User extends Model {

  @Column
  name: string;

  @Column
  description: string;
  
  @IsEmail
  @Column
  email: string;

  @AllowNull
  @Column
  password?: string;
}