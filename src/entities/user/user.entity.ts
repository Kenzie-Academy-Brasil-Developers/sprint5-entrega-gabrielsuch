import { Entity, Column, PrimaryColumn } from "typeorm";


@Entity()
export class User {
    @PrimaryColumn("uuid")
    readonly id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    age: number

    @Column()
    created_at: Date

    @Column()
    updated_at: Date
}
