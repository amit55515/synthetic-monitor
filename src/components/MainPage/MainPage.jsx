import React, {useState} from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import AppBar from '../AppBar/AppBar';
import InteractiveList from '../ListComponent/List';

const MainPage = () => {
    const apiList = useSelector(state => state.apiList, shallowEqual);
    // const [renderList, setList] = useState(apiList);
    // const parentCallback = () => {
    //     console.log('parentrerender');
    // }
    console.log("main", apiList);
    return (
        <div>
            <AppBar List={apiList} />
            <InteractiveList List={apiList} />
        </div>
    );
}

export default MainPage;