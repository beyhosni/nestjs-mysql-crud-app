import { HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersDTO } from './users.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    showAllUsers(): Promise<{
        statusCode: HttpStatus;
        data: import("./users.entity").UsersEntity[];
    }>;
    createUsers(data: UsersDTO): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("./users.entity").UsersEntity;
    }>;
    readUser(id: number): Promise<{
        statusCode: HttpStatus;
        data: import("./users.entity").UsersEntity;
    }>;
    uppdateUser(id: number, data: Partial<UsersDTO>): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("./users.entity").UsersEntity;
    }>;
    deleteUser(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
}
