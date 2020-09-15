<template>
  <div class="tag">
    <p class="title">
      <span class="title-name"
        ><i class="iconfont icon-tag"></i> {{ tag.name }}
      </span>
      <span class="line"></span>
    </p>
    <div class="article">
      <articleView
        :article-list="list"
        :have-more-art="false"
        :have-pre-art="false"
        :current-page="currentPage"
        current-type=""
      ></articleView>
    </div>
  </div>
</template>
<script>
import articleView from '~/components/common/article';

export default {
  name: 'Tag',

  transition: 'fade',

  scrollToTop: true,

  components: {
    articleView
  },

  fetch({ store, params }) {
    return store.dispatch('article/getArtList', {
      ...params,
      page_size: 20
    });
  },

  data() {
    return {};
  },

  computed: {
    mobileLayout() {
      return this.$store.state.options.mobileLayout;
    },

    tag() {
      const _id = this.$route.params.tag;
      return this.$store.state.tag.data.list.find(item => item._id === _id);
    },

    list() {
      return this.$store.state.article.art.list;
    },

    currentPage() {
      return this.$store.state.article.art.pagination.current_page;
    }
  },

  head() {
    return { title: `${this.tag.name} | tag` };
  }
};
</script>

<style scoped lang="scss">
.tag > .title {
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
