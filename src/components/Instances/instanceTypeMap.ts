import { State } from "../States/StateType";

// Mapping object to dynamically map instanceType to state key for handling ALL ACTION TYPES
const instanceTypeMap: { [key:string]: keyof State} = {
    loans: 'loans',
    applicants: 'applicants',
    incomes: 'incomes',
    properties: 'properties',
    commitments: 'commitments',
    expenses: 'expenses',
}

export default instanceTypeMap;