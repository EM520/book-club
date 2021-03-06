import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import request from '../../utils/request'

export const signupformSlice = createSlice({
  name: 'signupform',
  initialState: {
    users: [
      // { id: 1, name: 'Douglas' },
      // { id: 2, name: 'John' },
    ],
    genres: [
      // {id:1,name:"Romans"},
      // {id:2,name:"LOVE"},
      // {id:3,name:"Historical Fiction"},
      // {id:4,name:"Detective and Mystery"}
    ],
    userGenres: [],
  },
  reducers: {
    //   increment: (state) => {
    //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //     // doesn't actually mutate the state because it uses the Immer library,
    //     // which detects changes to a "draft state" and produces a brand new
    //     // immutable state based off those changes
    //     state.value += 1;
    //   },
    //   decrement: (state) => {
    //     state.value -= 1;
    //   },
    //   incrementByAmount: (state, action) => {
    //     state.value += action.payload;
    //   },
    setUsers: (state, action) => {
      state.users = action.payload
    },
    setUserGenres: (state, action) => {
      state.genres = action.payload
    },
    setGenres: (state, action) => {
      state.genres = action.payload
    },
    // addUsers: (state, action) => {
    //   state.users = action.payload
    // },
  },
})

// console.log(users)

export const {
  // increment,
  // decrement,
  // incrementByAmount,
  setUsers,
  setGenres,
  setUserGenres,

  // setBookUsers,
} = signupformSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

//   export const incrementAsync = (amount) => (dispatch) => {
//     setTimeout(() => {
//       dispatch(incrementByAmount(amount));
//     }, 1000);
//   };

// function setUsers(value) {
//   return {
//     type: 'users/setUsers',
//     payload: value,
//   }
// }

export const getGenres = () => (dispatch) => {
  axios.get('/api/genres').then((r) => {
    dispatch(setGenres(r.data))
  })
}

export const getUserGenres = () => (dispatch) => {
  request.get('/genres/user').then((r) => {
    dispatch(setUserGenres(r.data))
  })
}

export const addUser = (
  username,
  password,
  email,
  bio,
  photo,
  firstname,
  lastname
  // selectedGenres
) => (dispatch) => {
  return axios
    .post('/api/registration', {
      username: username,
      password: password,
      email: email,
      bio: bio,
      photo: photo,
      firstname: firstname,
      lastname: lastname,
    })
    .then((r) => {
      console.log(r.data, '>>>>>>test registration>>>>>>')
      dispatch(setUsers(r.data))
      // dispatch(addUserGenres(selectedGenres))
    })
    .catch((error) => {
      console.log('Add User Exsit =======>>> ', error)
    })
}

export const addUserGenres = (selectedGenres) => (dispatch) => {
  request.post('/genres/user/', selectedGenres).then((r) => {
    dispatch(getUserGenres(selectedGenres))
  })
}

export const deleteUserGenres = (id) => (dispatch) => {
  axios.delete('/api/genres/user/' + id).then((resp) => {
    dispatch(getUserGenres())
  })
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

//   export const selectCount = (state) => state.users.value;

//   export const selectUser = (state) => state.userState.users;
//   export const selectBookUser=(state) =>state.bookuserState.bookusers;
export const selectUser = (state) => state.signupformState.users
export const selectGenre = (state) => state.signupformState.genres
export const selectUserGenre = (state) => state.signupformState.userGenres

export default signupformSlice.reducer
