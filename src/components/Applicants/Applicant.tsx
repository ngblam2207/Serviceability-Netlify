import { Button, MenuItem, Table, TableBody, TableCell, TableRow, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppState } from '../../context/AppContext';
import useHandleChange from '../../utils/handleChange';
import useHandleDeleteInstance from '../../utils/handleDeleteInstance';
import { frequency } from '../frequencyOptions';
import Incomes from '../Incomes/Incomes';

// Using turnary statement like value = { attribute ? attribute : attribute = 0 }
// Makes sure the attribute is always default to 0 so that they are not NULL and result in bad request
const Applicant = () => {
    const state = useAppState();

    const handleChange = useHandleChange();
    const handleDeleteInstance = useHandleDeleteInstance();

    return (
        <Table>
            {state.applicants.map((applicant, index) => (
            <TableBody key={index}>
                <TableRow>
                    <TableCell>
                        <TextField 
                            size="small"
                            type="text" 
                            label="Applicant Name"
                            name="applicantName"
                            value={applicant.applicantName} 
                            onChange={(event) => handleChange(event, 'applicants', applicant)}
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                            size="small"
                            select
                            variant="outlined"
                            label="Living Situation"
                            name="livingSituation"
                            value={applicant.livingSituation}
                            onChange={(event) => handleChange(event, 'applicants', applicant)}
                        >
                            <MenuItem value='Owner Occupied'>Owner Occupied</MenuItem>
                            <MenuItem value='Renting'>Renting</MenuItem>
                            <MenuItem value='Boarding/Stay with family'>Boarding/Stay with family</MenuItem>
                        </TextField>

                    </TableCell>
                    <TableCell rowSpan={3} >
                        <Button 
                            size="small"
                            variant="outlined"
                            startIcon={<DeleteIcon/>}
                            disabled={state.applicants.length <= 1}
                            onClick={() => handleDeleteInstance(applicant.instanceId, 'applicants')}
                        >
                            Applicant
                        </Button>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <TextField
                            size="small"
                            type="number"
                            label="Rental Payment"
                            disabled={applicant.livingSituation !== "Renting"}
                            name="rentalPayment"
                            value={applicant.rentalPayment ? applicant.rentalPayment : applicant.rentalPayment = 0}
                            onChange={(event) => handleChange(event, 'applicants', applicant)}
                        />
                    </TableCell>
                    <TableCell>
                        <TextField 
                            size="small"
                            select
                            variant="outlined"
                            label="Frequency"
                            disabled={applicant.livingSituation !== "Renting"}
                            name="rentalPaymentFreq"
                            value={applicant.rentalPaymenFreq}
                            onChange={(event) => handleChange(event, 'applicants', applicant)}
                        >
                            {frequency.map((option, index) => (
                                <MenuItem key={index} value={option.label}>{option.label}</MenuItem>
                            ))}
                        </TextField>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <TextField 
                            size="small"
                            select
                            variant="outlined"
                            label="Marital Status"
                            name="maritalStatus"
                            value={applicant.maritalStatus}
                            onChange={(event) => handleChange(event, 'applicants', applicant)}
                        >
                            <MenuItem value='Single'>Single</MenuItem>
                            <MenuItem value='Couple'>Couple</MenuItem>
                            <MenuItem value='Sole-borrower'>Sole-borrower</MenuItem>
                        </TextField>
                    </TableCell>
                    <TableCell>
                        <TextField
                            size="small"
                            type="number"
                            label="Dependents"
                            name="dependents"
                            value={applicant.dependents ? applicant.dependents : applicant.dependents = 0}
                            onChange={(event) => handleChange(event, 'applicants', applicant)}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell colSpan={3}>
                        {/* There will always be one instance in incomes array */}
                        {applicant.incomes.map((income, index) => (
                            <Incomes key={index} applicant={applicant} />
                        ))}
                    </TableCell>
                </TableRow>
                

            </TableBody>
            ))}
        </Table>
    )
}

export default Applicant