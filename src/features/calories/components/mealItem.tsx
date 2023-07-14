import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { GetCurrentMeals } from '../actions/getCurrentMeals';

interface MealItemProps {
  data: {
    calories1: number;
    calories2: number | null;
    calories3: number | null;
    calories4: number | null;
    calories5: number | null;
    item1: string;
    item2: string | null;
    item3: string | null;
    item4: string | null;
    item5: string | null;
    totalCals: number;
    name: string;
  };
}

const MealItem = ({ data }: MealItemProps) => {
  if (!data) return;
  const {
    name,
    totalCals,
    item1,
    item2,
    item3,
    item4,
    item5,
    calories1,
    calories2,
    calories3,
    calories4,
    calories5,
  } = data;
  return (
    <>
      <Accordion type='single' collapsible>
        <AccordionItem value='item-1'>
          <AccordionTrigger>
            <p>{data.name}</p>
            <span>{data.totalCals}</span>
          </AccordionTrigger>
          <AccordionContent>
            <ul className='px-1'>
              <li className='flex justify-between'>
                <h5>{item1}</h5>
                <span>{calories1}</span>
              </li>
              {item2 && (
                <li className='flex justify-between'>
                  <h5>{item2}</h5>
                  <span>{calories2}</span>
                </li>
              )}
              {item3 && (
                <li className='flex justify-between'>
                  <h5>{item3}</h5>
                  <span>{calories3}</span>
                </li>
              )}
              {item4 && (
                <li className='flex justify-between'>
                  <h5>{item4}</h5>
                  <span>{calories4}</span>
                </li>
              )}
              {item5 && (
                <li className='flex justify-between'>
                  <h5>{item5}</h5>
                  <span>{calories5}</span>
                </li>
              )}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default MealItem;
