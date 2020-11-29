import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'sqlite',
    database: 'lojadamae',
    entities: [__dirname + '../**/*.entity.{.ts,.js}'],
    synchronize: true
}