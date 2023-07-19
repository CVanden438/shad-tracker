import { Button, buttonVariants } from '@/components/ui/button';
import { getCurrentUser } from '@/lib/session';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default async function Home() {
  const user = await getCurrentUser();
  console.log(user);
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <Button>This is button</Button>
      <Link href='/d/steps' className={cn(buttonVariants({ variant: 'link' }))}>
        Steps
      </Link>
    </main>
  );
}
