import { Dispatch, SetStateAction } from 'react'

export interface CategoriesDataModel {
  id: string
  name: string
  icon: any
  category: string
  color: string
}

export type LastMonthActivitiesModel = {
  _id: string
  category: string
  status: string
  date: Date | string
  amount: number
  title: string
}

export type DbExpenseDataModel = {
  _id: string
  category: string
  createdAt: Date | string
  email: string
  price: number
  status: string
  name: string
}

export type AddExpenseModel = {
  category: string
  price: number
}

export type ExpenseContextModel = {
  addExpense: AddExpenseModel | null
  allExpenseData: DbExpenseDataModel[] | null
  currentBalance: number
  setCurrentBalance: Dispatch<SetStateAction<number>>
  setAddExpense: Dispatch<SetStateAction<AddExpenseModel | null>>
  setAllExpenseData: Dispatch<SetStateAction<DbExpenseDataModel[] | null>>
}
