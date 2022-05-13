import React from 'react';
import { useDispatch } from "react-redux";
import { logoutUser } from "../storeSlice/loginRegisterLogout/loginRegisterLogout";
import { useNavigate } from 'react-router';

export default function Logout() {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    React.useEffect(()=>{
        dispatch(logoutUser());
        navigate("/");
    }, [dispatch, navigate]);

    return (null);
}