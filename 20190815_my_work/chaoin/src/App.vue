<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">資料</router-link>|
      <router-link to="/About">輸入</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  overflow: hidden;
  /* outline: 1px solid; */
}
#nav {
  width: 100%;
  height: 100%;
  background: #3e3a39;
  padding: 10px;
  box-shadow: 0px 5px 20px #fff;
}
#app {
  width: 100%;
  height: 100%;
  text-align: center;
}

a {
  width: 172px;
  height: 50px;
  line-height: 45px;
  text-align: center;
  border-radius: 10px;
  display: inline-block;
  text-decoration: none;
  font-family: "微軟正黑體";
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 10px;
}
/* //A連結滑入特效 */
a:hover {
  filter: brightness(1.5);
}
</style>
