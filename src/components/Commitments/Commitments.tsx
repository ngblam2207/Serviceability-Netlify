import { Button, InputAdornment, MenuItem, Table, TableBody, TableCell, TableRow, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppState } from "../../context/AppContext";
import useHandleChange from "../../utils/handleChange";
import useHandleDeleteInstance from "../../utils/handleDeleteInstance";
import { options } from "./CommitmentOptions";
import { frequency } from "../frequencyOptions";

const Commitments = () => {
    const state = useAppState();

    const handleChange = useHandleChange();
    const handleDeleteInstance = useHandleDeleteInstance();

    return (
        <Table>
            {state.commitments.map((commitment, index) => (
                <TableBody key={index}>
                    <TableRow>
                        <TableCell>
                            <TextField
                                size="small"
                                select
                                variant="outlined"
                                label="Commitment Type"
                                name="commitmentType"
                                value={commitment.commitmentType}
                                onChange={(event) => handleChange(event, 'commitments', commitment)}
                            >
                                {options.map((option, index) => (
                                    <MenuItem key={index} value={option}>{option}</MenuItem>
                                ))}
                            </TextField>
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell rowSpan={2}>
                            <Button 
                                size="small"
                                variant="outlined"
                                startIcon={<DeleteIcon/>}
                                onClick={() => handleDeleteInstance(commitment.instanceId, 'commitments')}
                            >
                                Commitment
                            </Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <TextField
                                size="small"
                                type="number"
                                label="Repayment Amount"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">$</InputAdornment>
                                    )
                                }}
                                name="repaymentAmount"
                                value={commitment.repaymentAmount ? commitment.repaymentAmount : commitment.repaymentAmount = 0}
                                onChange={(event) => handleChange(event, 'commitments', commitment)}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                select
                                variant="outlined"
                                label="Frequency"
                                name="frequency"
                                value={commitment.frequency}
                                onChange={(event) => handleChange(event, 'commitments', commitment)}
                            >
                                {frequency.map((option, index) => (
                                    <MenuItem key={index} value={option.label}>{option.label}</MenuItem>
                                ))}
                            </TextField>
                        </TableCell>

                    </TableRow>
                </TableBody>
            ))}
        </Table>
    )
}

export default Commitments;