import ServiceItem from "./ui/service";

const servicesData = [
  {
    id: "LinceAeronautica",
    title: "Lince Aeronáutica",
    description:
      "A Lince Assessoria Aeronáutica oferece serviços de assessoria em vistorias, manutenção, planejamento, fretamento e arrendamento de aeronaves, segurança de vôo, engenharia e medicina de aviação, além de projeto e construção de helipontos."
  },
  {
    id: "LinceChinaCapital",
    title: "Lince China Capital",
    description:
      "A Lince China Capital anteriormente denominada Lince Atlântico Solution é uma organização voltada para representação empresarial. Seu principal objetivo é formar parcerias com outras empresas, visando facilitar o êxito nas transações."
  },
  {
    id: "ConsultoriaEmpresarial",
    title: "Consultoria Empresarial",
    description:
      "A VV Consulting oferece serviços de consultoria empresarial, incluindo Plano de Negócios, Sistemática de Projetos, Análise de Riscos e Treinamentos, entre outros."
  },
  {
    id: "EquipamentosMedicos",
    title: "Equipamentos médicos",
    description:
      "Fornecemos equipamentos médicos, materiais hospitalares e medicamentos através da MedGroup Offshore Distribuidora em Macaé - RJ."
  },
  {
    id: "Imobiliaria",
    title: "Imobiliária",
    description:
      "A Verthomme é uma empresa imobiliária experiente que busca valores realistas para clientes e parceiros no mercado do Rio de Janeiro e submercados da Região Sudeste."
  },
  {
    id: "Lince",
    title: "Lince",
    description:
      "A Lince Corporate é constituída por empresas capacitadas, nossa missão é otimizar o desempenho operacional e fornecer serviços de alta qualidade aos clientes."
  }
];

const Services = () => {
  return (
    <div className="services container mx-auto gap-2">
      <h1 className="text-3xl font-bold text-center mb-8">Services</h1>
      <div className="grid grid-cols-3">
        {servicesData.map((service) => (
          <ServiceItem
            key={service.id}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
