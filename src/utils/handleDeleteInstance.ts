import { useAppDispatch } from "../context/AppContext";

const useHandleDeleteInstance = () => {
    const dispatch = useAppDispatch();

    // Handle delete needs to be specified which State (Section) the deletion happens
    // by passing instanceType, and which instance to be deleted by passing its id only
    const handleDeleteInstance = (instanceId: number, instanceType: string, nestedType?: string) => {

        // Call Delete instance function using dispatch
        dispatch({ 
            type: 'DeleteInstance', 
            payload: { instanceId, instanceType }
        });
    }

    return handleDeleteInstance;
}


export default useHandleDeleteInstance;