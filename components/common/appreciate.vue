<template>
  <div>
    <p class="title more tools" :class="{'title-mobile': mobileLayout}">
      <span class="title-name name">Buy Me A Coffee</span>
      <span class="line" />
    </p>
    <div class="appreciate">
      <div class="appreciate-item">
        <img src="~/static/images/wechat.jpeg" alt="" :width="mobileLayout ? 160 : 200">
        <p>微信</p>
      </div>
      <div class="appreciate-item">
        <img src="~/static/images/zhifubao.jpeg" alt="" :width="mobileLayout ? 160 : 200">
        <p>支付宝</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'appreciate',

  props: ['mobileLayout']
}
</script>

<style lang="scss">
.mobile {
  .appreciate {
    flex-wrap: wrap;
    > .appreciate-item:first-child {
      margin-bottom: 1rem;
    }
  }
}

.appreciate {
  display: flex;
  justify-content: space-around;
  padding: 2rem 2rem 1rem 2rem;
  .appreciate-item {
    text-align: center;
    p {
      margin-top: 1rem;
    }
  }
}
</style>
