<template>
  <div class="hotsong">
    <div class="hotop">
      <div class="hotopct">
        <div class="hoticon"></div>
        <div class="hottime">更新日期：01月07日</div>
      </div> 
    </div>
    <ul class="newMusicList">
        <router-link v-for="item in newMusicList" :key="item.id" tag="li" to="/">
            <span>01</span>
            <div class="left">
                <div>{{item.name}}</div>
                <p>{{item.song.artists[0].name}}-{{item.name}}</p>
            </div>
            <div class="right">
                <span></span>
            </div>
        </router-link>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Hotsong',
  components: {
  },
  data(){
    return {
      newMusicList:[]
    }
  },

  beforeRouteEnter(to,from,next){
    next(vm=>{
      vm.$http.get('/personalized/newsong').then(data=>{
        console.log(data.data.result);
        vm.newMusicList=data.data.result;
      })
    });
  },
}
</script>

<style lang="less" scoped>
div.hotop{
  width: 100%;
  height: 130px;
  padding-top: 20px;
  background-image: url('../assets/hot_music_bg_1x.jpg');
  background-size: 100% 100%;
  .hotopct{
    padding-left: 20px;
    .hoticon{
      width: 142px;     height: 67px;
      background: url('../assets/index_icon_3x.png') no-repeat -26px -30px;
      background-size: 166px 97px;
      padding-top: 10px;
    }
    .hottime{
      color: white;
      font-size: 12px;
      text-align: left;
      margin-top: 10px;
    }
  }
}
.newMusicList{
    li{
        display: flex;
        margin-top: 10px;
        padding-left: 10px;
        span{
            width: 30px;
            height: 50px;
            display: inline-block;
            text-align: center;
            line-height: 50px;
        }
        div.left{
            flex: 1;
            text-align: left;
            border-bottom: 1px solid #ddd;
            div{
                font-size: 17px;
                color: black;
            }
            p{
                font-size: 12px;
                color: #888;
                padding: 5px 0px;
            }
        }
        div.right{
            border-bottom: 1px solid #ddd;
            padding:0px 5px;
            display: flex;
            align-items: center;
            span{
                display: inline-block;
                width:22px;
                height:22px;
                background-image: url(../assets/index_icon_2x.png);
                background-position: -24px 0px;
                background-size: 166px 97px;
            }
        }
    }
}
</style>
