<template>
  <div> <!-- root element가 하나만 있어야 함 -->
    {{ str }}
  </div>
</template>

<script>
// new Vue ({
//   data: {
//     str: 'hi'
//   }
// })
export default {
  data: function() {
    return {
      str: 'hi'
    }
  }
}
</script>

<style>

</style>