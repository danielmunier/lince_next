const ServiceItem = ({
  title,
  description,
  icon
}: {
  title: string;
  description: string;
  icon: any;
}) => {
  return (
    <div
      className="w-full flex justify-center mt-4"
      data-aos="zoom-in"
      data-aos-delay="300"
    >
      <div className="bg-white max-w-sm w-full p-10  shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
        <div className="bg-yellow-300 w-16 h-16 flex justify-center items-center mb-4 rounded">
          <div className="text-black text-3xl">
            {icon}
          </div>
        </div>
        <h4 className="text-2xl font-bold text-center mb-2">
          <a href="#" className="hover:text-yellow-500">
            {title}
          </a>
        </h4>
        <p className="text-gray-600 text-left">{description}</p>
      </div>
    </div>
  );
};

export default ServiceItem;