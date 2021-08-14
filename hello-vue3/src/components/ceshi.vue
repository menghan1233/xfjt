<template>
<div class="ceshi">
</div>
  <van-form @submit="onSubmit">
    <van-field
        v-model="a"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
        v-model="b"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
    /> <van-field
      v-model="c"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
  /> <van-field
      v-model="d"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
  />
    <div style="margin: 16px;">
      <van-button type="primary">提交</van-button>
    </div>
  </van-form>
  <van-radio-group v-model="checked">
    <van-radio name="1">单选框 1</van-radio>
    <van-radio name="2">单选框 2</van-radio>
  </van-radio-group>
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
      checked:1
    })
    let a,b,c,d
    console.log(props)
    const onSubmit = () => {

    }
    return{
      a,b,c,d,
      onSubmit,
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
