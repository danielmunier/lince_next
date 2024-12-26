import { FaPlane, FaHandshake, FaBusinessTime, FaStethoscope, FaHome } from 'react-icons/fa';
import ServiceItem from "./ui/service";

const servicesData = [
  {
    id: "LinceAeronautica",
    title: "Lince Aeronáutica",
    description:
      "A Lince Assessoria Aeronáutica oferece serviços de assessoria em vistorias, manutenção, planejamento, fretamento e arrendamento de aeronaves, segurança de vôo, engenharia e medicina de aviação, além de projeto e construção de helipontos.",
    icon: <FaPlane />
  },
  {
    id: "LinceChinaCapital",
    title: "Lince China Capital",
    description:
      "A Lince China Capital anteriormente denominada Lince Atlântico Solution é uma organização voltada para representação empresarial. Seu principal objetivo é formar parcerias com outras empresas, visando facilitar o êxito nas transações.",
    icon: <FaHandshake />
  },
  {
    id: "ConsultoriaEmpresarial",
    title: "Consultoria Empresarial",
    description:
      "A VV Consulting oferece serviços de consultoria empresarial, incluindo Plano de Negócios, Sistemática de Projetos, Análise de Riscos e Treinamentos, entre outros.",
    icon: <FaBusinessTime />
  },
  {
    id: "EquipamentosMedicos",
    title: "Equipamentos médicos",
    description:
      "Fornecemos equipamentos médicos, materiais hospitalares e medicamentos através da MedGroup Offshore Distribuidora em Macaé - RJ.",
    icon: <FaStethoscope />
  },
  {
    id: "Imobiliaria",
    title: "Imobiliária",
    description:
      "Oferecemos serviços imobiliários completos, incluindo compra, venda e aluguel de imóveis residenciais e comerciais.",
    icon: <FaHome />
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
    <section>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Nossos Serviços</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceItem
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
