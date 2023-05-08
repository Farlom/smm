import React from 'react';
import {useParams} from "react-router-dom";

const User = (props) => {
    console.log(props, " props")
    const pararms = useParams()
    console.log(pararms)
    return (
        <div>
            user
        </div>
    );
};

export default User;
