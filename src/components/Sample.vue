<template>
    <div>
        <input v-model="inputStr">
        <h3>{{inputStr}}</h3>
        <el-button @click="getHtml" type="primary">get</el-button>
        <el-button @click="nextPage">next</el-button>
        <div v-html="htmlRes" v-show="htmlShow"></div>
    </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "Sample",
    props: {
      btnText: ''
    },
    data() {
      return {
        inputStr: 'https://api.ihaohaoxuexi.com/learning_fe/light/invoke/pkuArticles?page=',
        htmlRes: '',
        htmlShow: false,
        page: 0
      }
    },
    methods: {
      getHtml() {
        //https://api.ihaohaoxuexi.com/learning_fe/light/invoke/pkuArticles?page=8
        axios.get(this.inputStr+this.page)
          .then(res => {
            this.htmlRes = res.data.data.list[0].content;
            // this.htmlRes = res;
            this.htmlShow = true;
          })

      },
      clear() {
        this.htmlShow = false;
      },
      nextPage() {
        this.page++;
        axios.get(this.inputStr+this.page)
          .then(res => {
            this.htmlRes = res.data.data.list[0].content;
            this.htmlShow = true;
          })

      }
    }
  }
</script>

<style scoped>

</style>