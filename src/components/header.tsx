import React from 'react';
import { ThemeProvider } from './theme-provider';
import { ModeToggle } from './modetoggle';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';
import { getCurrentUser } from '@/lib/session';
import { UserNav } from './usernav';

const Header = async () => {
  const user = await getCurrentUser();
  return (
    <header className='p-2 w-full flex items-center justify-between sticky border-b dark:border-slate-800 top-0'>
      <h1 className='font-bold text-xl'>
        <Link href='/'>Health Tracker</Link>
      </h1>
      <div className='flex gap-3 items-center'>
        <ModeToggle />

        {user ? (
          <UserNav user={user} />
        ) : (
          <Link
            href='/auth'
            className={cn(buttonVariants({ variant: 'link' }))}
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
