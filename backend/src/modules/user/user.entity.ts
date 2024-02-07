import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  username: string;

  @ApiHideProperty()
  @Column()
  password: string;

  @ApiProperty()
  @Column()
  role: string;

  // @OneToOne(() => Profile, (profile) => profile.user, {
  //   onDelete: 'CASCADE',
  // })
  // @JoinColumn()
  // profile: Profile;
}
