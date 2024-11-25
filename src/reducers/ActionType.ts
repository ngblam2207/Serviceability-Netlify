import InstanceType from "../components/Instances/InstanceType";

// Define action Type (Add/Delete/Update Instance, etc)
// payload of the action could be the instance/object itself
// Do NOT remove instanceType because it is used in all actions
//  to determine in which state the action is taking place
export type ActionType = 
  | {type: 'AddInstance'; payload: InstanceType}
  | {type: 'UpdateInstance'; payload: InstanceType}
  | {type: 'UpdateNestedInstance'; payload: {instanceId: number, instanceType: string, nestedInstance: InstanceType, nestedType: string}}
  | {type: 'ReindexInstance'; payload: {instanceId: number, instanceType: string, nestedType?: string}}
  | {type: 'DeleteInstance'; payload: {instanceId: number, instanceType: string} };