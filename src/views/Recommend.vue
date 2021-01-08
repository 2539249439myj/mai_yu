<template>
  <div class="recommend">
    <Title>推荐歌单</Title>
    <ul class="recommendList">
      <router-link v-for="rem in recommendMusiuList" :key="rem.id" to="/" tag="li">
        <div>
          <img :src="rem.picUrl" />
          <span>{{rem.playCount|formatNum}}</span>
        </div>
        <p>{{rem.name|substr(26)}}</p>
      </router-link>
    </ul>

    <Title>最新音乐</Title>
    <MusicItem :newMusicList="newMusicList"></MusicItem>
  </div>
</template>

<script>
import Title from '../components/Title'
import MusicItem from '../components/MusicItem'

export default {
  name: 'Recommend',
  components: {
    Title,
    MusicItem
  },
  data(){
    return {
      recommendMusiuList:[],
      newMusicList:[]
    }
  },
  beforeRouteEnter(to,from,next){
    next(vm=>{
      vm.$http.get('/personalized?limit=6').then(data=>{ //
        // console.log(data);
        vm.recommendMusiuList=data.data.result;
      });
      vm.$http.get('/personalized/newsong').then(data=>{
        console.log(data.data.result);
        vm.newMusicList=data.data.result;
      })
    });
  },
  filters:{ // 拦截器
    formatNum(value){
      return (value/10000).toFixed(1)+"万";
    },
    substr(value,len){
      return  value.substr(0,len)+'...';
    }
  }
}
</script>

<style lang="less" scoped>
ul.recommendList{
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;

  li{
    width: 33%;
    div{
      position: relative;
      span{
        position: absolute;
        top: 2px;
        right: 3px;
        color: #fff;
        text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
        font-size:10px
      }
    }
    p{
      font-size: 13px;
      text-align: left;
      
    }
  }
}
</style>
