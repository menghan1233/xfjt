<template>
<div class="ceshi">
  <van-form @submit="onSubmit" label-width="120px">
    <van-field
        v-model="a"
        name="井管直径:"
        label="井管直径(cm):"
        placeholder="井管直径"
        type="number"
    />
    <van-field
        v-model="b"
        name="井管中的水深:"
        type="number"
        label="井管中的水深(cm):"
        placeholder="井管中的水深:"
    />
    <van-field
      v-model="c"
      name="钻孔直径:"
      type="number"
      label="钻孔直径(cm):"
      placeholder="钻孔直径:"
  />
    <van-field
      v-model="d"
      name="孔隙:"
      type="number"
      label="孔隙(cm):"
      placeholder="孔隙:"
  />
    <van-field name="slider" label="结果(L)">
      <template #input>
        {{res}}
      </template>
    </van-field>
    <div style="margin: 16px;">
      <van-button  type="primary" size="large" native-type="submit">计算</van-button>
      <van-button   size="large"  style="margin-top: 10px" @click="reset">重置</van-button>
    </div>
  </van-form>

</div>

</template>

<script>
// import {Button} from 'vant'
import {reactive, toRefs} from "vue";

export default {

  name: "ceshi",
  setup(props,ctx){
    const state = reactive({
      date:'',
      show:false,
      checked:1,
      res: '',
      a: '',
      b: '',
      c:'',
      d: ''
    })
    const onSubmit = () => {
      let c, h, b1, o
      c = state.a
      h = state.b
      b1 = state.c
      o = state.d
      const left = (Math.PI / 4) * Math.pow(c, 2) * h
      const q = (Math.PI / 4) * Math.pow(b1, 2)
      const w = (Math.PI / 4) * Math.pow(c, 2)
      const right = (q - w) * h * o
      console.log(left + right)
      state.res = ((left + right)/1000).toFixed(2)
    }
    const reset = () => {
      state.a = ''
      state.b = ''
      state.c = ''
      state.d = ''
      state.res = ''
    }
    return{
      onSubmit,
      reset,
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
.ceshi{
  width: 100%;
  height: 100vh;
 background: #F7F8FA;
  padding: 20px;
  box-sizing: border-box;
}
</style>
