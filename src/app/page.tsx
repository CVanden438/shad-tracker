import { ModeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <ModeToggle />
      <Button>This is button</Button>
    </main>
  );
}
