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
            e.preventDefault(); 
            if(this.followState=== "unfollowed"){
                this.followState= "followed"
                $.ajax({ 
                    url: `/users/${this.userId}/follow`, 
                    method:"POST", 
                    dataType: "json"
                }).then(()=> {
                    this.render()
                })
            }else{ 
                this.followState= "unfollowed"
                $.ajax({ 
                    url: `/users/${this.userId}/follow`, 
                    method: "DELETE", 
                    dataType: "json"
                }).then(()=> {
                    this.render()
                })
            }
        })
    }

    render(){ 
        if( this.followState=== "unfollowed"){
            this.$el.text("Follow!")
        }else { 
            this.$el.text("Unfollow!"); 
        }
    }
}

module.exports= FollowToggle; 