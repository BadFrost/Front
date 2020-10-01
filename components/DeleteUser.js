import React from 'react';
import axios from 'axios';
import { Container, makeStyles, Button, TextField, Typography } from '@material-ui/core';
import history from '../src/history';

const useStyles = makeStyles(() => ({
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
    formContainer: {
        position: 'absolute',
        width: '40%',
        height: '75%',
        top: '17%',
        left: '30%'
    },
    formTitle: {
        position: 'absolute',
        width: '10%',
        height: '7%',
        top: '10%',
        left: '45%'
    },
    id: {
        position: 'absolute',
        width: '90%',
        height: '4%',
        top: '0%',
        left: '5%'
    },
    save: {
        position: 'absolute',
        backgroundColor: '#4557d1',
        color: '#ffffff',
        width: '30%',
        height: '7%',
        top: '10%',
        left: '35%'
    },
}));

export let DeleteUser = () => {
    const classes = useStyles();
    const [id, setId] = React.useState('');

    let deleteUser = () => {
        axios.post('http://localhost:3000/deleteUser', {
            id: id
        })
        .then(res => {
            history.push('/');
        })
        .catch(err => {
            console.log(err);
        });
    };

    return (
        <Container>
            <Container maxWidth={false} className={classes.header}>
                <Button className={classes.usersBtn} onClick={() => history.push('/')}>USERS</Button>
                <Button className={classes.addUserBtn} onClick={() => history.push('/addUser')}>ADD USER</Button>
                <Button className={classes.updateUserBtn} onClick={() => history.push('/updateUser')}>UPDATE</Button>
                <Button disabled={true} className={classes.deleteUserBtn}>DELETE</Button>
                <Typography gutterBottom variant="h6" className={classes.sign}>by VALENTYN KUZNETSOV</Typography>
            </Container>
            <Container className={classes.formTitle}>
                <Typography gutterBottom variant="h6" align='center'>DELETE USER</Typography>
            </Container>
            <Container className={classes.formContainer}>
                <TextField className={classes.id} variant="outlined" label="ID" onChange={id => setId(id.target.value)} />
                <Button className={classes.save} onClick={() => deleteUser()}>DELETE</Button>
            </Container>
        </Container>
    );
};