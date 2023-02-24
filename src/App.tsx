import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Dashboard from "./pages/dashboard/Dashboard";
import Track from "./components/dashboard/Track";
import NotFound from "./pages/NotFound";
import { adminDashboardRoutes } from "./routes/privetRoutes";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

import { AddExpenseModel, DbExpenseDataModel } from "./types/types";
import { ExpenseContext } from "./hooks/useExpenseContext";

function App() {
  const [addExpense, setAddExpense] = useState<AddExpenseModel | null>(null);
  const [allExpenseData, setAllExpenseData] = useState<DbExpenseDataModel[] | null>(null);
  const [currentBalance, setCurrentBalance] = useState<number>(50000);

  const contextValues = {
    setAddExpense,
    setCurrentBalance,
    currentBalance,
    addExpense,
    setAllExpenseData,
    allExpenseData,
  };

  return (
    <div>
      <ExpenseContext.Provider value={contextValues}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Track />} />
            {adminDashboardRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ExpenseContext.Provider>
    </div>
  );
}

export default App;
