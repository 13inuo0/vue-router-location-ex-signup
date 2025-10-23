<template>
  <div>
    <router-link to="/"> Logo </router-link>| <router-link to="/reserve"> 예약하기 </router-link>|
    <router-link to="/confirm"> 예약확인 </router-link>| <router-link to="/review"> 리뷰 </router-link>|
    <!-- 로그인 상태에 따라 메뉴를 변경 -->
    <span v-if="loggedInUser">{{ loggedInUser }}님!! <button @click="logout">로그아웃</button></span>
    <!-- 기본메뉴 -->
    <span v-else>
      <router-link to="/login"> 로그인 </router-link>|
      <router-link to="/signup"> 회원가입 </router-link>
    </span>
    <!-- 다크모드 버튼 -->
    <button class="theme-btn" @click="toggleTheme">
      {{ isDark ? "🌙 다크모드" : "☀️ 라이트모드" }}
    </button>
  </div>
</template>
<script setup>
import { onMounted, ref, watch } from "vue";

// 다크 모드 설정
const isDark = ref(false);
const THEME_KEY = "theme";

const loggedInUser = ref(null);
// 로그인 상태 체크
const checkedLogin = () => {
  const user = localStorage.getItem("loggedInUser");
  loggedInUser.value = user ? user : null;
};
// 페이지가 열릴 때 한번 실행
onMounted(() => {
  checkedLogin();
  // 다크모드 설정
  // 로컬에서 테마를 불러오기
  const savedTheme = localStorage.getItem(THEME_KEY);
  isDark.value = savedTheme === "dark";
});
// 다크모드 적용(감시)
watch(
  isDark,
  (val) => {
    // console.log(val); //true & false
    const el = document.documentElement;
    // console.log(el);
    if (val) {
      el.classList.add("dark");
      localStorage.setItem(THEME_KEY, "dark");
    } else {
      el.classList.remove("dark");
      localStorage.setItem(THEME_KEY, "light");
    }
  },
  { immediate: true }
);
// 다크모드 버튼 클릭(토글)
const toggleTheme = () => {
  isDark.value = !isDark.value;
};

// logout
const logout = () => {
  localStorage.removeItem("loggedInUser");
  alert("로그아웃 되었습니다!");
};
</script>
<style scoped></style>
