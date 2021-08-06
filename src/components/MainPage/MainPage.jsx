import React, {useState} from 'react';
import AppBar from '../AppBar/AppBar';
import InteractiveList from '../ListComponent/List';

const MainPage = () => {
    const [renderList, setList] = useState([{id: 1,endPoint: 'api1'},{id:2 ,endPoint: 'api2'}]);
    const parentCallback = () => {
        console.log('parentrerender');
    }
    return (
        <div>
            <AppBar List={renderList} setList={setList} parentCallback={parentCallback} />
            <InteractiveList List={renderList} setList={setList} />
        </div>
    );
}

export default MainPage;