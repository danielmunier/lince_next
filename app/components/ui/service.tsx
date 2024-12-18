const ServiceItem = ({
    title,
    description
  }: {
    title: string;
    description: string;
  }) => {
    return (
      <div
        className="w-full flex justify-center mt-4"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <div className="bg-white max-w-sm w-full p-10 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="text-3xl text-blue-500 flex justify-center mb-4">
            <i className="bi bi-lungs"></i>
          </div>
          <h4 className="text-2xl font-bold text-center mb-2">
            <a href="#" className="hover:text-blue-500">
              {title}
            </a>
          </h4>
          <p className="text-gray-600 text-center">{description}</p>
        </div>
      </div>
    );
  };
  
  export default ServiceItem;
  