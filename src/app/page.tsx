import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <Button>This is button</Button>
      <Link href='/d/steps' className={cn(buttonVariants({ variant: 'link' }))}>
        Steps
      </Link>
    </main>
  );
}
