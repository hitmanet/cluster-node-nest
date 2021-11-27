import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), TodoModule],
  exports: [TodoModule],
})
export class AppModule {}
