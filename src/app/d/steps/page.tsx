import StepsGraph from '@/features/steps/components/stepsGraph';
import StepsForm from '@/features/steps/components/stepsForm';
import getSteps from '@/features/steps/actions/getSteps';

export default async function Page() {
  const steps = await getSteps();
  if (!steps) return;
  console.log(steps);
  return (
    <div className='p-4 w-11/12'>
      <h2 className='text-5xl font-bold'>Steps</h2>
      <div className='flex gap-10 mt-6'>
        <section className='w-4/6'>
          <div className=''>
            <StepsGraph steps={steps} />
          </div>
        </section>
        <section className='w-2/6 space-y-14'>
          <div className='flex flex-col gap-4'>
            <div className='flex gap-10'>
              <div className=''>
                <h4>Total Steps</h4>
                <span className='text-2xl font-bold'>102345</span>
              </div>
              <div className=''>
                <h4>Streak</h4>
                <span className='text-2xl font-bold'>12 days</span>
              </div>
            </div>
            <div className='flex gap-10'>
              <div className=''>
                <h4>Weekly Avg</h4>
                <span className='text-2xl font-bold'>12302</span>
              </div>
              <div className=''>
                <h4>Monthly Avg</h4>
                <span className='text-2xl font-bold'>8705</span>
              </div>
            </div>
          </div>
          <div className='w-3/4'>
            <h4 className='font-bold text-2xl mb-6'>Enter Your Steps</h4>
            <StepsForm />
          </div>
        </section>
      </div>
    </div>
  );
}
