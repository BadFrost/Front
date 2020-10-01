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
    name: {
        position: 'absolute',
        width: '90%',
        height: '4%',
        top: '0%',
        left: '5%'
    },
    surname: {
        position: 'absolute',
        width: '90%',
        height: '4%',
        top: '10%',
        left: '5%'
    },
    dateOfBirthday: {
        position: 'absolute',
        width: '90%',
        height: '4%',
        top: '20%',
        left: '5%'
    },
    phone: {
        position: 'absolute',
        width: '90%',
        height: '4%',
        top: '30%',
        left: '5%'
    },
    email: {
        position: 'absolute',
        width: '90%',
        height: '4%',
        top: '40%',
        left: '5%'
    },
    save: {
        position: 'absolute',
        backgroundColor: '#4557d1',
        color: '#ffffff',
        width: '30%',
        height: '7%',
        top: '50%',
        left: '35%'
    },
}));

export let AddUser = () => {
    const classes = useStyles();
    const [name, setName] = React.useState('');
    const [surname, setSurname] = React.useState('');
    const [dateOfBirthday, setDateOfBirthday] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');

    let saveUser = () => {
        axios.post('http://localhost:3000/addUser', {
            name: name,
            surname: surname,
            dateOfBirthday: dateOfBirthday,
            phone: phone,
            email: email
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
                <Button disabled={true} className={classes.addUserBtn}>ADD USER</Button>
                <Button className={classes.updateUserBtn} onClick={() => history.push('/updateUser')}>UPDATE</Button>
                <Button className={classes.deleteUserBtn} onClick={() => history.push('/deleteUser')}>DELETE</Button>
                <Typography gutterBottom variant="h6" className={classes.sign}>by VALENTYN KUZNETSOV</Typography>
            </Container>
            <Container className={classes.formTitle}>
                <Typography gutterBottom variant="h6" align='center'>ADD USER</Typography>
            </Container>
            <Container className={classes.formContainer}>
                <TextField className={classes.name} variant="outlined" label="Name" onChange={name => setName(name.target.value)} />
                <TextField className={classes.surname} variant="outlined" label="Surname" onChange={surname => setSurname(surname.target.value)} />
                <TextField className={classes.dateOfBirthday} variant="outlined" label="Date of birthday" onChange={dateOfBirthday => setDateOfBirthday(dateOfBirthday.target.value)} />
                <TextField className={classes.phone} variant="outlined" label="Phone" onChange={phone => setPhone(phone.target.value)} />
                <TextField className={classes.email} variant="outlined" label="Email" onChange={email => setEmail(email.target.value)} />
                <Button className={classes.save} onClick={() => saveUser()}>SAVE</Button>
            </Container>
        </Container>
    );
};