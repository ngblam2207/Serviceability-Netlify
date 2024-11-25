import InstanceType from "../components/Instances/InstanceType";
import { useAppDispatch } from "../context/AppContext";

const useHandleChange = () => {
    const dispatch = useAppDispatch();

    // Handle change upon user input or select from drop down list
    // Also specify which State (Section) the update happens by passing instanceType
    // And identify which instance specifically within that section to be updated
    // NestedType and NestedId indicates an update to NESTED instance of a basic instance (e.g. income of an applicant)
    const handleChange = (
        event: any, 
        instanceType: string, 
        instance: InstanceType, 
        nestedType?: string, 
        nestedId?:number,
    ) => {
        // Each input will have name and value to ensure they match event.target
        const { name, value } = event.target;

        // If nestedType and nestedId are defined, update nested instance
        if (nestedType && nestedId !== undefined) {
            // Call Update nested instance function using dispatch
            dispatch({
                type: 'UpdateNestedInstance',
                payload: {
                    instanceId: instance.instanceId,
                    instanceType: instanceType,
                    // Nested instance is passed into function by finding the nested.InstanceId match given nestedId
                    nestedInstance: { 
                        ...(instance as any)[nestedType].find(
                            (nested: InstanceType) => nested.instanceId === nestedId
                        ), [name]: value
                    },
                    nestedType: nestedType
                }
            })
        } else if (nestedType !== undefined && nestedId === undefined) {
            // nestedType is defined without nestedId means the nested instance is a single object
            const updatedInstance = {
                ...instance,
                [nestedType]: {
                    // Nested instance is single object so no map/find function
                    // In this case it update simply for amount and frequency of income/expense which are number/string
                    ...(instance as any)[nestedType],
                    [name]: name === 'amount' ? Number(value) : value
                }
            }
            // Call Update instance function to update the nested instance inside the top-level instance
            dispatch({
                type: 'UpdateInstance',
                payload: {
                    ...updatedInstance,
                    instanceType
                }
            })
        } else {
            // Call Update instance function using dispatch for top-level instance
            dispatch({
                type: 'UpdateInstance',
                payload: { ...instance, [name]: value, instanceType},
            })
        }
    }

    return handleChange;
}


export default useHandleChange;