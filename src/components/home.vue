<template>
  <div class="ss">
   {{w}} {{we}}
    提交
  </div>
  <van-button type="primary" @click="toOther">主要按钮</van-button>
</template>

<script>
import {getCurrentInstance, onMounted, reactive, ref, toRef, toRefs} from "vue";
import {  useRouter,useRoute} from 'vue-router'
export default {
  name: 'home',
  props: {
    msg: String
  },
 setup(){
    const that = getCurrentInstance()
    const obj = {key:'11'}
   const router = useRouter()
   const route = useRoute()
   // const route = useRoute()
   let tor = ref(0)
   let toR = toRef(obj,'toR')
    const state = reactive({
      w:'www',
      we:'we1'
    })
   onMounted(() => {
     console.log("onMounted", tor,
         toR);
   });
   const toOther = () => {
     console.log(router,route)
     router.push({path:'./ceshi'})
   }
   return {
     router,
     route,
      tor,
     toR,
     toOther,
      ...toRefs(state)
   }
 },

}
</script>

<style lang="scss"  scoped>
 .ss{
    font-size: 10px;
 }
</style>
