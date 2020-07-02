<template>
  <swiper class="home-swiper" >
    <swiper-item v-for="item in cbanners" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
    import {Swiper, SwiperItem} from 'components/common/swiper';
    export default {
        name: "HomeSwiper",
        props: {
            cbanners:{
                type:Array,
                default() {
                    return []
                }
            }
        },
        data(){
          return {
            flag: false
          }
        },
        components:{
            Swiper,SwiperItem
        },
        methods:{
          swiperLoad(){
            if(!this.flag){
              console.log("-----------")
              this.$emit("swiperLoadFished")
              this.flag = true
            }
          }
        }
    }
</script>

<style scoped>


</style>
