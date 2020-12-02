import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'sqlite',
    database: 'loja.db',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: false
}