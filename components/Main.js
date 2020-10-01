import React from "react";
import axios from 'axios';
import { Container, withStyles, makeStyles, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import history from "../src/history";

const StyledTableCell = withStyles(() => ({
    head: {
        backgroundColor: '#ffffff',
        color: '#4557d1',
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(() => ({
    root: {
        backgroundColor: '#ffffff'
    },
}))(TableRow);

const useStyles = makeStyles({
    header: {
        position: 'absolute',
        background: '#ffffff',
        width: '100%',
        height: '6%',
        top: '0px',
        left: '0px'
    },
    usersBtn: {
        position: 'absolute',
        backgroundColor: '#ffffff',
        color: '#4557d1',
        width: '6%',
        height: '100%',
        left: '0%',
        borderRadius: '0px',
    },
    addUserBtn: {
        position: 'absolute',
        backgroundColor: '#ffffff',
        color: '#4557d1',
        width: '6%',
        height: '100%',
        left: '6%',
        borderRadius: '0px'
    },
    updateUserBtn: {
        position: 'absolute',
        backgroundColor: '#ffffff',
        color: '#4557d1',
        width: '6%',
        height: '100%',
        left: '12%',
        borderRadius: '0px'
    },
    deleteUserBtn: {
        position: 'absolute',
        backgroundColor: '#ffffff',
        color: '#4557d1',
        width: '6%',
        height: '100%',
        left: '18%',
        borderRadius: '0px'
    },
    sign: {
        position: 'absolute',
        width: '14%',
        height: '5%',
        top: '25%',
        right: '1%'
    },
    table: {
        position: 'absolute',
        top: '14%',
        left: '2%',
        maxWidth: '50%'
    },
});

export let Main = () => {
    const classes = useStyles();
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            const res = await axios('http://localhost:3000/getUsers')
            setUsers(res.data.data);
        };

        fetchData();
    }, []);

    return (
        <Container>
            <Container maxWidth={false} className={classes.header}>
                <Button disabled={true} className={classes.usersBtn}>USERS</Button>
                <Button className={classes.addUserBtn} onClick={() => history.push('/addUser')}>ADD USER</Button>
                <Button className={classes.updateUserBtn} onClick={() => history.push('/updateUser')}>UPDATE</Button>
                <Button className={classes.deleteUserBtn} onClick={() => history.push('/deleteUser')}>DELETE</Button>
                <Typography gutterBottom variant="h6" className={classes.sign}>by VALENTYN KUZNETSOV</Typography>
            </Container>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">ID</StyledTableCell>
                            <StyledTableCell align="center">Name</StyledTableCell>
                            <StyledTableCell align="center">Surname</StyledTableCell>
                            <StyledTableCell align="center">Date of Birthday</StyledTableCell>
                            <StyledTableCell align="center">Phone</StyledTableCell>
                            <StyledTableCell align="center">Email</StyledTableCell>
                            <StyledTableCell align="center">Last Seen</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {users.map((row) => (
                        <StyledTableRow key={row._id}>
                            <TableCell align="center" component="th" scope="row">{row._id}</TableCell>
                            <TableCell align="center">{row.name}</TableCell>
                            <TableCell align="center">{row.surname}</TableCell>
                            <TableCell align="center">{row.dateOfBirthday}</TableCell>
                            <TableCell align="center">{row.phone}</TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                            <TableCell align="center">{row.lastSeen}</TableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};