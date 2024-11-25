import { ApplicantType } from "../Applicants/ApplicantType";
import { CommitmentType } from "../Commitments/CommitmentType";
import { ExpenseType } from "../Expenses/ExpenseType";
import { IncomeType } from "../Incomes/IncomeType";
import { LoanType } from "../Loans/LoanType";
import { PropertyType } from "../Properties/PropertyType";

// Define a Union Type for the Action Payload for each Section
type InstanceType = 
  | ApplicantType
  | IncomeType
  | PropertyType
  | LoanType
  | CommitmentType
  | ExpenseType;

export default InstanceType;