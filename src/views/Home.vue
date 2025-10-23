<template>
  <div>
    <h1>✨HOME</h1>
    <p v-if="loggedInUser"> 환영합니다 <b>{{ loggedInUser }}</b>님!! </p>
    <p v-else>로그인이 필요합니다!</p>
    <!-- 형식적으로는 v-if 다음에 v-else가 위치해야하나 v-if만 있어도 기능은 함. -->
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';

const loggedInUser = ref(null)
onMounted(()=>{
    loggedInUser.value = localStorage.getItem("loggedInUser")
})
</script>
<style scoped lang="scss"></style>
