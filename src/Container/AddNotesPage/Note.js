import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid, Button } from '@material-ui/core';
import { someContext } from '../../Context';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Note.scss';
import { v4 as uuid } from 'uuid';
import Header from '../../Components/Header/Header';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  inputs: {
    width: '50vw',
  },
  root2: {
    flexGrow: 1,
  },
  button: {
    alignItems: 'left',
    float: 'left',
    marginRight: '530px',
  },
}));

const BasicTextFields = ({ history }) => {
  const [Ltitle, setLTitle] = useState('');
  const [notes, setNotes] = useState('');
  const classes = useStyles();
  const [context, setContext] = useContext(someContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    return !Ltitle || !notes
      ? Swal.fire({
          icon: 'error',
          title: 'Sorry !!',
          text: 'Please Provide Title And Notes.',
        })
      : (Swal.fire({
          position: 'center',
          icon: 'Yayy!!',
          title: 'Your Notes have been saved.',
          showConfirmButton: false,
          timer: 1500,
        }),
        setContext([
          ...context,
          { title: Ltitle, id: uuid(), date: new Date(), note: notes },
        ]),
        localStorage.setItem(
          'data',
          JSON.stringify([
            ...context,
            { title: Ltitle, id: uuid(), date: new Date(), note: notes },
          ])
        ),
        history.push('/'));
  };
  return (
    <div className={classes.root2}>
      <Header />
      <form
        onSubmit={handleSubmit}
        className={classes.root}
        noValidate
        autoComplete='off'
      >
        <Grid
          container
          spacing={3}
          direction='column'
          justify='center'
          alignItems='center'
        >
          <Grid item lg={12}>
            <TextField
              id='outlined-basic'
              value={Ltitle}
              onChange={(e) => setLTitle(e.target.value)}
              label='Write your Title...'
              variant='outlined'
              className={classes.inputs}
            />
          </Grid>
          <Grid item lg={12}>
            <TextField
              id='outlined-multiline-static'
              label='Write your Notes...'
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              multiline
              rows={8}
              variant='outlined'
              className={classes.inputs}
            />
          </Grid>
          <Grid item lg={12}>
            <Button type='submit' variant='outlined' className={classes.button}>
              Save Your Notes
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
export default withRouter(BasicTextFields);
