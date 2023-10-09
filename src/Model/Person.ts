import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Person {

    @PrimaryGeneratedColumn({ name: 'person_id' })
    personId: number;

    @Column('int', { nullable: true, name: 'cpr_number' })
    cpr: number | null;

    @Column('varchar', { length: 255, nullable: true, name: 'full_name' })
    fullName: string | null;

    @Column('varchar', { nullable: true, name: 'gender' })
    gender: string | null;

    @CreateDateColumn({ nullable: true, name: 'date_of_birth' })
    dateOfBirth: Date | null;

    @Column('varchar', { length: 255, nullable: true, name: 'last_login' })
    address: Date | null;

    @Column('int', { nullable: true, name: 'phone_number' })
    phoneNumber: number | null;
}