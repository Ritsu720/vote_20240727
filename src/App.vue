<script>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
export default{
  data(){
    return{

    }
  },
  components: {
    RouterView,
    Header,
  },
  methods: {
    goTo(x){
      this.$router.push(x)
    }
  }
}
</script>


<template>
<div class="page">
  <div class="header">
    <Header />
  </div>
  <div class="routerView">
    <RouterView />
    <div class="flow" @click="goTo('/')">qick back</div>
  </div>
</div>
</template>

<style lang="scss" scoped>
@import './assets/main.scss';
p{
  font-size: 18pt;
}
.routerView{
  width: 100vw;
  min-height: 90vh;
  background-color: #F8EDE3;
}
.flow{
  width: 50px;
  height: 50px;
  background-color: #fff;
  position: absolute;
  bottom: 50px;
  left: 50px;
}
</style>