// components/JobDetails.tsx
"use client";

import { usePathname } from "next/navigation";
import React from "react";

const jobListings = [
  {
    id: 1,
    title: "Desenvolvedor Front-end",
    description: "Responsável pelo desenvolvimento de interfaces web.",
    location: "São Paulo, SP",
    details: "Mais informações sobre a vaga de Desenvolvedor Front-end.",
  },
  {
    id: 2,
    title: "Desenvolvedor Back-end",
    description: "Responsável pelo desenvolvimento de APIs e serviços.",
    location: "Rio de Janeiro, RJ",
    details: "Mais informações sobre a vaga de Desenvolvedor Back-end.",
  },
  {
    id: 3,
    title: "Analista de QA",
    description: "Responsável por garantir a qualidade do software.",
    location: "Belo Horizonte, MG",
    details: "Mais informações sobre a vaga de Analista de QA.",
  },
];

const JobDetails = ()  => {
  const pathname = usePathname();
  const id = pathname.split('/').pop();
  const job = jobListings.find((job) => job.id === parseInt(id as string));

  if (!job) {
    return <h1 className="text-3xl font-bold mb-6">Vaga não encontrada</h1>;
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">{job.title}</h1>
      <p className="text-gray-700 mb-4">{job.description}</p>
      <p className="text-gray-500 mb-4">{job.location}</p>
      <p className="text-gray-600">{job.details}</p>
    </>
  );
}

export default JobDetails
