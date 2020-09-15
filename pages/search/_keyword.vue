<template>
  <div class="keyword">
    <p class="title">
      <span class="title-name"
        ><i class="iconfont icon-search"></i>{{ keyword }}</span
      >
      <span class="line"></span>
    </p>

    <div class="article">
      <articleView
        :article-list="list"
        :have-more-art="haveMoreArt"
      ></articleView>
    </div>
  </div>
</template>
<script>
import articleView from '~/components/common/article';

export default {
  name: 'Keyword',

  transition: 'fade',

  scrollToTop: true,

  components: {
    articleView
  },

  fetch({ store, params }) {
    return store.dispatch('article/getArtList', {
      ...params,
      page_size: 100
    });
  },

  data() {
    return {};
  },

  computed: {
    mobileLayout() {
      return this.$store.state.options.mobileLayout;
    },

    keyword() {
      return this.$route.params.keyword;
    },

    list() {
      return this.$store.state.article.art.list;
    }
  },

  head() {
    return { title: `${this.keyword} | keyword` };
  }
};
</script>

<style scoped lang="scss">
.keyword > .title {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem 0rem;
  line-height: 1.5rem;
  font-size: 1rem;
  font-weight: normal;

  i {
    margin-right: 0.5rem;
  }

  > .title-name {
    position: relative;
    padding-right: $lg-pad;
    background: $white;
    z-index: 99;
  }

  > .line {
    top: 50%;
  }
}
</style>
