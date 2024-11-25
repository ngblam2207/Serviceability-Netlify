import axios from "axios";
import { useAppState } from "../context/AppContext";
import BankType from "../components/BankType";
import { useState, useEffect } from "react";
import apps from "../api/apps";

const useHandleSubmit = () => {
    const state = useAppState();
    
    // Using useEffect hook with axios async await to fetch data from server
    const [banks, setBanks] = useState<BankType[]>([]);
    // Fetch data at load time so the dependencies must be an empty array
    useEffect(() => {
    const fetch = async () => {
        try {
        // Define the response
        const response = await apps.get('/api/wcb/serviceability/banks');

        // This point indicate the response is already within 200 rage
        console.log(response);

        setBanks(response.data);
        console.log('Fetch successfully');

        } catch (err: any) {
        // axios automatically catch any response error outside 200 range
        
        if (err.response) {
            // Not within 200 response range
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        } else {
            // Some unknown error
            console.log(`Error: ${err.message}`);
        }
        }
    }

    fetch();
    }, [])


    // Handle form submission
    const handleSubmit = async (event: any, setResults: any) => {
        // preventDefault to prevent page reloading
        event.preventDefault();

        // Construct request data including all states (sections)
        const application = {
            applicants: state.applicants,
            incomes: state.incomes,
            properties: state.properties,
            loans: state.loans,
            commitments: state.commitments,
            expenses: state.expenses,
        };
        console.log(application);


        // Using axios post request, change URL as needed
        // then(response) will out put response data to display on screen
        try {
        const response =  await axios
        .post("http://localhost:5267/api/wcb/serviceability/ServiceabilityResult/", application)
        .then((response) => {
            // response.data is constructed from backend as an array of numbers (maximumBorrow)
            // Cast the response.data (any type) to an Object that has an array of numbers
            const data = Object.values<number[]>(response.data);

            // Do not mutate the state of banks directly, instead create updated array and update
            // the state of this array so React can detect change
            // Updating the banks directly using map can cau unexpected behavior since
            // the reference to the same object (banks) remain the same
            const updatedResults = banks.map((bank, index) => {
                return {
                    ...bank,
                    maximumBorrow: data[index][0],
                    monthlyRepayment: data[index][1],
                    totalCommitments: data[index][2],
                    totalIncome: data[index][3],
                    totalExpense: data[index][4],
                    NDI_Ratio: data[index][5]
                };
            });
            setResults(updatedResults);
        })
        .catch((error) => {
            if (error.response) {
            console.log(error.response);
            console.log("Server responded with error");
            } else if (error.request) {
            console.log("Network error");
            } else {
            console.log(error);
            }
        })
        } catch (error) {
            console.log(error);
        }
    }
    return handleSubmit;
}


export default useHandleSubmit;