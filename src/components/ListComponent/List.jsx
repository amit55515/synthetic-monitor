import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
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

export default function InteractiveList(props) {
  const classes = useStyles();
  const handleDelete = () => {
    console.log('delete')
  }
  console.log('list', props.List);
  const history = useHistory();
  console.log('interactive', props.List);
  
  const listItems = props.List.map((d) => 
                                        <ListItem onClick={() => { 
                                          history.push({
                                            pathname: `/logs`,
                                            state: d
                                          });
                                        }} >
                                          <ListItemAvatar>
                                            <Avatar>
                                              <FolderIcon />
                                            </Avatar>
                                          </ListItemAvatar>
                                            {d.endPoint}
                                          <ListItemSecondaryAction>
                                            <IconButton onClick={handleDelete} edge="end" aria-label="delete">
                                              <DeleteIcon />
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
