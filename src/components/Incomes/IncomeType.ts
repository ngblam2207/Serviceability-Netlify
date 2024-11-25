export type IncomeType = {
    instanceId: number,
    instanceType: string,
    baseIncome: number,
    baseIncomeFreq: string,
    overtimeIncome: number,
    overtimeIncomeFreq: string,
    bonusIncome: number,
    bonusIncomeFreq: string,
    commissionIncome: number,
    commissionIncomeFreq: string,
    otherIncome: number,
    otherIncomeFreq: string,
}

export const initialIncome = {
    instanceId: 1,
    instanceType: 'incomes',
    baseIncome: 0, 
    baseIncomeFreq: 'Annually',
    overtimeIncome: 0, 
    overtimeIncomeFreq: 'Annually',
    bonusIncome: 0, 
    bonusIncomeFreq: 'Annually',
    commissionIncome: 0,
    commissionIncomeFreq: 'Annually',
    otherIncome: 0, 
    otherIncomeFreq: 'Annually',
}