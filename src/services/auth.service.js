let state = {
    token: null
  };

const isLogin = () =>{
    return state.token || localStorage.getItem('token');
}

export {
    isLogin
}