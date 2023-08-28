export default defineNuxtRouteMiddleware((to, from) => {
  // 숫자가 아닌 잘못된 params.id 값 받을 경우 알림과 함께 redirect 처리
  if(isNaN(to.params.id)) {
    if(process.client) {
      alert("잘못된 접근 요청입니다.");
      return navigateTo("/");
    }
  }
})