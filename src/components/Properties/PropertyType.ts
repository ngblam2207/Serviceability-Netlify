import { LoanType } from "../Loans/LoanType"

export type PropertyType = {
    instanceId: number,
    instanceType: string,
    address: string,
    balance: number,
    monthlyIncome: number,
    monthlyExpense: number,
    loans: LoanType[],
}

export const initialProperty: PropertyType = {
    instanceId: 1,
    instanceType: "properties",
    address: "",
    balance: 0,
    monthlyIncome: 0,
    monthlyExpense: 0,
    loans: [],
}