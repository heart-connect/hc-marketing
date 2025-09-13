const Section = ({ title, des, colorClass, lineColor, sectionArray }) => {
  console.log("sectionArray+++++", sectionArray);
  return (
    <div className="my-6">
      <h4 className={`text-2xl font-semibold ${colorClass} flex items-center`}>
        <span className="mr-2">{title.split(".")[0]}.</span>
        <span>{title.split(".")[1]}</span>
      </h4>
      <p className="text-gray-700 my-4 px-4">{des}</p>
      {sectionArray.map(({ title, des }) => {
        return <ServiceInfo lineColor={lineColor} title={title} des={des} />;
      })}
    </div>
  );
};
const ServiceInfo = ({ lineColor, title, des }) => {
  return (
    <div className="relative my-4">
      <h6 className="font-bold ml-4 mt-4 mb-2">{title}</h6>
      <p className="ml-4 mb-2">{des}</p>
      <div className={`absolute left-0 top-2 h-full w-1 ${lineColor}`}></div>
    </div>
  );
};

export default Section;
