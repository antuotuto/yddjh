<template>
<div class="see">
    <div class="box" @mouseenter="enter" @mouseleave="leave">
        <h1 class="an {{in}}">医生端口</h1>
        <p>医生端口</p>
    </div>



</div>
</template>

<script>



export default {
  data() {
    return {
        in:'',
    }
  },
  components: {

  },
  methods: {
    enter: function(){
        this.in = 'active'
    },
    leave: function(){
        this.in = ''
    }
  },
  watch: {

  },
  created() {

  },
}
</script>

<style scoped lang="scss">
@media screen and (max-width:900px) {
  .see{
        background: #fff;
        border-radius: 2px;
        padding: 15px 10px;
    }
}
@media screen and (min-width:900px) {
    .see{
        background: #fff;
        border-radius: 2px;
        padding: 15px 15px 50px 15px;
    }
}

.box{
    background: url(https://cdn.nlark.com/yuque/0/2018/jpeg/92616/1543724341302-assets/web-upload/7f119bd6-6298-44fc-9f11-778d28be523b.jpeg);
    height: 180px;
    border-radius: 3px;
    overflow: hidden;
    h1{
        transform: translate(-150px,50px);
        transition: .6s;
        &.active{
            transform: translate(0px,50px);
        }
    }

    p{
        transform: translate(20px,0px);
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


