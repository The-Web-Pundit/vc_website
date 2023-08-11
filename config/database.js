module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '65.0.85.33'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'z3'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'postgres'),
      schema: env('DATABASE_SCHEMA', 'public'),
    },
    debug: false,
  },
});