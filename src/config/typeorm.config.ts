import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'sqlite',
    database: 'lojadamae3.db',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: false
}