<template>
  <div class="date">
    <p class="title">
      <span class="title-name"> {{ date }} </span>
      <span class="line"></span>
    </p>

    <div class="article">
      <articleView
        :article-list="list"
        :have-more-art="haveMoreArt"
        @loadMore="loadMore"
      ></articleView>
    </div>
  </div>
</template>

<script>
import articleView from '~/components/common/article';

export default {
  name: 'Date',

  transition: 'fade',

  scrollToTop: true,

  components: {
    articleView
  },

  fetch({ store, params }) {
    return store.dispatch('article/getArtList', params);
  },

  data() {
    return {};
  },

  computed: {
    mobileLayout() {
      return this.$store.state.options.mobileLayout;
    },

    date() {
      return this.$route.params.date;
    },

    list() {
      return this.$store.state.article.art.list;
    },

    haveMoreArt() {
      return (
        this.$store.state.article.art.pagination.current_page !==
        this.$store.state.article.art.pagination.total_page
      );
    }
  },

  methods: {
    loadMore() {
      this.$store.dispatch('article/getArtList', {
        current_page: this.$store.state.article.art.pagination.current_page + 1,
        date: this.date
      });
    }
  },

  head() {
    return { title: `${this.date} | date` };
  }
};
</script>

<style scoped lang="scss">
.date > .title {
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
