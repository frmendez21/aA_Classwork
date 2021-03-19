const APIUtil = {
  followUser: id => {
    return $.ajax({ 
        url: `/users/${id}/follow`, 
        method:"POST", 
        dataType: "json"
    })
  },

  unfollowUser: id => {
    return $.ajax({ 
        url: `/users/${id}/follow`, 
        method: "DELETE", 
        dataType: "json"
    })
  },

  searchUsers: queryVal => {
    return $.ajax({
        url: '/users/search',
        data: {query: queryVal }, 
        dataType: "json"
    })
  }
};

module.exports = APIUtil;
