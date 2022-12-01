
import Image from 'next/image';
import { Button, Htag } from '../components';


export default function Home(): JSX.Element {
 
  return (
    <>
      <Htag tag='h1'>Text</Htag>
      <Button appearance='primary'> Кнопка</Button>
      <Button appearance='ghost'> Кнопка</Button>
    </>
  );
}
