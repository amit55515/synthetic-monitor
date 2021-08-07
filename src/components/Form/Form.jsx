/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react';
import {
  TextField, Button
} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Header from './Header';

function Form (props) {
      const [URL, setURL] = useState('');
      const [name, setName] = useState('');
      const [rqstType, setRqstType] = useState('GET');
      const [param1, setParam1] = useState('{"rollUpVariants":"true"}');
      const [h1, seth1] = useState({});
      const handleDomainName = (e) => {
        setName(e.target.value);
      }
      const handleDomain1 = (e) => {
        setURL(e.target.value);
        seth1({});
      }; 
      const handleRequestType = (e) => {
        setRqstType(e.target.value);
      }
      const rerenderParentCallback = () => {
        console.log('callBack', h1);
      }
      const handleParam1 = (e) => {
        setParam1(e.target.value);
      };

    const handleClick = () => {
      const formObject = {};
      formObject.id = props.renderList[props.renderList.length-1].id + 1;
      formObject.type = rqstType;
      formObject.name = name;
      formObject.endPoint = URL;
      formObject.params = param1;
      formObject.headers = h1;
      console.log(formObject);
      const List = props.renderList;
      List.push(formObject);
      props.setList(List);
      props.parentCallback();
      props.handleClose();
    }


    if (!props.swagger) {
      return (
        <div>
          <div
            style={{ margin: '0.5em' }}
          >
            {/* <label style={{ margin: '0.5em' }}> endPoint id - {props.renderList[props.renderList.length-1].id + 1}</label> */}
            <div
              style={{ margin: '.5em' }}
            >
              <FormControl style={{margin: '0.5em'}}>
                <InputLabel id="demo-simple-select-label">
                  Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={rqstType}
                  onChange={handleRequestType}
                >
                  <MenuItem value={'GET'}>
                    GET
                  </MenuItem>
                  <MenuItem value={'PUT'}>
                    PUT
                  </MenuItem>
                  <MenuItem value={'POST'}>
                    POST
                  </MenuItem>
                </Select>
              </FormControl>

              <FormControl
                style={{minWidth: "500px" , margin: '0.5em'}}
              >
                <TextField
                    placeholder="Name"
                    id="demo-simple-select"
                    value={name}
                    onChange={handleDomainName}
                />
              </FormControl>

              <FormControl
                style={{minWidth: "500px" , margin: '0.5em'}}
              >
                <TextField
                    placeholder="end point"
                    id="demo-simple-select"
                    value={URL}
                    onChange={handleDomain1}
                />
              </FormControl>
            </div>
            <div
              style={{ margin: '.5em' }}
            >
              <TextField
                label="Param 1"
                handleChange={handleParam1}
                value={param1}
                style={{minWidth: "500px", margin: '0.5em'}}
              />
            </div>
            <Header style={{minWidth: "500px"}} h1={h1} rerenderParentCallback={rerenderParentCallback} />
            <Button style={{ margin: '1em' }} variant="outlined" onClick={handleClick}>
              Add
            </Button>
          </div>
        </div>
    );
    } else {
      return (
        <div>
            <div
              style={{ margin: '.5em' }}
            >
              <FormControl>
                <TextField
                    placeholder="end point"
                    id="demo-simple-select"
                    value={URL}
                    onChange={handleDomain1}
                />
              </FormControl>
              <Button variant="outlined" onClick={handleClick}>
              Add
            </Button>
            </div>
        </div>
      );
    }
}

export default Form;