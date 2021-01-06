<template>
<div class="home">
    <transition name="fade" mode="out-in">
        <keep-alive>
        <router-view></router-view>
        </keep-alive>
    </transition>
</div>
</template>

<script>
import doctor2 from '~/components/doctor2.vue';
import doctor3 from '~/components/doctor3.vue';
import doctor4 from '~/components/doctor4.vue';
import drug1 from '~/components/drug1.vue';
import logistics from '~/components/logistics.vue';



export default {
  name: 'home',
  data() {
    return {

    }
  },
  components: {
      doctor2,
      doctor3,
      doctor4,
      drug1,
      logistics
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
  .home{
        background: #fff;
        border-radius: 2px;
        padding: 15px 10px;
    }
}
@media screen and (min-width:900px) {
    .home{
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


