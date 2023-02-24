import { createContext, useContext } from "react";
import { ExpenseContextModel } from "../types/types";

export const ExpenseContext = createContext<ExpenseContextModel | null>(null);

export const useAddExpenseContext = () => useContext(ExpenseContext) as ExpenseContextModel;
