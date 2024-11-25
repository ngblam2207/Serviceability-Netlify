import { IncomeType, initialIncome } from "../Incomes/IncomeType"

export type ApplicantType = {
    instanceId: number,
    instanceType: string,
    applicantName: string,
    maritalStatus: string,
    dependents: number,
    livingSituation: string,
    rentalPayment: number,
    rentalPaymenFreq: string,
    incomes: IncomeType[],
}

export const initialApplicant: ApplicantType = { 
    instanceId: 1, 
    instanceType: 'applicants',
    applicantName: '',
    maritalStatus: 'Single',
    dependents: 0,
    livingSituation: 'Boarding/Stay with family',
    rentalPayment: 0,
    rentalPaymenFreq: 'Annually',
    incomes: [initialIncome],
}