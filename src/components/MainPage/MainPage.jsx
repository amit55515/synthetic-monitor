import React, {useState} from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import AppBar from '../AppBar/AppBar';
import InteractiveList from '../ListComponent/List';

const MainPage = () => {
    const apiList = useSelector(state => state.apiList, shallowEqual);
    const [renderList, setList] = useState(apiList);
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