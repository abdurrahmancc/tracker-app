import { categoriesData } from "../../library/data";

const Categories = () => {
  return (
    <div className="rounded-[24px] max-w-[534px] w-full h-[618px] bg-[#FFFFFF]">
      <div className="pl-[22px] pr-[26px] pt-12   text-[23px]">
        <h4 className="text-[#130F26] border-b border-[#D7D7D7] pb-[17px] pl-5 font-[500] leading-[26px] ">
          Categories
        </h4>
      </div>
      <div className="mt-[21px]">
        <ul className="grid grid-cols-3 px-[31px] gap-8 h-[474px] overflow-y-auto dashboard-scrollbar">
          {categoriesData.map((category) => {
            let categoryName =
              category?.name.length > 8 ? category?.name.slice(0, 8) : category?.name;
            categoryName = categoryName.includes(" ")
              ? `${categoryName.split(" ").slice(0, 2).join("-").slice(0, 4)}...`
              : categoryName;

            return (
              <li
                key={category?.id}
                className="bg-[#F4F4F4] cursor-pointer w-full h-full max-w-[136px] max-h-[136px] px-10 py-6 rounded-[24px]"
              >
                <div>
                  <div
                    className={`w-14 h-14 flex justify-center items-center rounded-full ${category?.color}`}
                  >
                    <img src={category?.icon} alt={`${category?.name}`} />
                  </div>
                  <h6 className="text-center capitalize pt-4 flex-nowrap">{categoryName}</h6>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
