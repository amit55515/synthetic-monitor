import React from 'react';

const LogPage = (props) => {
    const {id,type, name, endPoint} = props.location.state;
    return (
        <div>
            LogPage
            <br/>
            <br/>
            api id - {id}
            <br/>
            <br/>
            api type - {type}
            <br/>
            <br/>
            api name - {name}
            <br/>
            <br/>
            api endpoint- {endPoint}
            <br/>
        </div>
    );
}

export default LogPage;