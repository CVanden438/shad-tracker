'use client';

import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Icons } from '@/components/icons';
import addMeal from '../actions/addMeal';

const addMealSchema = z.object({
  name: z.string().min(2, {
    message: 'Meal name must be at least 2 characters.',
  }),
  item1: z.string(),
  item2: z.string().optional(),
  item3: z.string().optional(),
  item4: z.string().optional(),
  item5: z.string().optional(),
  calories1: z.coerce
    .number()
    .min(0, { message: 'Must have a positive number of calories' }),
  calories2: z.coerce
    .number()
    .min(0, { message: 'Must have a positive number of calories' })
    .optional(),
  calories3: z.coerce
    .number()
    .min(0, { message: 'Must have a positive number of calories' })
    .optional(),
  calories4: z.coerce
    .number()
    .min(0, { message: 'Must have a positive number of calories' })
    .optional(),
  calories5: z.coerce
    .number()
    .min(0, { message: 'Must have a positive number of calories' })
    .optional(),
});

export type AddMealSchema = z.infer<typeof addMealSchema>;

export function AddMealForm() {
  const [items, setItems] = useState(1);
  const form = useForm<z.infer<typeof addMealSchema>>({
    resolver: zodResolver(addMealSchema),
    defaultValues: {
      name: '',
      item1: '',
      item2: '',
      item3: '',
      item4: '',
      item5: '',
      calories1: 0,
      calories2: 0,
      calories3: 0,
      calories4: 0,
      calories5: 0,
    },
  });

  async function onSubmit(values: z.infer<typeof addMealSchema>) {
    console.log('jrejrej');
    await addMeal(values);
    return;
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-0'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Meal Name</FormLabel>
              <FormControl>
                <Input placeholder='' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex gap-2'>
          <FormField
            control={form.control}
            name='item1'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ingredient 1</FormLabel>
                <FormControl>
                  <Input className='' placeholder='' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='calories1'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Calories</FormLabel>
                <FormControl>
                  <Input
                    className='w-3/4'
                    placeholder=''
                    {...field}
                    type='number'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {items >= 2 && (
          <div className='flex relative gap-2'>
            <FormField
              control={form.control}
              name='item2'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ingredient 2</FormLabel>
                  <FormControl>
                    <Input placeholder='' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='calories2'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Calories</FormLabel>
                  <FormControl>
                    <Input
                      className='w-3/4'
                      placeholder=''
                      {...field}
                      type='number'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {items === 2 && (
              <Button
                type='button'
                onClick={() => setItems(items - 1)}
                className='bottom-0 absolute right-0'
              >
                <Icons.close />
              </Button>
            )}
          </div>
        )}
        {items >= 3 && (
          <div className='flex relative gap-2'>
            <FormField
              control={form.control}
              name='item3'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ingredient 3</FormLabel>
                  <FormControl>
                    <Input placeholder='' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='calories3'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Calories</FormLabel>
                  <FormControl>
                    <Input
                      className='w-3/4'
                      placeholder=''
                      {...field}
                      type='number'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {items === 3 && (
              <Button
                type='button'
                onClick={() => setItems(items - 1)}
                className='bottom-0 absolute right-0'
              >
                <Icons.close />
              </Button>
            )}
          </div>
        )}
        {items >= 4 && (
          <div className='flex relative gap-2'>
            <FormField
              control={form.control}
              name='item4'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ingredient 4</FormLabel>
                  <FormControl>
                    <Input placeholder='' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='calories4'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Calories</FormLabel>
                  <FormControl>
                    <Input
                      className='w-3/4'
                      placeholder=''
                      {...field}
                      type='number'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {items === 4 && (
              <Button
                type='button'
                onClick={() => setItems(items - 1)}
                className='bottom-0 absolute right-0'
              >
                <Icons.close />
              </Button>
            )}
          </div>
        )}
        {items >= 5 && (
          <div className='flex relative gap-2'>
            <FormField
              control={form.control}
              name='item5'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ingredient 5</FormLabel>
                  <FormControl>
                    <Input placeholder='' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='calories5'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Calories</FormLabel>
                  <FormControl>
                    <Input
                      className='w-3/4'
                      placeholder=''
                      {...field}
                      type='number'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {items === 5 && (
              <Button
                type='button'
                onClick={() => setItems(items - 1)}
                className='bottom-0 absolute right-0'
              >
                <Icons.close />
              </Button>
            )}
          </div>
        )}
        {items < 5 && (
          <Button type='button' onClick={() => setItems(items + 1)}>
            Add Item
          </Button>
        )}
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
}
