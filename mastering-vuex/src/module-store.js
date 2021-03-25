import Vue from 'vue'
import Vuex from 'vuex'
import { mutation } from '../mutation-types'
Vue.use(Vuex)

const Information = {
//  nameSpaces: true,
  state: () => ({
    count: 0,
    users: 
    [  
      { 
        "userId": "1",
        "displayname": "Fred"
      },
      {
        "userId": "2",
        "displayname": "Ben"
      },
       {
        "userId": "3",
        "displayname": "Sarah"
      }
    ]
  }),
  getters:{
    incrementcount : state => {
      return state.count+=10
    }
  },
  mutation: {},
  action: {}
}

const Profile = {
  state: () => ({}),
  getters: {},
  mutation: {},
  action: {}
}

export const modulestore = new Vuex.Store({
  modules: {
    userInfo : Information,
    userPro : Profile
  },
  state: ({
    counts: 1
  }),
  getters:{
    incrementcounts : state => {
      return state.counts+=5 
    }
  }

});
//let user = modulestore.state.userInfo.users;
console.log(modulestore.getters.incrementcount);
const numbers = [1, 2, 3, 4, 5];
// user.forEach(function(userss) {
//   console.log(count);
// });