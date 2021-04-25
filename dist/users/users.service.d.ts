import { Repository } from 'typeorm';
import { UsersEntity } from './users.entity';
import { UsersDTO } from './users.dto';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<UsersEntity>);
    showAll(): Promise<UsersEntity[]>;
    create(data: UsersDTO): Promise<UsersEntity>;
    findByEmail(email: string): Promise<UsersDTO>;
    read(id: number): Promise<UsersEntity>;
    update(id: number, data: Partial<UsersDTO>): Promise<UsersEntity>;
    destroy(id: number): Promise<{
        deleted: boolean;
    }>;
}
