import { useAppDispatch } from "../context/AppContext";
import InstanceType from "../components/Instances/InstanceType";


const useHandleDeleteNested = () => {
  const dispatch = useAppDispatch();

  // Handle delete nested instance
  const handleDeleteNested = (instance: InstanceType, nestedId: number, nestedType: string) => {
    // Similar to DeleteInstance reducer, filter the nested instance array with given nestedId to be removed
    const updatedInstance = {
      ...instance,
      // E.g. loans: property.loans.filter(loan => loan.instanceId !== nestedId)
      [nestedType]: (instance as any)[nestedType].filter((nested: InstanceType) => nested.instanceId !== nestedId),
    }

    // Next, reindex the nested instance array to preserve the integrity of instances.
    // E.g. loans: property.loans.map((loan, index)=>{...loan, instanceId: property.id * 10 + index + 1}
    const reindexedInstances = {
      ...updatedInstance,
      [nestedType]: (updatedInstance as any)[nestedType].map((nested: InstanceType, index: number) => ({
        ...nested,
        instanceId: updatedInstance.instanceId * 10 + index + 1,
      }))
    }

    // Call update instance function using dispatch (i.e update Properties, not Loans)
    dispatch({
      type: 'UpdateInstance',
      payload: { 
        ...reindexedInstances
      }
    })
  }

  return handleDeleteNested;
}


export default useHandleDeleteNested;