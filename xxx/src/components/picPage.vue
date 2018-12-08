<template>
  <div class="pic-container">
    <h3>这是我们的照片墙~
      <br>（图片较多，请耐心等待哦）
    </h3>
    <cube-scroll :data="picArr">
      <div @click="showPic(item)" class="pic-wrapper" v-for="(item, index) in picArr" :key="index">
        <div class="img-wrapper">
          <img class="mainImg" v-lazy="baseUrl+item.url" :alt="item.desc">
        </div>
        <div class="intro">
          <div class="desc">{{item.desc}}</div>
          <div class="date">{{item.date}}</div>
          <img class="duck" :src="duck[Math.floor(Math.random()*duck.length)]" alt>
        </div>
      </div>
      <p class="more" @click="gotoNext">还远远没有结束啊，照片可多了啊
        <br>（点我进入下一关！）
      </p>
    </cube-scroll>
  </div>
</template>

<script>
import picList from "../../script/picList.json";
export default {
  data() {
    return {
      picArr: picList,
      baseUrl: process.env.BASE_URL,
      duck: [
        require("../assets/img/original/小刘鸭1.jpg"),
        require("../assets/img/original/小刘鸭2.jpg"),
        require("../assets/img/original/小刘鸭3.jpg"),
        require("../assets/img/original/小刘鸭4.jpg"),
        require("../assets/img/original/小刘鸭5.jpg"),
        require("../assets/img/original/小刘鸭6.jpg"),
        require("../assets/img/original/小刘鸭7.gif"),
        require("../assets/img/original/小刘鸭8.gif"),
        require("../assets/img/original/小刘鸭9.gif"),
        require("../assets/img/original/小刘鸭10.gif"),
        require("../assets/img/original/小刘鸭11.gif"),
        require("../assets/img/original/小刘鸭13.gif"),
        require("../assets/img/original/小刘鸭14.gif"),
        require("../assets/img/original/小刘鸭15.gif"),
        require("../assets/img/original/小刘鸭11.gif"),
        require("../assets/img/original/小刘鸭17.jpg"),
        require("../assets/img/original/小刘鸭12.gif")
      ]
    };
  },
  methods: {
    showPic(item) {
      this.$createImagePreview(
        {
          imgs: [this.baseUrl + item.url]
        },
        h => {
          return h(
            "div",
            {
              class: {
                "image-preview-custom-header": true
              },
              slot: "header"
            },
            item.desc
          );
        }
      ).show();
    },
    gotoNext() {
      this.$router.push("");
    }
  }
};
</script>

<style>
h3 {
  line-height: 5vh;
  color: beige;
  font-size: 20px;
}
.cube-scroll-wrapper {
  height: 90vh;
}
.pic-wrapper {
  width: 94%;
  font-size: 0;
  border-radius: 10px;
  box-sizing: border-box;
  height: 280px;
  overflow: hidden;
  margin: 0 auto 10px auto;
}
.intro {
  font-family: "Microsoft Yahei";
  font-size: 16px;
  height: 100%;
  background-color: beige;
  text-align: left;
  padding: 10px;
  position: relative;
}
.desc {
  font-size: 28px;
  line-height: 36px;
  font-weight: 500;
  max-width: 9em;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.date {
  font-size: 14px;
  line-height: 24px;
  color: #888;
  font-weight: 200;
}
.img-wrapper {
  height: 200px;
  overflow: hidden;
}
.mainImg {
  width: 100%;
}
.duck {
  width: 50px;
  position: absolute;
  right: 20px;
  top: 20px;
}
.image-preview-custom-header {
  color: bisque;
  text-align: center;
  line-height: 34px;
  font-size: 18px;
}
.more {
  font-size: 20px;
  line-height: 28px;
  height: 58px;
  color: beige;
  text-align: center;
  font-weight: 600;
}
</style>
