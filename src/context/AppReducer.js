export default (state, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return {
          ...state,
          users: action.payload
      };
    case 'EDIT_USER':
      const updateUser = action.payload;
      const updateUsers = state.users.map(user => {
        if (user.id === updateUser.id) {
          return updateUser;
        }
        return user;
      })
      return {
        ...state,
        users: updateUsers
      }

    default:
      return state;
  }
}