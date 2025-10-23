<template>
    <h1>💎회원가입</h1>
    <form @submit.prevent="signup">
      <!-- prevent를 입력해야 새로고침이 되지 않음 -->
      <input v-model="username" type="text" placeholder="이름 입력" />
      <input v-model="password" type="password" placeholder="비밀번호" />
      <button type="submit">회원가입</button>
    </form>
  </template>
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const username = ref("")
  const password = ref("")
  const signup = ()=>{
      const user= {
          username: username.value,
          password : password.value,
  
      }
      localStorage.setItem("user", JSON.stringify(user)) //회원정보 저장
      alert("회원가입 완료")
      router.push("/login")
  }
  </script>
  <style scoped lang="scss"></style>
  