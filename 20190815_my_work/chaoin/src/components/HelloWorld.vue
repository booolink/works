<template>
  <!-- 第一個頁面 -->

  <div class="hello">
    <h2>Vue Google Sheets api 實作</h2>
    <!-- <button @click="login()">讀取 Google Sheets 檔案</button> -->
    <br />
    <br />

    <!-- <table align="center">
      <tr v-for="record in records">
        <td v-for="r in record">{{ r }}</td>
      </tr>
    </table> -->
  </div>
</template>

<script>
export default {
  // name: "HelloWorld",
  // data() {
  //   return {
  //     records: []
  //   };
  // },
  // mounted() {
  //   let vm = this;
  //   vm.login();
  // },
  // methods: {
  //   login() {
  //     let vm = this;
  //     this.$getGapiClient().then(gapi => {
  //       var params = {
  //         spreadsheetId: "1LTd0wEnly2L4T_d0u7A4w5Qjm__Ky8eVURUpzPgRPKc",
  //         range: "A1:E1000",
  //         valueRenderOption: "FORMATTED_VALUE",
  //         dateTimeRenderOption: "FORMATTED_STRING"
  //       };
  //       var request = gapi.client.sheets.spreadsheets.values.get(params);
  //       request.then(
  //         function(response) {
  //           var result = response.result;
  //           vm.records = result.values;
  //           for (var i = 0; i <= vm.records.length; i++) {
  //             // title
  //             var title = vm.records[0];
  //             var objTitle = {};
  //             for (var j = 0; j <= title.length; j++) {
  //               objTitle = title[j];
  //             }
  //           }
  //         },
  //         function(reason) {
  //           console.error("error:", reason);
  //         }
  //       );
  //     });
  //   }
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 加入 "scoped" 只在封裝在這個vue CSS 使用 -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
