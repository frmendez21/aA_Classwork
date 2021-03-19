/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/api_util.js":
/*!******************************!*\
  !*** ./frontend/api_util.js ***!
  \******************************/
/***/ ((module) => {

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


/***/ }),

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const APIUtil = __webpack_require__(/*! ./api_util */ "./frontend/api_util.js");
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

/***/ }),

/***/ "./frontend/users_search.js":
/*!**********************************!*\
  !*** ./frontend/users_search.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const APIUtil = __webpack_require__(/*! ./api_util */ "./frontend/api_util.js");
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
            console.log(res[i])
            let name = res[i].username;
            let id = res[i].id
            let $li = $(`<li></li>`)
            $li.html(`<a href='/users/${id}'>${name}</a>`)
            this.$ul.append($li);
        }
    }
}


module.exports = UsersSearch;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle= __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js"); 
const UsersSearch = __webpack_require__(/*! ./users_search */ "./frontend/users_search.js")
$( () => { 
    $(".follow-toggle").each((i, el) => { 
        new FollowToggle(el)
    }); 

    $("nav.users-search").each((i, el) => {
        new UsersSearch(el);
    })
})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map