import logo from "../../assets/logo.png";
import user from "../../assets/user.png";
import { RxCaretDown } from "react-icons/rx";
import AddExpenseModal from "./AddExpenseModal";

const Header = () => {
  return (
    <>
      <div className="absolute top-[35px] w-full">
        <div className="flex justify-between pl-[14px] pr-[61px]">
          <div>
            <div className="fixed top-[35px]">
              <div className="flex gap-[30px] items-center">
                <img src={logo} className="w-[91.6px] h-[91.51px]" alt="logo" />
                <div>
                  <h2 className="text-[28px] leading-[32.81px] font-[500] text-[#452F02]">
                    Kösten
                  </h2>
                  <p className="text-[16px] pt-[6px] leading-[18.75px] text-[#452F02]">
                    Expense manager
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[41px]">
            <button className="">
              <label
                htmlFor="addExpense"
                className="cursor-pointer flex justify-center items-center w-[179px] bg-[#FFC248] rounded-[16px] text-[#FFFFFF] text-[16px] leading-[16px] h-[57px]"
              >
                + Add Expense
              </label>
            </button>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-[86px] h-[86px] rounded-full">
                  <img src={user} alt="user" />
                </div>
              </div>
              <span className="text-[#130F26] border rounded-lg border-[#130F26] w-[26.21px] text-xl flex justify-center items-center h-[26.21px]">
                <RxCaretDown />
              </span>
            </div>
          </div>
        </div>
      </div>
      <AddExpenseModal />
    </>
  );
};

export default Header;
