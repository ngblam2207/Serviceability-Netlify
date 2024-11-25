export type CommitmentType = {
    instanceId: number,
    instanceType: string,
    commitmentType?: string,
    repaymentAmount?: number,
    frequency: string,
}

export const initialCommitment: CommitmentType = {
    instanceId: 1,
    instanceType: 'commitments',
    commitmentType: 'Other Commitments',
    repaymentAmount: 0,
    frequency: 'Annually',
}