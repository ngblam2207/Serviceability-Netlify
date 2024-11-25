import { useAppDispatch, useAppState } from "../context/AppContext";
import initialValuesMap from "../components/Instances/initialValuesMap";
import instanceTypeMap from "../components/Instances/instanceTypeMap";


const useHandleAddInstance = () => {
    
    const state = useAppState();
    const dispatch = useAppDispatch();

    // Handle add instance will take a string to specify which State(Section)
    // of the form that new instance will be added in
    const handleAddInstance = (instanceType: string) => {
        // Define initial value of the instance by mapping the instance type with the initial value
        const initialValue = initialValuesMap[instanceType];

        // Define new instance with the Id(using as index) by counting the next element of array
        const newInstance = {
            ...initialValue,
            instanceId: state[instanceTypeMap[instanceType]].length + 1,
        };

        // Call Add instance function using dispatch
        dispatch({
            type: "AddInstance",
            payload: newInstance,
        })
    }

    return handleAddInstance;
}


export default useHandleAddInstance;