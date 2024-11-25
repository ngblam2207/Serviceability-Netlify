export type LoanType = {
    instanceId: number,
    instanceType: string,
    loanAmount: number,
    balance: number,
    securityValue: number,
    interestRate: number,
    loanTerm: number,
    repaymentType: string,
    interestOnlyTerm: number
}

export const initialLoan = {
    instanceId: 1,
    instanceType: 'loans',
    loanAmount: 0,
    balance: 0,
    securityValue: 0,
    interestRate: 0,
    loanTerm: 360,
    repaymentType: 'Principle & Interest',
    interestOnlyTerm: 0
}