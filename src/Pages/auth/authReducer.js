const authReducer = (state, action) => {
    switch (action.type) {
      case 'Login':
        localStorage.setItem('token', action.payload.accessToken);
        return {
          token: action.payload.accessToken,
        };
      case 'Logout':
        localStorage.removeItem('token');
        return {
          token: '', // قم بتعيين التوكن فارغًا عند تسجيل الخروج
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  