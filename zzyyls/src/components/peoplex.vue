<template>
<div class="peoplex">
    <transition name="fade" mode="out-in">
        <keep-alive>
        <router-view></router-view>
        </keep-alive>
    </transition>
</div>
</template>

<script>

export default {
  name: 'peoplex',
  data() {
    return {

    }
  },
  components: {

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
  
}
@media screen and (min-width:900px) {
    
}

.peoplex{
    background: #fff;
    border-radius: 2px;
    padding: 15px 10px;
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


