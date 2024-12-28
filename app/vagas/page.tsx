import React from 'react';
import Link from 'next/link';
import Container from '../components/ui/Container';

const jobListings = [
  
];

export default function Page() {
  return (

    <Container>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Vagas Disponíveis</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobListings.length > 0 ? jobListings.map((job) => (
            <Link key={job.id} href={`/vagas/${job.id}`} passHref>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <p className="text-gray-500">{job.location}</p>
              </div>
            </Link>
          )) : <p>Nenhuma vaga disponível</p>}
        </div>
      </div>
    </Container>
  );
}
