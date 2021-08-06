import React, {useState} from 'react';
import AppBar from '../AppBar/AppBar';
import InteractiveList from '../ListComponent/List';

const MainPage = () => {
    const mockData = [
        {
            id: 1,
            endPoint: 'api1',
            status: 'ok'
        },
        {
            id:2,
            endPoint: 'api2',
            status: 'recovering'
        },
        {
            id:3,
            endPoint: 'api3',
            status: 'error'
        }
    ]
    const [renderList, setList] = useState(mockData);
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