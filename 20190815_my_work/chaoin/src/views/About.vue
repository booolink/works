<template>
  <div class="about">
    <inputpage />
  </div>
</template>
<script>
// @ is an alias to /src
import inputpage from "@/components/input.vue";

export default {
  // name: "About",
  components: {
    inputpage
  }
};
</script>
<style scoped>
.about {
  width: 100%;
  height: 100vh;
  background-color: #416f9d;
  font-family: "微軟正黑體";
  padding-top:10px; 
  letter-spacing: 10px;
}
</style>