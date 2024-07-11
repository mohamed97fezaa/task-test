import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';
import { Task } from './task/task.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',  
      port: 5432,         
      username: 'postgres',  
      password: 'admin',      
      database: 'taskdb',  
      entities: [Task],
      synchronize: true,   
    }),
    TaskModule,
  ],
})
export class AppModule {}
