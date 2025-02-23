import { FC } from 'react';

interface CardProps {
  title: string;
  description: string;
  link: string;
}

const Card: FC<CardProps> = ({ title, description, link }) => {
  return (
    <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out'>
      <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>{title}</h5>
      <p className='mb-3 font-normal text-gray-700'>{description}</p>
      <a
        href={link}
        className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300'
      >
        Read more
      </a>
    </div>
  );
};

const CardGrid: FC = () => {
  const updates = [
    {
      title: 'Update 1',
      description: 'This is a short description for update 1.',
      link: '#',
    },
    {
      title: 'Update 2',
      description: 'This is a short description for update 2.',
      link: '#',
    },
    {
      title: 'Update 3',
      description: 'This is a short description for update 3.',
      link: '#',
    },
    {
      title: 'Update 4',
      description: 'This is a short description for update 4.',
      link: '#',
    },
  ];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
      {updates.map((update, index) => (
        <Card key={index} title={update.title} description={update.description} link={update.link} />
      ))}
    </div>
  );
};

export default CardGrid;