import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { handleAddInstanceButton } from "../../styles/sectionStyles";

const Properties = () => {


    const handleAddInstance = () => {
        // Create new instance

        // Add instance to array using spread operator

        // Set new array with added new instance to the end
    }

    return (
        <>
            
            <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={handleAddInstance}
                sx={handleAddInstanceButton}
            >
                Add Property
            </Button>
        </>
    )
}

export default Properties