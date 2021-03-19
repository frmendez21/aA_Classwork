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
            this.followState = 'followed'
            APIUtil.followUser(this.userId)
            .then(()=> {
                    this.render()
                })
            }else if (this.followState === 'followed'){ 
                this.followState = 'unfollowed'
                APIUtil.unfollowUser(this.userId)
                .then(()=> {
                    this.render()
                })
            }
        })
    }

    render(){ 
        if( this.followState=== "unfollowed"){
            this.$el.text("Follow!")
        }else if (this.followState === 'followed'){ 
            this.$el.text("Unfollow!"); 
        } 
    }
}

module.exports= FollowToggle; 