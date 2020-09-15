<template>
  <div class="books">
    <div class="head">
      <p>一些读过的书，一些想卖的书。</p>
    </div>

    <transition-group
      name="slide-down"
      tag="div"
      class="list-box"
      :class="{ mobile: mobileLayout }"
    >
      <div v-for="list in items" :key="list._id" class="list">
        <div class="book-thumb">
          <img :src="`${list.thumb}?imageView2/2/h/300/`" alt="" />
        </div>
        <div class="book-des">
          <p class="book-name">{{ list.name }}</p>
          <p class="book-info">
            <span class="book-mony">{{ list.descript }}</span>
            (<span
              class="book-state"
              :class="{ 'book-success': list.state === 1 }"
              >{{ list.state === 1 ? '待售' : '已售' }}</span
            >)
          </p>
        </div>
      </div>
    </transition-group>

    <div v-if="!haveMore" key="-2" class="loading-more">
      <a v-if="!fetch" href="javascript:;" class="allow" @click="loadMore"
        >加载更多</a
      >
      <a v-if="fetch" href="javascript:;" class="not-allow">加载中</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Book',

  transition: 'fade',

  fetch({ store }) {
    return store.dispatch('book/getBook');
  },

  computed: {
    mobileLayout() {
      return this.$store.state.options.mobileLayout;
    },

    fetch() {
      return this.$store.state.book.fetch;
    },
    items() {
      return this.$store.state.book.data.list;
    },
    haveMore() {
      return (
        this.$store.state.book.data.pagination.current_page ===
        this.$store.state.book.data.pagination.total_page
      );
    }
  },
  methods: {
    loadMore() {
      this.$store.dispatch('book/getBook', {
        current_page: this.$store.state.book.data.pagination.current_page + 1,
        page_size: 6
      });
    }
  },

  head: {
    title: 'book'
  }
};
</script>

<style scoped lang="scss">
.books {
  > .head {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    width: 16rem;
    height: 4rem;
    font-size: 1.3rem;
    color: $black;
    text-align: center;
    border-top: 1px solid $border-color;
    border-bottom: 1px solid $border-color;

    p {
      font-size: $font-size-small;
    }
  }

  .list-box {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: $normal-pad;

    > .list {
      position: relative;
      left: 0;
      top: 0;
      padding: $normal-pad;
      width: calc(100% / 3 - 2rem / 3);
      background: $code-bg;
      margin: 1rem 1rem 0 0;
      @include css3-prefix('transition', 'all .3s');

      &:nth-child(3n) {
        margin-right: 0;
      }

      > .book-thumb {
        height: 16rem;
        text-align: center;
        overflow: hidden;

        img {
          max-height: 100%;
        }
      }

      > .book-des {
        text-align: center;
        margin-top: $sm-pad;

        > .book-name {
          color: $black;
        }

        > .book-info {
          margin-top: 0.3rem;
          font-size: $font-size-small;

          > .book-state {
            color: $red;

            &.book-success {
              color: $green;
            }
          }
        }
      }
    }

    &.mobile {
      > .list {
        width: 100%;
        margin: 0 0 $normal-pad;
      }
    }
  }

  > .loading-more {
    margin-top: 1rem;
    padding: $md-pad;
    background: $module-bg;
    text-align: center;
    color: $black;
    &:hover {
      background: $module-hover-bg-light-6;
    }

    > .allow {
      cursor: pointer;
    }

    > .not-allow {
      cursor: not-allowed;
    }
  }
}
</style>
