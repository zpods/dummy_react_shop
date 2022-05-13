import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { SITE_URL } from '../../../constants/constants';


/* 
*set token to get to backend
*/
export let token  = null;
export const setToken = (value) => {
    token = value;
}

/**
 * Register user iat the backend
 * 
 * @param {FormData} bodyFormData 
 */
export const registerUser = createAsyncThunk(
    'loginRegisterLogout/registerUser',
        async (bodyFormData, ThunkAPI) => {
            const response = await axios({
                method: "POST",
                url: SITE_URL + '/api/register',
                data: bodyFormData,
                headers: { 
                    "Content-Type": "multipart/form-data",
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": "*" ,
                }
            });
            return response.data;
        }
    )  

/**
 * Login user at the backend
 *  
 * @param {FormData} bodyFormData 
 */
export const loginUser = createAsyncThunk(
  'loginRegisterLogout/loginUser',
    async (bodyFormData, ThunkApi) => {
        const response = await axios({
            method: "post",
            url: SITE_URL + '/api/login',
            data: bodyFormData,
            headers: { 
                "Content-Type": "multipart/form-data",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*" ,
            }
        });;
        return response.data;
    }
  )

/**
 * Logout user in the backend  
 */
export const logoutUser = createAsyncThunk(
    'loginRegisterLogout/logoutUser',
      async ( _, ThunkApi) => {
          const response = await axios({
              method: "post",
              url: SITE_URL + '/api/logout',
              headers: { 
                  "Content-Type": "multipart/form-data",
                  "Accept": "application/json",
                  "Access-Control-Allow-Origin": "*" ,
                  'Authorization': `Bearer ${token}`
                }
          });
          return response.data;
      }
    )

  
export const loginRegisterLogoutSlice = createSlice({
    name: 'loginRegisterLogout',
    initialState: {
        isAuth: false,
        isLoading: true,
        userEmail: null,
        userId: null,
        token: null,
        email: null,
    },
    reducers: {        
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isAuth = true;
            state.isLoading = false
            state.token = action.payload.token;
            state.email = action.payload.user.email;
            setToken(state.token);
        }).addCase(loginUser.pending, (state) => {
            state.isLoading = true;
            state.isAuth = false
        }).addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isAuth = false;
            state.error = action;
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.isAuth = true;
            state.isLoading = false
            state.token = action.payload.token;
            state.email = action.payload.user.email;
            setToken(state.token);
        }).addCase(registerUser.pending, (state) => {
            state.isLoading = true;
            state.isAuth = false
        }).addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isAuth = false;
            state.error = action;
        });
        builder.addCase(logoutUser.fulfilled, (state, action) => {
            state.isAuth = false;
            state.isLoading = false
            state.token = null;
            state.email = null;
            setToken(state.token);
        }).addCase(logoutUser.pending, (state) => {
            state.isLoading = true;
            state.isAuth = false
        }).addCase(logoutUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isAuth = true;
            state.error = action;
        });
    },
})



export default loginRegisterLogoutSlice.reducer