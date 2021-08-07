import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CloudDoneSharpIcon from '@material-ui/icons/CloudDoneSharp';
import CloudOffSharpIcon from '@material-ui/icons/CloudOffSharp';
import WbCloudySharpIcon from '@material-ui/icons/WbCloudySharp';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from 'react-router';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const InteractiveList = (props) => {
  const classes = useStyles();
  const [renderedList, setRenderedList] = useState(props.List);
  const handleDelete = (e) => {
      const newList = renderedList.filter((item) => item.id !== parseInt(e.currentTarget.id));
      setRenderedList(newList);
  }

  const history = useHistory();
  console.log('interactive', renderedList);
  const listItems = renderedList.map((row) => (
                                            <TableRow key={row.id} button>
                                              <TableCell 
                                                component="th" 
                                                scope="row" 
                                              >
                                                <IconButton 
                                                  onClick={() => { 
                                                    history.push({
                                                    pathname: `/logs`,
                                                    state: row
                                                    });
                                                  }}
                                                >
                                                {row.status === 'ok' && <CloudDoneSharpIcon color="primary" /> }
                                                {row.status === 'error' && <CloudOffSharpIcon color="secondary" /> }
                                                {row.status === 'recovering' && <WbCloudySharpIcon /> }
                                                </IconButton>
                                              </TableCell>
                                              <TableCell align="left">{row.type}</TableCell>
                                              <TableCell align="left">{row.name}</TableCell>
                                              <TableCell align="left">{row.status}</TableCell>
                                              <TableCell align="right">
                                                <IconButton onClick={handleDelete} edge="end" id={row.id} aria-label="delete">
                                                    <DeleteIcon color="secondary" />
                                                </IconButton>
                                              </TableCell>
                                            </TableRow>
                                          ))
  return (
    <Grid container className="list-grade" style={{marginLeft: '25%'}}>
    <div className={classes.root}>
      <Grid>
        <Grid>
          <Typography variant="h6" className={classes.title}>
            Registered Services
          </Typography>
          <div className={classes.demo}>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell><b>Icon (status)</b></TableCell>
                  <TableCell align="left"><b>Type</b></TableCell>
                  <TableCell align="left"><b>API name</b></TableCell>
                  <TableCell align="left"><b>Status</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  {listItems}
              </TableBody>
            </Table>
          </TableContainer>
          </div>
        </Grid>
      </Grid>
    </div>
    </Grid>
  );
}

export default InteractiveList;
