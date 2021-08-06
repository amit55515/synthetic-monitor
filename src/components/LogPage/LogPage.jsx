import React from 'react';

const LogPage = (props) => {
    const {id, endPoint} = props.location.state;
    return (
        <div>
            LogPage
            <br/>
            api id - {id}
            <br/>
            api endpoint- {endPoint}
        </div>
    );
}

export default LogPage;