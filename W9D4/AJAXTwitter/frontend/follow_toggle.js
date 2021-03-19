const APIUtil = require('./api_util');
class FollowToggle { 
    constructor(el){ 
        this.$el= $(el); 
        this.userId= this.$el.data("id"); 
        this.followState= this.$el.data("state");
        this.render(); 
        this.handleClick();
    }

    handleClick(){ 
        this.$el.on("click", e => { 
            e.preventDefault(); 
            if(this.followState === "unfollowed"){
            this.followState = 'following'
            this.render();
            APIUtil.followUser(this.userId)
            .then(()=> {
                    this.followState = 'followed'
                    this.render()
                })
            }else if (this.followState === 'followed'){ 
                this.followState = 'unfollowing'
                this.render();
                APIUtil.unfollowUser(this.userId)
                .then(()=> {
                    this.followState = 'unfollowed'
                    this.render()
                })
            }
        })
    }

    render(){ 
    
        if( this.followState=== "unfollowed"){
            this.$el.text("Follow!")
            this.$el.prop("disabled", false)
        }else if (this.followState === 'followed'){ 
            this.$el.text("Unfollow!"); 
            this.$el.prop("disabled", false)
        } else if (this.followState === 'following') {
            this.$el.text("following...")
            this.$el.prop("disabled", true)
        } else if (this.followState === 'unfollowing') {
            this.$el.text("unfollowing...")
            this.$el.prop("disabled", true)
        }
    }
}

module.exports= FollowToggle; 