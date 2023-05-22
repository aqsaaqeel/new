export const CardComp = (props) => {
  return (
    <div className={`max-w-xs md:w-full md:min-w-[11rem] rounded-lg ${props.bgColor} p-4`}>
      <div className="flex justify-end">{props.icon}</div>
      <div className="text-gray-400 mb-2">{props.title}</div>
      <div className="text-2xl font-bold">{props.cost}</div>
    </div>
  );
};
