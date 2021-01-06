<template>
<div class="index">
    <transition name="fade" mode="out-in">
        <keep-alive>
        <router-view></router-view>
        </keep-alive>
    </transition>
</div>
</template>

<script>
import people from '~/components/people.vue';

export default {
  name: 'index',
  data() {
    return {

    }
  },
  components: {
      people
  },
  methods: {
     

  },
  watch: {

  },
  created() {

  },
}
</script>

<style scoped lang="scss">
@media screen and (max-width:900px) {
  .index{
        background: #fff;
        border-radius: 2px;
        padding: 15px 10px;
    }
}
@media screen and (min-width:900px) {
    .index{
        background: #fff;
        border-radius: 2px;
        padding: 15px 15px 50px 15px;
    }
}


.fade-enter-active,
.fade-leave-active {
    transition: all 0.4s ease;
}
.fade-enter,
.fade-leave-active {
    opacity: 0;
}


</style>


