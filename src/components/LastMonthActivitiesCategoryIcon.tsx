import { categoriesData } from "../library/data";

type Props = {
  category: string;
  title: string;
};

const LastMonthActivitiesCategoryIcon = ({ category, title }: Props) => {
  const info = categoriesData && categoriesData.find((data) => category === data?.category);

  return (
    <div className="flex gap-[22px] items-center">
      <div className={`w-14 h-14 flex justify-center items-center rounded-full ${info?.color}`}>
        <img src={info?.icon} alt={`${info?.name}`} />
      </div>
      <h6 className="text-[23px] font-[500] text-[#452F02] leading-[32px]">{title}</h6>
    </div>
  );
};

export default LastMonthActivitiesCategoryIcon;
