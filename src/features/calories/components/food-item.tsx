import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FoodItem = () => {
  return (
    <>
      <Accordion type='single' collapsible>
        <AccordionItem value='item-1'>
          <AccordionTrigger>
            <p>Chicken and Rice</p>
            <span>300</span>
          </AccordionTrigger>
          <AccordionContent>
            <ul className='px-1'>
              <li className='flex justify-between'>
                <h5>Chicken</h5>
                <span>100</span>
              </li>
              <li className='flex justify-between'>
                <h5>Rice</h5>
                <span>200</span>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default FoodItem;
