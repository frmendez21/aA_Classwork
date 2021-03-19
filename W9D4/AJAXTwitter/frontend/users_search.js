const APIUtil = require('./api_util');
const FollowToggle = require('./follow_toggle');
class UsersSearch {
    constructor(el) {
        this.$el = $(el);
        this.$input = this.$el.find("input[name='search']")
        this.$ul = this.$el.find(".users")
        this.handleInput();
    }

    handleInput() {
        this.$input.on("input", e => {
            e.preventDefault();
            APIUtil.searchUsers(e.originalEvent.data)
            .then((res) => {
                this.renderResults(res)
            });
        });
    }

    renderResults(res) {
        this.$ul.empty();
        for(let i = 0; i < res.length; i++) {
            let name = res[i].username;
            let id = res[i].id;
            let follows = res[i].followed;

            const $bttn = $('<button></button>')
            new FollowToggle($bttn, {
                userId: id,
                followState: follows ? 'followed' : 'unfollowed'
                });

           
            const $li = $(`<li></li>`)
            
            $li.html(`<a href='/users/${id}'>${name}</a>`) 
            $li.append($bttn);        
            this.$ul.append($li);
            
        }
    }
}


module.exports = UsersSearch;