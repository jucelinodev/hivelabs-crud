import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('users')
class User {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  name: string

  @Column()
  lastname: string

  @Column({
    length: 30,
    unique: true,
  })
  nickname: string

  @Column()
  adressl: string

  @Column({
    length: 100,
    nullable: true,
  })
  bio: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default User
