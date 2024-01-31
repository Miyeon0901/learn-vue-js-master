<!-- 컴포넌트의 이름은 최소한 2단어로 한다.
html 표준 태그인지 컴포넌트 태그인지 브라우저가 알 길이 없음. -->
<template>
  <header>
    <h1>{{ propsdata }}</h1>
    <button v-on:click="sendEvent">send</button>
  </header>
</template>

<script>
export default {
    props: ['propsdata'],
    methods: {
        sendEvent: function() {
            this.$emit('renew')
        }
    }
}
</script>

<style>

</style>