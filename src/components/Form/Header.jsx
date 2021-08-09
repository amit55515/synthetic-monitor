import React, { useState } from 'react';
import {
  Grid,
  TextField,
} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';

const Header = (props) => {
    const h1 = props.h1;
    const [header1, setHeader1] = useState('{}');
    const [dr1, setdr1] = useState(false);
    const [deploymentStack1, setdeploymentStack1] = useState(
    false,
    );
    const [xapiversion1, setxapiversion1] = useState(false);
    const [xcanaryversion1, setxcanaryversion1] = useState(false);
    const [anchorEl1, setAnchorEl1] = useState(null);

    const openHeader = (event) => {
    setAnchorEl1(event.currentTarget);
    };
    
    const handleClose = () => {
    setAnchorEl1(null);
    };
    const open1 = Boolean(anchorEl1);
    const id1 = open1 ? 'simple-popover1' : false;
    const [newkey, setnewkey] = useState();
    const [newvalue, setnewvalue] = useState();
    const handleHeaderKeyInput = (e) => {
    setnewkey(e.target.value);
    };
    const handleHeaderValueInput = (e) => {
    setnewvalue(e.target.value);
    };
    
    const handleheaderOne = (e) => {
        setHeader1(e.target.value);
        setdr1(false);
        setdeploymentStack1(false);
        setxapiversion1(false);
        setxcanaryversion1(false);
      };
      const editHeader1 = () => {
        h1[`${newkey}`] = `${newvalue}`;
        setHeader1(JSON.stringify(h1));
        setnewkey('');
        setnewvalue('');
    };
      
    const handleChange = (event) => {
        if (event.target.name === 'dr1') {
          setdr1(event.target.checked);
          if (event.target.checked) {
            h1.DR_TEST = 'GCP';
          } else {
            delete h1.DR_TEST;
          }
        }
        if (event.target.name === 'deploymentStack1') {
          setdeploymentStack1(event.target.checked);
          if (event.target.checked) {
            h1['deployment-stack'] = 'clusterb';
          } else {
            delete h1['deployment-stack'];
          }
        }
        if (event.target.name === 'xapiversion1') {
          setxapiversion1(event.target.checked);
          if (event.target.checked) {
            h1['x-api-version'] = 'v2';
          } else {
            delete h1['x-api-version'];
          }
        }
        if (event.target.name === 'xcanaryversion1') {
          setxcanaryversion1(event.target.checked);
          if (event.target.checked) {
            h1['x-canary-version'] = 'GRSHEAD';
          } else {
            delete h1['x-canary-version'];
          }
        }
        setHeader1(JSON.stringify(h1));
        props.rerenderParentCallback();
    };

    return (
        <div>
            <Grid
              style={{ margin: '.5em' }}
            >
              <TextField
                label="Header"
                value={header1}
                style={{minWidth: "500px", margin: '0.5em'}}
                onChange={handleheaderOne}
              />
              <Button
                aria-describedby={id1}
                variant="outlined"
                color="primary"
                style={{ margin: '0.5em' }}
                onClick={openHeader}
              >
                Select Headers
              </Button>
              <Popover
                id={id1}
                open={open1}
                anchorEl={anchorEl1}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <FormControl
                  style={{ padding: '10px' }}
                  component="fieldset"
                >
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox checked={dr1} onChange={handleChange} name="dr1" />}
                      label="DR_TEST : GCP"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={deploymentStack1} onChange={handleChange} name="deploymentStack1" />}
                      label="deployment-stack : clusterb"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={xapiversion1} onChange={handleChange} name="xapiversion1" />}
                      label="x-api-version : v2"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={xcanaryversion1} onChange={handleChange} name="xcanaryversion1" />}
                      label="x-canary-version : GRSHEAD"
                    />
                    <div>
                      <TextField
                        value={newkey}
                        placeholder="new key"
                        onChange={handleHeaderKeyInput}
                      />{' '}
                      :{' '}
                      <TextField
                        placeholder="new value"
                        value={newvalue}
                        onChange={handleHeaderValueInput}
                      />
                      <Button onClick={editHeader1}>Add</Button>
                    </div>
                  </FormGroup>
                </FormControl>
              </Popover>
            </Grid>
        </div>
    );
}

export default Header;