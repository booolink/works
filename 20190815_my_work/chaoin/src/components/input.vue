<template>
  <!-- 第二個頁面 -->
  <ul class="twopage">
    <li class="address">
      <p>地址</p>
      <input type="text" />
    </li>

    <li class="projec">
      <p>項目</p>
      <input type="text" />
    </li>

    <li class="Quantity">
      <p>數量</p>
      <input type="text" />
    </li>

    <li class="Remarks">
      <p>備註</p>
      <input type="text" />
    </li>

      <li class="submit">
        <p></p>
      <input type="submit" value="確認"/>
    </li>
  </ul>
</template>

<script>
export default {
  // name: "inputpage"
  // 從另一個頁面接的資料 props
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 加入 "scoped" 只在封裝在這個vue CSS 使用 -->

<style scoped>
* {
  box-sizing: border-box;
  /* outline: 1px solid; */
}

.twopage {
  width: 100%;
  height: 100%;
}
p {
  width: 50%;
  height: 40px;
  text-align: center;
  line-height: 45px;
  font-size: 20px;
  margin: 10px auto;
  color: #cbe196;
}
ul {
  width: 100%;
  height: 40px;
}

/* //輸入框外部設定 */
input {
  background: transparent;
  font-size: 20px;
  color: #fff;
  width: 50%;
  height: 40px;
  font-weight: 700;
  border-radius: 10px;
  border: none;
  background: #e99395;
  padding-left: 15px;
}
input[type='submit']{
   width: 20%;
   height: 45px;
   background-color: cadetblue;
   font-family: "微軟正黑體";
   letter-spacing: 10px;
   text-align: center;
   cursor: pointer;
}
input[type='submit']:hover{
  filter: brightness(1.2);
}
/* //輸入框內部設定 */
input::placeholder {
  color: rgba(199, 198, 198, 0.733);
  font-size: 16px;
}
/* // 輸入框選取時消失 */
input:focus {
  outline: none;
}
</style>
