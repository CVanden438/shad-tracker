import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    DATABASE_URL: z.string.url(),
    NEXTAUTH_SECRET: z.string().min(1),
    NODE_ENV: z.enum(['development', 'test', 'production']),
    GITHUB_CLIENT_ID: z.required().string().min(1),
    GITHUB_CLIENT_SECRET: z.required().string().min(1),
  },
  skipValidation: process.env.SKIP_ENV_VALIDATION,
  client: {},
  // NOTE: specifying runtimeEnv is not necessary for Next,js >= 13.4.4
  // runtimeEnv: {},
  // you only need to destructure client variables:
  experimental__runtimeEnv: {},
});

// const envSchema = z.object({
//   DATABASE_URL: z.string(),
//   GITHUB_CLIENT_ID: z.string(),
//   GITHUB_CLIENT_SECRET: z.string(),
//   //   NODE_ENV: z
//   //     .enum(['development', 'test', 'production'])
//   //     .default('development'),
// });

// export const env = envSchema.parse(process.env);
