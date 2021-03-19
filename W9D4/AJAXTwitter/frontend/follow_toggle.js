const APIUtil = require('./api_util');
class FollowToggle { 
    constructor(el, data){ 
        this.$el= $(el); 
        this.userId= this.$el.data("id"); 
        this.followState= this.$el.data("state");
        this.render(); 
        this.handleClick(); 
    }

    handleClick(){ 
        this.$el.on("click", e => { 
            debugger
            e.preventDefault(); 
            if(this.followState === "unfollowed"){
                this.$el.followState = 'following'
                this.render();
            APIUtil.followUser(this.userId)
            .then(()=> {
                    this.render()
                })
            }else if (this.followState === 'followed'){ 
                this.$el.followState = 'unfollowing'
                this.render();
                APIUtil.unfollowUser(this.userId)
                .then(()=> {
                    this.render()
                })
            }
        })
    }

    render(){ 
        if( this.followState=== "unfollowed"){
            this.$el.html("Follow!")
            this.$el.prop("disabled", false)
        }else if (this.followState === 'followed'){ 
            this.$el.html("Unfollow!"); 
            this.$el.prop("disabled", false)
        } else if (this.followState === 'following') {
            this.$el.html("following..."); 
            this.$el.prop("disabled", true)
        } else if (this.followState === 'unfollowing') {
            this.$el.html("unfollowing..."); 
            this.$el.prop("disabled", true)
        }
    }
}

module.exports= FollowToggle; 