import { MikroORM as ORM } from '@mikro-orm/core';
import { prodMode } from './constant';

const main = async () => {
  const orm = await ORM.init({
    entities:[],
    dbName: 'liredit',
    type: 'postgresql',
    debug: !prodMode
  });
};
main();
