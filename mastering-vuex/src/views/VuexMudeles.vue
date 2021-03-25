<template>
  <div>
    {{ count }} 
    <button @click="ICREMENT" class="btn">+</button>
    <button @click="DECREMENT" class="btn">-</button>
    <button @click="incrementBy" class="btn"> incrementBy 3</button>
    <button @click="decrementBy" class="btn"> decrementBy 3</button>
    <p>getters checked here</p>
    {{ getterArray}}
    {{ this.$store.getters.doneTodosCount}}  Count Getters 
    {{ this.$store.getters.doneTodosCountGetters}}
    {{ doneTodoById }}
  </div>
</template>
<script>
import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment : state => state.count++,
//     decrement : state => state.count--
//   }
// })
// store.commit('increment');
// console.log(store.state.count);

import {mapMutations} from 'vuex';
//import { mapMutations } from 'vuex';

export default {
  computed: {
    count() {
      return this.$store.state.count
    },
    getterArray(){
      return this.$store.getters.doneTodos
    },
    doneTodoById(id) {
      return this.$store.getters.doneTodoById(2)
    }
  },
  // methods: mapMutations([
  //   'increment',
  // ]),
  methods:{
    ...mapMutations([
    'ICREMENT',
    'DECREMENT',
  ]),
    // increment() {
    //     this.$store.commit('increment') 
    // },
    // decrement() {
    //     this.$store.commit('decrement')
    // },
    // incrementBy() {
    //   this.$store.commit('incrementBy', 3)
    // },
    // decrementBy() {
    //   this.$store.commit('decrementBy', 3)
    // }
    
    incrementBy() {
      this.$store.dispatch('incrementAsync', { amount : 3 })
    },
    // decrementBy() {
    //   this.$store.commit('decrementBy', { amount : 3 })
    // }
    decrementBy() {
      this.$store.dispatch('actionIncrementDecrement')

      this.$store.dispatch({
          type : 'decrementByAsync', 
          amount : 3
      })
    }
  }
  // created() {
  //    this.$store.commit('increment')
  //   console.log(this.$store.state.count)    
  // }
}
</script>