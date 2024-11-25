import InstanceType from "../components/Instances/InstanceType";
import instanceTypeMap from "../components/Instances/instanceTypeMap";
import { State } from "../components/States/StateType";
import { ActionType } from "./ActionType";


// Define reducer to handle different types of actions
const reducer = (state: State, action: ActionType): State => {

  // instanceKey indicates which State (or Section) of the form the action is taking place
  // Notes: (state[instanceKey] as InstanceType[]).<function> is required syntax by Typescript
  const instanceKey = instanceTypeMap[action.payload.instanceType];

  // Switch between different action types
  switch(action.type) {
    // To add an instance within the State
    case 'AddInstance':
        return {
          ...state,                                                 // Use spread operator on the instance array
          [instanceKey]: [...state[instanceKey], action.payload],   // Add the new instance to the end of array
        }
    
    // To update an instance within the State
    case 'UpdateInstance': {
      // Identify which instance is updated inside state with instanceKey
      const updatedInstances = (state[instanceKey] as InstanceType[]).map( 
        // If the instanceId matches given instanceId to update
        // Spread the instance and update the attributes
        // Otherwise just return the instance within the array
        instance => instance.instanceId === action.payload.instanceId ? {
          ...instance, 
          ...action.payload
        } : instance
      )
      return {
        ...state,                            // Use spread operator on the instance array
        [instanceKey]: updatedInstances,      // Assign updated instance to elements in the State
      }
    }

    // Attempt to update a nested instance (applicant's income or loans associated with properties)
    case 'UpdateNestedInstance': {
      // Do NOT remove instanceType, it is used as general indication of where action happens
      const { instanceId, instanceType, nestedInstance, nestedType } = action.payload;

      // Identify which instance is updated inside state with instanceKey
      const updatedInstances = (state[instanceKey] as InstanceType[]).map(
        instance => instance.instanceId === instanceId ? {
          ...instance,
          // Identify which Nested instance is updated inside the instance using nestedType as key
          // Notes: (instance as any)[nestedType] is typescript syntax, equivalent to property.loans or applicant.income
          [nestedType]: (instance as any)[nestedType].map(
            (nested: any) => nested.instanceId === nestedInstance.instanceId ? {
              // if nested instance with id found, update nestedInstance with spread operation
              ...nested,
              ...nestedInstance
            } : nested // Return any nested instance that are not being updated
          )
        } : instance  // Return any instance that are not being updated
      )

      return{
        ...state,
        [instanceKey]: updatedInstances
      }
    }

    /*
    After removing a random instance from the array, the index will stay the same
    For example: Original array has [1, 2, 3, 4] as 4 instances. After deleting 3th instance,
    the array is now [1, 2, 4]. If not reindexed, the next added instance will be [1, 2, 4, 4].
    The array needs to be reindexed to preserve all other attributes of remaining instances with index [1, 2, 3]
    */
    // To delete an instance within the State
    case 'DeleteInstance':{
      // Use filter function to filter all instances that are not the specified ID
      const updatedInstances = (state[instanceKey] as InstanceType[]).filter(
        instance => instance.instanceId !== action.payload.instanceId
      );

      // Reindexing the instance by going through the array and re-assign the index from 1
      const reindexedInstances = updatedInstances.map((instance, index) => ({
         ...instance,
         instanceId: index + 1,
      }));


      return {
        ...state,                             // Use spread operator on the instance array
        [instanceKey]: reindexedInstances,    // Assign re-indexed instance to elements in the State
      };
    }

    // There is no trouble with identitfying which instance nested need update. So don't do this for now
    // case 'ReindexInstance': {
    //   const reindexedInstances = (state[instanceKey]).map((instance, index) => {

    //     const updatedInstace =  {
    //       ...instance,
    //       instanceId: index + 1,
    //     }
    //     {if (action.payload.nestedType !== undefined) {
    //       (updatedInstace as any)[action.payload.nestedType] = (updatedInstace as any)[action.payload.nestedType].map((nested: InstanceType, index: number) => ({
    //         ...nested,
    //         instanceId: updatedInstace.instanceId * 10 + index + 1,
    //       }))
    //     }}
    //   })
 
    //   return {
    //     ...state,
    //     [instanceKey]: reindexedInstances,
    //   }
    // }

    default:
      return state;
  }
}

export default reducer;