import { initialApplicant } from "../Applicants/ApplicantType";
import { initialCommitment } from "../Commitments/CommitmentType";
import { initialExpense } from "../Expenses/ExpenseType";
import { initialIncome } from "../Incomes/IncomeType";
import { initialLoan } from "../Loans/LoanType";
import { initialProperty } from "../Properties/PropertyType";
import InstanceType from "./InstanceType";

// Mapping object to dynamically map instanceType to initial value for handling ADD instance
export const initialValuesMap: { [key: string]: InstanceType } = {
    applicants: initialApplicant,
    incomes: initialIncome,
    properties: initialProperty,
    loans: initialLoan,
    commitments: initialCommitment,
    expenses: initialExpense,
};

export default initialValuesMap;