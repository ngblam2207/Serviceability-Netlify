import { initialValuesMap } from "../components/Instances/initialValuesMap";
import InstanceType from "../components/Instances/InstanceType";
import { useAppDispatch, useAppState } from "../context/AppContext";

const useHandleAddNested = () => {
    const state = useAppState();
    const dispatch = useAppDispatch();

    const handleAddNested = (instance: InstanceType, nestedKey: string) => {
        // Define initial value of the instance by mapping the instance type with the initial value
        const initialValue = initialValuesMap[nestedKey];
    
        // Define new NESTED instance with instanceId based on the parent instance and length of array
        const newInstance = {
            ...initialValue,
            instanceId: instance.instanceId*10 + (instance as any)[nestedKey].length + 1,
        };
        
        // Call Update instance function using dispatch
        // (added NESTED instance = update parent instance)
        dispatch({
            type: "UpdateInstance",
            payload: {
                ...instance,
                // Use spread operator on NESTED instance array, then add new instance
                [nestedKey]: [...(instance as any)[nestedKey], newInstance]
            }
        })
    }

    return handleAddNested;
}


export default useHandleAddNested;