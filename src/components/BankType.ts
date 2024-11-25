type BankType = {
    id: number,
    name: string,
    image: string,
    interestRate: number,
    creditCardRate: number,
    loading: number,
    hems?: [],
    maximumBorrow: number,
    monthlyRepayment: number,
    totalCommitments: number,
    totalIncome: number,
    totalExpense: number,
    NDI_Ratio: number,
}

export default BankType;