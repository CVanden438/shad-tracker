import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from './ui/button';

export default function Sidebar() {
  return (
    <aside className='border-r dark:border-slate-800 w-1/12 sticky h-screen'>
      <nav>
        <ul>
          <li>
            <Link
              href='/d/steps'
              className={cn(
                buttonVariants({
                  variant: 'link',
                  className: 'block text-center',
                })
              )}
            >
              Steps
            </Link>
          </li>
          <li>
            <Link
              href='/d/calories'
              className={cn(
                buttonVariants({
                  variant: 'link',
                  className: 'block text-center',
                })
              )}
            >
              Calories
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
