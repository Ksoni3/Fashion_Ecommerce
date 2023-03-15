import { createSlice } from "@reduxjs/toolkit";


const  initialState = {
    greeting:'',
   userInfo:{
    email:'',
    password:''

   },
   isLoggedIn:false
}


const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{

        setUserInfo:(state, action)=>{
           
            return {...state,
                userInfo: {...state.userInfo,
                    email:action.payload.email,
                    password:action.payload.password,
                }
            }
        },


        resetUserInfo: (state,action)=>{
            return {
                ...state,
                userInfo:{
                    ...state.userInfo,
                    email:'',
                    password:'',
                }
            }

        },

        updateLogIn:(state)=>{
            return {
                ...state, 
                isLoggedIn:true
            }
        },

        updateGreeting:(state)=>{
            const { userInfo } = state;
            const { email } = userInfo;
            const greeting = email;
            return {
                ...state,
                greeting
            };
        },


        switchLogin: (state)=>{
            const isLoggedIn = !isLoggedIn
            return {...state,
                isLoggedIn,
                greeting:''
              
                
            }



        },

       


        


    }}
)


export const {setUserInfo,resetUserInfo,updateGreeting,updateLogIn,switchLogin} = userSlice.actions;

export default userSlice.reducer;