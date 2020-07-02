<template>
	<div class="goods-item" @click="goodsClick(goodItem.shopId)">
		<img :src="goodItem.show.img" @load="imgLoadFinshed"/>
		<div  class="goods-info">
			<p>{{goodItem.title}}</p>
			<span class="price">{{goodItem.price}}</span>
			<span class="collect">{{goodItem.cfav}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "GoodsItem",
		props:{
			goodItem:{
				type: Object,
				default(){
					return {}
				}
			}
		},
    methods:{
      //该方法是图片加载完之后触发该方法
      imgLoadFinshed(){
        //利用事件总线发送通知，由需要的监听这个通知
        this.$bus.$emit("imgLoadFinsh")
      },
      goodsClick(id){
        this.$router.push("/detail/"+id)
      }
    }
	}
</script>

<style>
	.goods-item {
	    padding-bottom: 40px;
	    position: relative;

	    width: 48%;
	  }

	  .goods-item img {
	    width: 100%;
	    border-radius: 5px;
	    border:3px solid var(--color-tint);
	  }

	  .goods-info {
	    font-size: 12px;
	    position: absolute;
	    bottom: 5px;
	    left: 0;
	    right: 0;
	    overflow: hidden;
	    text-align: center;
	  }

	  .goods-info p {
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    margin-bottom: 3px;
	  }

	  .goods-info .price {
	    color: var(--color-high-text);
	    margin-right: 20px;
	  }

	  .goods-info .collect {
	    position: relative;
	  }

	  .goods-info .collect::before {
	    content: '';
	    position: absolute;
	    left: -15px;
	    top: -1px;
	    width: 14px;
	    height: 14px;
	    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
	  }
</style>
