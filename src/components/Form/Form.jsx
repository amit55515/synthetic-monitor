/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react';
import {
  TextField, Button
} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Header from './Header';
import { useEffect } from 'react';

function Form (props) {
      const [URL, setURL] = useState('');
      const [param1, setParam1] = useState('{"rollUpVariants":"true"}');
      const [h1, seth1] = useState({});
      const handleDomain1 = (e) => {
        setURL(e.target.value);
        seth1({});
      }; 
      const rerenderParentCallback = () => {
        console.log('callBack', h1);
      }
      const handleParam1 = (e) => {
        setParam1(e.target.value);
      };

    const handleClick = () => {
      const formObject = {};
      formObject.endPoint = URL;
      formObject.params = param1;
      formObject.headers = h1;
      // console.log(formObject);
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
            </div>
            <div
              style={{ margin: '.5em' }}
            >
              <TextField
                label="Param 1"
                handleChange={handleParam1}
                value={param1}
              />
            </div>
            <Header h1={h1} rerenderParentCallback={rerenderParentCallback} />
            <Button variant="outlined" onClick={handleClick}>
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