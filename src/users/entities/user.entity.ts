import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column("text")
    mobile: number;

    @Column()
    city: string;

    @Column({ default: true })
    isActive: boolean;
}
