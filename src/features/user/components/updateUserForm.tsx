'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { User } from 'next-auth';
import updateName from '../actions/updateName';

const NameFormSchema = z.object({
  name: z.string({
    required_error: 'A name is required.',
  }),
});

export type NameForm = z.infer<typeof NameFormSchema>;

export default function NameForm({ user }: { user: User }) {
  const form = useForm<NameForm>({
    resolver: zodResolver(NameFormSchema),
    defaultValues: { name: user.name ?? '' },
  });

  async function onSubmit(data: z.infer<typeof NameFormSchema>) {
    console.log(data);
    await updateName(data.name);
    console.log('done');
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
}
