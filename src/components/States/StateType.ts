import { ApplicantType, initialApplicant } from "../Applicants/ApplicantType";
import { CommitmentType } from "../Commitments/CommitmentType";
import { ExpenseType, initialExpense } from "../Expenses/ExpenseType";
import { IncomeType, initialIncome } from "../Incomes/IncomeType";
import { initialLoan, LoanType } from "../Loans/LoanType";
import { PropertyType } from "../Properties/PropertyType";

// Define State type (these are the Sections of the form)
export type State = {
    applicants: ApplicantType[];
    incomes: IncomeType[];
    properties: PropertyType[];
    loans: LoanType[];
    commitments: CommitmentType[];
    expenses: ExpenseType[];
}

// Define initialState
export const initialState: State = {
    applicants: [initialApplicant],
    incomes: [initialIncome],
    properties: [],
    loans: [initialLoan],
    commitments: [],
    expenses: [initialExpense],
};
