import z from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string(),
  GITHUB_CLIENT_ID: z.string(),
  GITHUB_CLIENT_SECRET: z.string(),
  //   NODE_ENV: z
  //     .enum(['development', 'test', 'production'])
  //     .default('development'),
});

export const env = envSchema.parse(process.env);
