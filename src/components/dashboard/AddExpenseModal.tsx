import { useState } from "react";
import { useForm } from "react-hook-form";
import axiosPrivet from "../../hooks/axiosPrivet";
import { useAddExpenseContext } from "../../hooks/useExpenseContext";
import { categoriesData } from "../../library/data";
import { LoadingBtn } from "../shared/LoadingBtn";

type FromData = {
  category: string;
  price: number;
};

const AddExpenseModal = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setCurrentBalance, currentBalance } = useAddExpenseContext();
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<FromData>();

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    try {
      if (data.category !== "select category") {
        const selectInfo = categoriesData.find((category) => category.id === data.category);

        const { data: res } = await axiosPrivet.post("/expense", {
          ...data,
          name: selectInfo?.name,
          category: selectInfo?.category,
        });
        setCurrentBalance(currentBalance - res?.data?.price);
        reset();
        setIsLoading(false);
      } else {
        setError("category", {
          type: "required",
          message: "select a category",
        });
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  });

  return (
    <div>
      <input type="checkbox" onChange={() => {}} id="addExpense" className="modal-toggle" />
      <label htmlFor="addExpense" className="modal bg-[rgba(0,0,0,0.46)]   cursor-pointer">
        <label className="bg-none relative" htmlFor="">
          <div className="relative max-h-[500px] h-full lg:max-w-[564px] w-full sm:max-w-[400px] max-w-[350px] mx-auto">
            <div className=" max-h-[500px] h-full lg:max-w-[464px] lg:min-w-[464px] sm:max-w-[400px] max-w-[350px] rounded-[16px] w-full bg-white bg-cover bg-no-repeat">
              {/* ============== input form start ============ */}
              <div className="p-[60px]">
                <h3 className="text-[#000] capitalize text-center text-[28px] font-[600]">
                  add you expense
                </h3>
                <div className="mt-[43px]">
                  <form onSubmit={onSubmit}>
                    <div className="form-control">
                      <select {...register("category")} className="select select-primary w-full">
                        {categoriesData.map((category) => (
                          <option key={category?.id} value={category?.id}>
                            {category?.category}
                          </option>
                        ))}
                      </select>
                      {errors.category?.type === "required" && (
                        <span className="label-text-alt mt-2 pl-2 text-red-500 text-xs">
                          {errors.category?.message}
                        </span>
                      )}
                    </div>
                    <div className="form-control mt-[40px]">
                      <input
                        type="number"
                        {...register("price", {
                          required: { value: true, message: "expense is required" },
                          pattern: {
                            value: /^\d*[1-9]\d*$/,
                            message: "Provide a valid expense",
                          },
                        })}
                        placeholder="Enter your expense"
                        className="input input-bordered input-primary w-full "
                      />
                      {errors.price?.type === "pattern" && (
                        <span className="label-text-alt mt-2 pl-2 text-red-500 text-xs">
                          {errors.price?.message}
                        </span>
                      )}
                      {errors.price?.type === "required" && (
                        <span className="label-text-alt mt-2 pl-2 text-red-500 text-xs">
                          {errors.price?.message}
                        </span>
                      )}
                    </div>

                    <div className="mt-[40px]">
                      <button
                        type="submit"
                        className="bg-primary font-[500] rounded text-[20px] leading-[30px] text-[#fff] h-[60px] w-full"
                      >
                        {isLoading ? <LoadingBtn /> : "Add Expense"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* ============== input form end ============ */}
            </div>
          </div>
        </label>
      </label>
    </div>
  );
};

export default AddExpenseModal;
