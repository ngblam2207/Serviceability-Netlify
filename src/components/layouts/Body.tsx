
import { Box, Button, Collapse, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useAppState } from "../../context/AppContext";
import useHandleSubmit from "../../utils/handleSubmit";
import { headerStyle } from "../../styles/sectionStyles";
import Applicant from "../Applicants/Applicant";
import BankType from "../BankType";
import Commitments from "../Commitments/Commitments";
import Expenses from "../Expenses/Expenses";
import ProposedLoan from "../Loans/ProposedLoan";
import Property from "../Properties/Property";
import SectionContainer from "../section/SectionContainer";

const Body = () => {
    const state = useAppState();
    const handleSubmit = useHandleSubmit();

    const [open, setOpen] = useState(false);    // Use for collapsing result table

    const [results, setResults] = useState<BankType[]>([]);
    return (
        <div id="mainBody">
            <form>
                <Paper elevation={3} className="Section">
                    <Box sx={headerStyle}>
                        <Typography variant="h5">{'Proposed Loan'}</Typography>
                    </Box>
                    <Box><ProposedLoan/></Box>
                </Paper>

                <SectionContainer
                    headerLabel='Applicants'
                    instanceType='applicants'
                    numberOfInstances={state['applicants'].length}
                    collapsed={false}
                    children={<Applicant/>}
                />
                
                <SectionContainer
                    headerLabel='Properties'
                    instanceType='properties'
                    numberOfInstances={state['properties'].length}
                    collapsed={true}
                    children={<Property/>}
                />

                <SectionContainer
                    headerLabel='Commitments'
                    instanceType='commitments'
                    numberOfInstances={state['commitments'].length}
                    collapsed={true}
                    children={<Commitments/>}
                />

                <Paper elevation={3} className="Section">
                    <Box sx={headerStyle}>
                        <Typography variant="h5">{'Expenses'}</Typography>
                    </Box>
                    <Box><Expenses/></Box>
                </Paper>


                <Button 
                    type="submit" 
                    variant="contained"
                    onClick={(event) => handleSubmit(event, setResults)}>
                    Calculate
                </Button>
                
            </form>
            <Paper elevation={3} id="resultTable">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="h5">Details</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h5">Index</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h5">Bank Name</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h5">Maximum Borrow</Typography>
                            </TableCell>
                        </TableRow>

                    </TableHead>
                    {
                        results.map((result, index) => (
                            <TableBody key={index}>
                                <TableRow>
                                    <TableCell>
                                        <Button
                                            size="small"
                                            aria-label="Expand details"
                                            onClick={() => setOpen(!open)}
                                        >
                                            {open ? <ExpandLess/> : <ExpandMore/>}
                                        </Button>
                                    </TableCell>
                                    <TableCell>{result.id}</TableCell>
                                    <TableCell>{result.name}</TableCell>
                                    <TableCell>{result.maximumBorrow}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
                                        <Collapse in={open}>
                                            <Box>
                                                <Typography variant="h6" align="center">Details</Typography>
                                                <Table size="small">
                                                    <TableBody>
                                                        <TableRow>
                                                            <TableCell><b>Total Income:</b> {result.totalIncome.toFixed(2)} ({(result.totalIncome / 12).toFixed(2)})</TableCell>
                                                            <TableCell><b>Floor Interest Rate:</b> {result.interestRate}</TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell><b>Living Expense:</b> {result.totalExpense.toFixed(2)} ({(result.totalExpense / 12).toFixed(2)})</TableCell>
                                                            <TableCell><b>Annual Commitment:</b> {result.totalCommitments.toFixed(2)}</TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell><b>NDI Ratio:</b> {result.NDI_Ratio.toFixed(2)}</TableCell>
                                                            <TableCell><b>Monthly Repayment:</b> {result.monthlyRepayment.toFixed(2)}</TableCell>
                                                        </TableRow>
                                                    </TableBody>
                                                </Table>
                                            </Box>
                                        </Collapse>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        ))
                    }
                </Table>
            </Paper>
        </div>
    )
}

export default Body