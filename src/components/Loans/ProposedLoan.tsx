import { InputAdornment, MenuItem, Table, TableBody, TableCell, TableRow, TextField } from "@mui/material"
import { useAppState } from "../../context/AppContext"
import useHandleChange from "../../utils/handleChange";

// Using turnary statement like value = { attribute ? attribute : attribute = 0 }
// Makes sure the attribute is always default to 0 so that they are not NULL and result in bad request
const ProposedLoan = () => {
    const state = useAppState();
    const handleChange = useHandleChange();

    return(
        <Table>
            {state.loans.map((loan, index) => (
                <TableBody key={index}>
                    <TableRow>
                        <TableCell>
                            <TextField
                                size="small"
                                type="number"
                                label="Loan Amount"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">$</InputAdornment>
                                    )
                                }}
                                name="loanAmount"
                                value={loan.loanAmount ? loan.loanAmount : loan.loanAmount = 0}
                                onChange={(event) => handleChange(event, 'loans', loan)}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                type="number"
                                label="Security Value"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">$</InputAdornment>
                                    )
                                }}
                                name="securityValue"
                                value={loan.securityValue ? loan.securityValue : loan.securityValue = 0}
                                onChange={(event) => handleChange(event, 'loans', loan)}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <TextField
                                size="small"
                                type="number"
                                label="Interest Rate"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start">%</InputAdornment>
                                    )
                                }}
                                name="interestRate"
                                value={loan.interestRate ? loan.interestRate : loan.interestRate = 0}
                                onChange={(event) => handleChange(event, 'loans', loan)}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                type="number"
                                label="Loan Term"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start">Months</InputAdornment>
                                    )
                                }}
                                name="loanTerm"
                                value={loan.loanTerm ? loan.loanTerm : loan.loanTerm = 0}
                                onChange={(event) => handleChange(event, 'loans', loan)}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <TextField
                                size="small"
                                select
                                label="Repayment Type"
                                name="repaymentType"
                                value={loan.repaymentType}
                                onChange={(event) => handleChange(event, 'loans', loan)}
                            >
                                <MenuItem value={'Principle & Interest'}>Principle & Interest</MenuItem>
                                <MenuItem value={'Interest Only'}>Interest Only</MenuItem>
                            </TextField>
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                type="number"
                                label="Interest Only Term"
                                disabled={loan.repaymentType !== 'Interest Only'}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start">Months</InputAdornment>
                                    )
                                }}
                                name="interestOnlyTerm"
                                value={loan.interestOnlyTerm ? loan.interestOnlyTerm : loan.interestOnlyTerm = 0}
                                onChange={(event) => handleChange(event, 'loans', loan)}
                            />
                        </TableCell>
                    </TableRow>
                </TableBody>
            ))}
                
        </Table>
    )
        
}

export default ProposedLoan