import { InputAdornment, MenuItem, Table, TableBody, TableCell, TableRow, TextField } from "@mui/material";
import { useAppState } from "../../context/AppContext";
import useHandleChange from "../../utils/handleChange";
import { frequency } from "../frequencyOptions";

// Using turnary statement like value = { attribute ? attribute : attribute = 0 }
// Makes sure the attribute is always default to 0 so that they are not NULL and result in bad request
const Expenses = () => {
    const state = useAppState();
    const handleChange = useHandleChange();

    return (
        <Table>
            {state.expenses.map((expense, index) => (
                <TableBody key={index}>
                    <TableRow>
                        <TableCell>
                            <TextField
                                size="small"
                                type="number"
                                label="General Living Expense"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">$</InputAdornment>
                                    )
                                }}
                                name="livingExpense"
                                value={expense.livingExpense ? expense.livingExpense : expense.livingExpense = 0}
                                onChange={(event) => handleChange(event, 'expenses', expense)}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                select
                                label="Frequency"
                                name="livingExpenseFreq"
                                value={expense.livingExpenseFreq}
                                onChange={(event) => handleChange(event, 'expenses', expense)}
                            >
                                {frequency.map((option, index) => (
                                    <MenuItem key={index} value={option.label}>{option.label}</MenuItem>
                                ))}
                            </TextField>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>
                            <TextField
                                size="small"
                                type="number"
                                label="Credit Card Limit"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">$</InputAdornment>
                                    )
                                }}
                                name="creditCard"
                                value={expense.creditCard ? expense.creditCard : expense.creditCard = 0}
                                onChange={(event) => handleChange(event, 'expenses', expense)}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <TextField
                                size="small"
                                type="number"
                                label="Residence & Owners Corporation"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">$</InputAdornment>
                                    )
                                }}
                                name="residenceOwnerCorporation"
                                value={expense.residenceOwnerCorporation ? expense.residenceOwnerCorporation : expense.residenceOwnerCorporation = 0}
                                onChange={(event) => handleChange(event, 'expenses', expense)}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                select
                                label="Frequency"
                                name="residenceOwnerCorporationFreq"
                                value={expense.residenceOwnerCorporationFreq}
                                onChange={(event) => handleChange(event, 'expenses', expense)}
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
                                type="number"
                                label="Private School & Tuition"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">$</InputAdornment>
                                    )
                                }}
                                name="privateSchool"
                                value={expense.privateSchool ? expense.privateSchool : expense.privateSchool = 0}
                                onChange={(event) => handleChange(event, 'expenses', expense)}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                select
                                label="Frequency"
                                name="privateSchoolFreq"
                                value={expense.privateSchoolFreq}
                                onChange={(event) => handleChange(event, 'expenses', expense)}
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
                                type="number"
                                label="Child Care"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">$</InputAdornment>
                                    )
                                }}
                                name="childCare"
                                value={expense.childCare ? expense.childCare : expense.childCare = 0}
                                onChange={(event) => handleChange(event, 'expenses', expense)}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                select
                                label="Frequency"
                                name="childCareFreq"
                                value={expense.childCareFreq}
                                onChange={(event) => handleChange(event, 'expenses', expense)}
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
                                type="number"
                                label="Health Insurance"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">$</InputAdornment>
                                    )
                                }}
                                name="healthInsurance"
                                value={expense.healthInsurance ? expense.healthInsurance : expense.healthInsurance = 0}
                                onChange={(event) => handleChange(event, 'expenses', expense)}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                select
                                label="Frequency"
                                name="healthInsuranceFreq"
                                value={expense.healthInsuranceFreq}
                                onChange={(event) => handleChange(event, 'expenses', expense)}
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
                                type="number"
                                label="Income Protection Insurance"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">$</InputAdornment>
                                    )
                                }}
                                name="incomeProtection"
                                value={expense.incomeProtection ? expense.incomeProtection : expense.incomeProtection = 0}
                                onChange={(event) => handleChange(event, 'expenses', expense)}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                select
                                label="Frequency"
                                name="incomeProtectionFreq"
                                value={expense.incomeProtectionFreq}
                                onChange={(event) => handleChange(event, 'expenses', expense)}
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
                                type="number"
                                label="Child Support"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">$</InputAdornment>
                                    )
                                }}
                                name="childSupport"
                                value={expense.childSupport ? expense.childSupport : expense.childSupport = 0}
                                onChange={(event) => handleChange(event, 'expenses', expense)}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                select
                                label="Frequency"
                                name="childSupportFreq"
                                value={expense.childSupportFreq}
                                onChange={(event) => handleChange(event, 'expenses', expense)}
                            >
                                {frequency.map((option, index) => (
                                    <MenuItem key={index} value={option.label}>{option.label}</MenuItem>
                                ))}
                            </TextField>
                        </TableCell>
                    </TableRow>
                    {/*
                    Currently this Nested object cannot be used, amount and frequency are flattened
                    <TableRow>
                        <TableCell>
                            <TextField
                                size="small"
                                type="number"
                                label="Child Support"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">$</InputAdornment>
                                    )
                                }}
                                name="amount"
                                value={expense.childSupport.amount ? expense.childSupport.amount : expense.childSupport.amount = 0}
                                onChange={(event) => handleChange(event, 'expenses', expense, 'childSupport')}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                select
                                label="Frequency"
                                name="frequency"
                                value={expense.childSupport.frequency}
                                onChange={(event) => handleChange(event, 'expenses', expense, 'childSupport')}
                            >
                                {frequency.map((option, index) => (
                                    <MenuItem key={index} value={option.label}>{option.label}</MenuItem>
                                ))}
                            </TextField>
                        </TableCell>
                    </TableRow>
                    */}
                </TableBody>
            ))}
        </Table>
    )
}

export default Expenses;