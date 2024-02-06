import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  role: string;

  // @OneToOne(() => Profile, (profile) => profile.user, {
  //   onDelete: 'CASCADE',
  // })
  // @JoinColumn()
  // profile: Profile;
}
