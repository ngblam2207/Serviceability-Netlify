import { createContext, ReactNode, useContext, useReducer } from "react";
import { initialState, State } from "../components/States/StateType";
import { ActionType } from "../reducers/ActionType";
import reducer from "../reducers/reducer";

// Define dispatch using ActionType which includes add/delete/update instances and nested instances
type Dispatch = React.Dispatch<ActionType>

// Define StateContext and Dispatch context to use across the app. This will remove props drilling
const StateContext = createContext<State | undefined>(undefined);
const DispatchContext = createContext<Dispatch | undefined>(undefined);

// Create useAppState custom hook to call when app State is required
export const useAppState = () => {
    const context = useContext(StateContext);
    if (!context) {
        throw new Error('useAppState must be used within a StateProvider');
    }

    return context;
}

// create useAppDispatch custom hook to define dispatch function when required
export const useAppDispatch = () => {
    const context = useContext(DispatchContext);
    if (!context) {
        throw new Error('useAppDispatch must be used within a StateProvider');
    }

    return context;
}

// AppProviderProps is typescript syntax to define AppProvider
type AppProviderProps = { children: ReactNode };

// Define AppProvider
export const AppProvider = ({ children }: AppProviderProps) => {
    // initialize state and dispatch function using reducer hook and initial app state
    const [state, dispatch] = useReducer(reducer, initialState);

    // App state and dispatch will wrap around the <App/> in index.tsx to provide
    // context to entire app so all element can know its state and dispatch actions
    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    )
}