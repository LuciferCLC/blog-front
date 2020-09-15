<template>
  <div class="app">
    <div
      v-if="mobileLayout"
      v-click-outside="hideSide"
      class="app-aside"
      :class="{ open: mobileSidebar }"
    >
      <mobile-side></mobile-side>
    </div>
    <div class="app-main" :class="{ open: mobileSidebar }">
      <transition name="fade" mode="">
        <div v-if="!isWelcome" class="head-box">
          <mobile-header v-if="mobileLayout"></mobile-header>
          <my-header v-else></my-header>
        </div>
      </transition>

      <transition-group
        tag="div"
        class="container clearfix main-container"
        name="slide-up"
        :class="{ mobile: mobileLayout }"
      >
        <div
          key="1"
          class="content-left"
          :class="{
            'full-page': !isAsdiePage,
            'mobile-layout': mobileLayout
          }"
        >
          <nuxt></nuxt>
        </div>
        <!-- <div
        class="content-right" 
        v-if="isAsdiePage && !mobileLayout && $route.name !== 'index'" 
        key="2">
          <keep-alive>
            <asideView></asideView>
          </keep-alive>
        </div> -->
      </transition-group>

      <transition name="fade" mode="">
        <my-footer v-if="!isError && !isWelcome"></my-footer>
      </transition>
    </div>
    <scoll-top></scoll-top>
  </div>
</template>

<script>
import myFooter from '~/components/layouts/footer';
import myHeader from '~/components/layouts/header';
// import asideView from '~/components/layouts/aside';
import scollTop from '~/components/layouts/scollTop';

import mobileSide from '~/components/mobile/aside';
import mobileHeader from '~/components/mobile/header';

export default {
  components: {
    mobileHeader,
    myFooter,
    myHeader,
    // asideView,
    mobileSide,
    scollTop
  },

  computed: {
    isAsdiePage() {
      return this.$store.state.options.isAsidePage;
    },

    isWelcome() {
      return false;
      // return this.$store.state.options.isWelcome
    },

    mobileLayout() {
      return this.$store.state.options.mobileLayout;
    },

    mobileSidebar() {
      return this.$store.state.options.mobileSidebar;
    },

    isError() {
      return this.$store.state.options.isError;
    },

    pageLoading() {
      return this.$store.state.options.pageLoading;
    }
  },

  mounted() {
    const theme = window.localStorage.getItem('THEME') || 'dark';
    document.body.id = theme;
  },

  methods: {
    hideSide() {
      this.$store.commit('options/SET_MOBILE_SIDEBAR', false);
    }
  },
  head() {
    return !this.mobileLayout
      ? {}
      : {
          bodyAttrs: {
            class: 'mobile'
          }
        };
  }
};
</script>

<style lang="scss" scoped>
.app {
  > .app-aside {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    height: 100%;
    width: 60%;
    background: $white;
    @include css3-prefix('transform', 'translateX(-100%)');
    @include transition(all 0.3s ease-out);

    > .mobile-aside {
      opacity: 0;
      @include transition(all 0.3s ease-out);
      @include css3-prefix('transform', 'scale(.8)');
    }
  }

  > .app-aside.open {
    @include css3-prefix('transform', 'translateX(0)');

    > .mobile-aside {
      opacity: 1;
      @include css3-prefix('transform', 'scale(1)');
    }
  }

  > .app-main {
    @include transition(all 0.3s ease-out);

    > .main-container {
      min-height: calc(100vh - 196px);
      margin-top: $normal-pad;
    }

    > .main-container.mobile {
      min-height: calc(100vh - 56px);
    }
  }

  > .app-main.open {
    transform: translateX(60%);
  }
}

.content-left {
  position: relative;
  width: $container-left;
  float: left;
  @include css3-prefix(transition, all 0.3s cubic-bezier(1, 0.5, 0.8, 1));
}

.content-left.full-page,
.content-left.mobile-layout {
  width: 100%;
  @include css3-prefix(transition, width 0.5s cubic-bezier(1, 0.5, 0.8, 1));
}

.content-left.mobile-layout {
  width: 100%;
  margin: 0;
  padding: 1rem;
  padding-top: 4.5rem;
}

.content-right {
  width: $container-right;
  float: right;
}

.mobile {
  width: 100%;
}
</style>
