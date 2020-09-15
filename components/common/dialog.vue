<template>
  <transition name="fade">
    <div
      v-show="dialogVisible"
      class="dialog"
      :class="{ 'dialog-mobile': mobileLayout }"
    >
      <transition name="slide-down">
        <div v-show="dialogVisible" v-click-outside="hide" class="dialog-body">
          <div class="dialog-head">
            <a href="javascript:;" @click="hide"
              ><i class="iconfont icon-close"></i
            ></a>
          </div>
          <div class="dialog-content">
            <slot></slot>
            <LoadingComponent v-show="loading"></LoadingComponent>
            <img
              v-if="img"
              v-show="!loading"
              v-click-outside="hide"
              :src="img"
              alt=""
              class="close"
              @click="hide"
            />
          </div>
          <div class="dialog-foot">
            <slot name="foot"></slot>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import LoadingComponent from './loading/index.vue';

export default {
  name: 'Mdialog',

  components: {
    LoadingComponent
  },

  props: ['visible', 'img', 'loading'],

  data() {
    return {
      back: {
        height: '',
        overflow: ''
      }
    };
  },

  computed: {
    dialogVisible() {
      if (this.visible) this.lockBody();
      else this.unLockBody();
      return this.visible;
    },

    mobileLayout() {
      return this.$store.state.options.mobileLayout;
    }
  },

  methods: {
    lockBody() {
      this.back.height = document.body.style.height;
      this.back.overflow = document.body.style.overflow;
      document.body.style.height = '100%';
      document.body.style.overflow = 'hidden';
    },

    unLockBody() {
      if (typeof window === 'undefined') return;
      document.body.style.height = this.back.height;
      document.body.style.overflow = this.back.overflow;
    },

    hide() {
      this.unLockBody();
      this.$emit('update:visible', false);
    }
  }
};
</script>

<style lang="scss">
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: $secondary;
  z-index: 999;

  > .dialog-body {
    position: absolute;
    left: calc(50% - 17rem);
    top: 10rem;
    width: 34rem;
    // height: 24rem;
    padding: 1rem;
    background: $white;
    @include border-radius(0.5rem);
    box-shadow: 0px 8px 46px rgba(0, 0, 0, 0.08),
      0px 2px 6px rgba(0, 0, 0, 0.03);

    > .dialog-head {
      position: relative;
      text-align: right;
      z-index: 2;
      color: $red;

      .iconfont {
        font-size: 1.3rem;
      }
    }
  }

  &.dialog-mobile {
    > .dialog-body {
      width: 24rem;
      top: 4rem;
      left: calc(50% - 12rem);
    }
  }
}
</style>
