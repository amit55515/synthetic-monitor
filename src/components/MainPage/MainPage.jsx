import React, {useState} from 'react';
import AppBar from '../AppBar/AppBar';
import InteractiveList from '../ListComponent/List';

const MainPage = () => {
    const mockEndPoints = [
        {
            id: 1,
            type: 'Get',
            name: 'Films',
            endPoint: 'https://ghibliapi.herokuapp.com/films',
            status: 'ok'
        },
        {
            id:2,
            type: 'Get',
            name: 'people',
            endPoint: 'https://ghibliapi.herokuapp.com/people',
            status: 'recovering'
        },
        {
            id:3,
            type: 'Get',
            name: 'locations',
            endPoint: 'https://ghibliapi.herokuapp.com/locations',
            status: 'error'
        }
    ]
    const [renderList, setList] = useState(mockEndPoints);
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