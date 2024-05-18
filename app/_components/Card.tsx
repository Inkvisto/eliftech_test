'use client'
import { Event } from '@prisma/client'
import { Button } from "@nextui-org/button";
import Link from 'next/link';

const Card = ({ id, title, description, event_date, organizer, color }: Event & { color: string }) => {
  return (
    <div className={`border rounded p-3 grid gap-8 `} style={{ backgroundColor: color }} key={id}>
      <div>
        <h3>{title}</h3>
        <span>{description}</span>
        <span>{new Date(event_date).toDateString()}</span>
        <div>{organizer}</div>
      </div>
      <div className='justify-between flex gap-8 mt-auto'>
        <Button className="shadow-lg bg-gray-300">
          <Link href={`/register/${id}`}>
            Register
          </Link>
        </Button>
        <Button className="shadow-lg bg-indigo-300">
          <Link href={`/participants/${id}`}>
            View
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Card;
