import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import CloudDoneSharpIcon from '@material-ui/icons/CloudDoneSharp';
import CloudOffSharpIcon from '@material-ui/icons/CloudOffSharp';
import WbCloudySharpIcon from '@material-ui/icons/WbCloudySharp';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from 'react-router';

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
  const listItems = renderedList.map((d) => 
                                        <ListItem button onClick={() => { 
                                          history.push({
                                            pathname: `/logs`,
                                            state: d
                                          });
                                        }}
                                        >
                                          <ListItemAvatar>
                                            <Avatar>
                                            {d.status === 'ok' && <CloudDoneSharpIcon color="primary" /> }
                                            {d.status === 'error' && <CloudOffSharpIcon color="secondary" /> }
                                            {d.status === 'recovering' && <WbCloudySharpIcon /> }
                                            </Avatar>
                                          </ListItemAvatar>
                                            {d.endPoint}
                                          <span style={{paddingLeft: '50px'}}><b>status: </b>{d.status}</span>
                                          <ListItemSecondaryAction>
                                            <IconButton onClick={handleDelete} edge="end" id={d.id} aria-label="delete">
                                              <DeleteIcon color="secondary" />
                                            </IconButton>
                                          </ListItemSecondaryAction>
                                        </ListItem>
                                        );
  return (
    <Grid container className="list-grade" style={{marginLeft: '20%'}}>
    <div className={classes.root}>
      <Grid>
        <Grid>
          <Typography variant="h6" className={classes.title}>
            Available EndPoints
          </Typography>
          <div className={classes.demo}>
            <List>
            {listItems}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
    </Grid>
  );
}

export default InteractiveList;
