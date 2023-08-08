export const CONSTANTS = {
  name: 'nest-kickstarter',
  version: '0.0.1 alpha',
  port: 3000,
  description: 'NestJS Template',
  database: {
    connURL: 'mongodb://localhost:27017',
    dbName: 'nest-kickstarter',
  },
  encoding: {
    prefix: 'IJOETRJIGKGKGKF',
    suffix: 'JIGERIJGEIGEIRGIERLER',
    jwtSecret: 'LEFOEO0304FLLe2rkfk',
    jwtExpiresIn: '8h',
  },
  throttle: {
    ttl: 60,
    limit: 25,
  },
};
