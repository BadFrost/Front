import React from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';
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
        height: '80%',
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
    name: {
        position: 'absolute',
        width: '90%',
        height: '4%',
        top: '10%',
        left: '5%'
    },
    surname: {
        position: 'absolute',
        width: '90%',
        height: '4%',
        top: '20%',
        left: '5%'
    },
    dateOfBirthday: {
        position: 'absolute',
        width: '90%',
        height: '4%',
        top: '30%',
        left: '5%'
    },
    phone: {
        position: 'absolute',
        width: '90%',
        height: '4%',
        top: '40%',
        left: '5%'
    },
    email: {
        position: 'absolute',
        width: '90%',
        height: '4%',
        top: '50%',
        left: '5%'
    },
    save: {
        position: 'absolute',
        backgroundColor: '#4557d1',
        color: '#ffffff',
        width: '30%',
        height: '7%',
        top: '60%',
        left: '35%'
    },
}));

export let UpdateUser = () => {
    const classes = useStyles();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const [id, setID] = React.useState('');
    const [name, setName] = React.useState('');
    const [surname, setSurname] = React.useState('');
    const [dateOfBirthday, setDateOfBirthday] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');

    let updateUser = () => {
        axios.post('http://localhost:3000/updateUser', {
            id: id,
            name: name,
            surname: surname,
            dateOfBirthday: dateOfBirthday,
            phone: phone,
            email: email
        })
        .then(res => {
            if (!res.data.errors) {
                if (!res.data.error) {
                    history.push('/');
                } else {
                    let message = `${res.data.error.errorCode}: ${res.data.error.errorMessage}`
                    enqueueSnackbar(message, {
                        variant: 'error',
                        anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'right',
                        },
                    });
                };
            } else {
                for (let i = 0; i < res.data.errors.length; i++) {
                    console.log(res.data.errors[i])
                    let message = `${res.data.errors[i].msg.errorCode}: ${res.data.errors[i].msg.errorMessage}`
                    enqueueSnackbar(message, {
                        variant: 'error',
                        anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'right',
                        },
                    });
                }
            };
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
                <Button disabled={true} className={classes.updateUserBtn}>UPDATE</Button>
                <Button className={classes.deleteUserBtn} onClick={() => history.push('/deleteUser')}>DELETE</Button>
                <Typography gutterBottom variant="h6" className={classes.sign}>by VALENTYN KUZNETSOV</Typography>
            </Container>
            <Container className={classes.formTitle}>
                <Typography gutterBottom variant="h6" align='center'>UPDATE USER</Typography>
            </Container>
            <Container className={classes.formContainer}>
                <TextField className={classes.id} variant="outlined" label="ID" onChange={id => setID(id.target.value)} />
                <TextField className={classes.name} variant="outlined" label="Name" onChange={name => setName(name.target.value)} />
                <TextField className={classes.surname} variant="outlined" label="Surname" onChange={surname => setSurname(surname.target.value)} />
                <TextField className={classes.dateOfBirthday} variant="outlined" label="Date of birthday" onChange={dateOfBirthday => setDateOfBirthday(dateOfBirthday.target.value)} />
                <TextField className={classes.phone} variant="outlined" label="Phone" onChange={phone => setPhone(phone.target.value)} />
                <TextField className={classes.email} variant="outlined" label="Email" onChange={email => setEmail(email.target.value)} />
                <Button className={classes.save} onClick={() => updateUser()}>UPDATE</Button>
            </Container>
        </Container>
    );
};