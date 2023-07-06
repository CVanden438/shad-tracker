import React from 'react';
import { ThemeProvider } from './theme-provider';
import { ModeToggle } from './modetoggle';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';

const Header = () => {
  return (
    <header className='p-2 w-full flex items-center justify-between sticky border-b dark:border-slate-800 top-0'>
      <h1 className='font-bold text-xl'>
        <Link href='/'>Tracker</Link>
      </h1>
      <div className='flex'>
        <ModeToggle />
        <Link href='/auth' className={cn(buttonVariants({ variant: 'link' }))}>
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
