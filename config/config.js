require('dotenv').config();
const joi = require('joi')

const envVarsSchema = joi.object({
  NODE_ENV: joi.string()
    .allow(['development', 'production', 'test', 'staging'])
    .required(),
  PORT: joi.number().default(8080),
  DATABASE: joi.string().required(),
  DATABASE_DIALECT: joi.string().default('postgres'),
  DATABASE_PASSWORD: joi.string().default(null),
  DATABASE_USER: joi.string().required(),
  HOST: joi.string().required(),
  SECRET_KEY: joi.string().required(),
  JWT_EXPIRATION: joi.string().required(),
})
  .unknown()
  .required()

const { error, value: envVars } = joi.validate(process.env, envVarsSchema)

if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}


const config = {
  env: envVars.NODE_ENV || 'development',
  port: envVars.PORT,
  databaseName: envVars.DATABASE,
  dbUsername: envVars.DATABASE_USER,
  databaseDialect: envVars.DATABASE_DIALECT,
  dbPassword: envVars.password,
  host: envVars.HOST,
  secretKey: envVars.SECRET_KEY,
  jwtExpiration: envVars.JWT_EXPIRATION,
};

module.exports = config;
