const FollowToggle= require("./follow_toggle.js"); 
const UsersSearch = require("./users_search")
$( () => { 
    $(".follow-toggle").each((i, el) => { 
        new FollowToggle(el)
    }); 

    $("nav.users-search").each((i, el) => {
        new UsersSearch(el);
    })
})