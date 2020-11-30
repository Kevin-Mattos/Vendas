import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'sqlite',
    database: 'lojadamae.db',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true
}