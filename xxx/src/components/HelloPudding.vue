<template>
  <div class="love-container">
    <div class="hello">Hello,Bling~</div>
    <cube-input class="input" v-model="lover.name" placeholder="请输入您将来的称呼~"></cube-input>
    <cube-tip ref="tip" direction="top" style="left:130px;top:143px;">{{Tip}}</cube-tip>
    <cube-popup
      @mask-click="goToNextPage"
      class="pigMask"
      :visible="pigMask"
      type="my-popup"
      ref="myPopup"
    >服了你啦，快进去吧~</cube-popup>
    <div class="present" :style="{top:presentTop}" @click="goToNextPage">
      <img src="../assets/img/original/red flower.png" alt="奖励你一朵小红花">
    </div>
    <cube-button class="submit" @click="submit">进入</cube-button>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      lover: {
        name: ""
      },
      failureTimes: 0,
      pigMask: false,
      presentTop: "-100%"
    };
  },
  methods: {
    submit() {
      if (this.lover.name === "老婆") {
        this.presentTop = "40%";
      } else {
        this.failureTimes = this.failureTimes + 1;
        this.controlTip();
      }
    },
    controlTip() {
      if (this.failureTimes < 5) {
        this.$refs.tip.show();
      } else {
        this.$refs.tip.hide();
      }
    },
    goToNextPage() {
      this.$router.push({ path: "/pic" });
    }
  },
  watch: {
    failureTimes(val) {
      if (val >= 5) {
        this.pigMask = true;
      }
    }
  },
  computed: {
    Tip: function() {
      switch (this.failureTimes) {
        case 1:
          return "再仔细想想？";
        case 2:
          return "想想我们以后会怎么样？";
        case 3:
          return "我们以后会结婚啊！结婚了叫你啥？";
        case 4:
          return "你是居居吗！";
      }
      return "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.love-container {
  margin: 0 auto 30px auto;
  text-align: center;
  position: relative;
}
.hello {
  font-size: 32px;
  line-height: 50px;
  margin-bottom: 20px;
  color: beige;
}
.input {
  height: 50px;
  font-size: 18px;
  width: 60%;
  margin-bottom: 60px;
  margin-left: auto;
  margin-right: auto;
}
.submit {
  width: 100px;
  border-radius: 10px;
  color: #fff;
  background-color: beige;
  margin-left: auto;
  margin-right: auto;
}
.pigMask {
  color: #fff;
}
.present {
  position: absolute;
  left: 50%;
  transition: all 0.2s ease-in-out;
  transform: translateX(-50%);
  z-index: 100;
  font-size: 0;
}
.present > img {
  width: 150px;
}
</style>
