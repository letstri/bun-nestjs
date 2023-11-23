import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser() {
    const user = this.userRepository.create({
      firstName: 'Valerii',
      lastName: 'Strilets',
      age: 27,
    });

    const entity = await this.userRepository.save(user);
    return entity;
  }
}
