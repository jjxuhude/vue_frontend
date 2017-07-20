<template>

    <div class="header-container">
        <div class="title clearfix">
            <div class="logo pull-left"><img  src="./../assets/images/admin/logo.gif" /></div>
            <div class="links pull-right">
                <ul class="list-unstyled clearfix">
                    <li>{{currentUser.name}}</li>
                    <li>{{date}}</li>
                    <li><b @click="logout">注销</b></li>
                </ul>
            </div>
        </div>
        <div class="menu">
            <div>
                <ul class="nav-box clearfix list-unstyled">
                    <li class=" active parent level0  "><a class="default-btn" href="javascript:;">首页</a><ul style="display: none;"><li class="   level1  "><a class="default-btn" href="http://la.org/admin/home?key=YWRtaW4vaG9tZS83WHB1QUJSQ2lpZXN5azJp">系统消息</a></li><li class="   level1  "><a class="default-btn" href="http://la.org/admin/home/slider?key=YWRtaW4vaG9tZS9zbGlkZXIvN1hwdUFCUkNpaWVzeWsyaQ%3D%3D">首页轮播</a></li></ul></li><li class="   level0  "><a class="default-btn" href="http://la.org/admin/catalog?key=YWRtaW4vY2F0YWxvZy83WHB1QUJSQ2lpZXN5azJp">分类</a></li><li class="   level0  "><a class="default-btn" href="http://la.org/admin/video?key=YWRtaW4vdmlkZW8vN1hwdUFCUkNpaWVzeWsyaQ%3D%3D">电影</a></li><li class="  parent level0  "><a class="default-btn" href="javascript:;">TV</a><ul style="display: none;"><li class="   level1  "><a class="default-btn" href="http://la.org/admin/tv?key=YWRtaW4vdHYvN1hwdUFCUkNpaWVzeWsyaQ%3D%3D">Tv管理</a></li><li class="   level1  "><a class="default-btn" href="http://la.org/admin/season?key=YWRtaW4vc2Vhc29uLzdYcHVBQlJDaWllc3lrMmk%3D">Season管理</a></li><li class="   level1  "><a class="default-btn" href="http://la.org/admin/episode?key=YWRtaW4vZXBpc29kZS83WHB1QUJSQ2lpZXN5azJp">Episode管理</a></li></ul></li><li class="   level0  "><a class="default-btn" href="http://la.org/admin/customer?key=YWRtaW4vY3VzdG9tZXIvN1hwdUFCUkNpaWVzeWsyaQ%3D%3D">客户</a></li><li class="   level0  "><a class="default-btn" href="http://la.org/admin/cms?key=YWRtaW4vY21zLzdYcHVBQlJDaWllc3lrMmk%3D">CMS</a></li><li class="  parent level0  "><a class="default-btn" href="javascript:;">系统</a><ul style="display: none;"><li class="  parent level1  "><a class="default-btn" href="javascript:;">导入视频</a><ul><li class="   level2  "><a class="default-btn" href="http://la.org/admin/import/add?key=YWRtaW4vaW1wb3J0L2FkZC83WHB1QUJSQ2lpZXN5azJp">Add One Movie</a></li><li class="   level2  "><a class="default-btn" href="http://la.org/admin/import/movie?key=YWRtaW4vaW1wb3J0L21vdmllLzdYcHVBQlJDaWllc3lrMmk%3D">Batch Import Movie</a></li><li class="   level2  "><a class="default-btn" href="http://la.org/admin/import/tv?key=YWRtaW4vaW1wb3J0L3R2LzdYcHVBQlJDaWllc3lrMmk%3D">Batch Import Tv</a></li><li class="   level2  "><a class="default-btn" href="http://la.org/admin/import/tv/line1?key=YWRtaW4vaW1wb3J0L3R2L2xpbmUxLzdYcHVBQlJDaWllc3lrMmk%3D">Batch Update Tv line1 </a></li></ul></li><li class="   level1  "><a class="default-btn" href="http://la.org/admin/variable?key=YWRtaW4vdmFyaWFibGUvN1hwdUFCUkNpaWVzeWsyaQ%3D%3D">自定义变量</a></li><li class="  parent level1  "><a class="default-btn" href="javascript:;">权限</a><ul><li class="   level2  "><a class="default-btn" href="http://la.org/admin/user?key=YWRtaW4vdXNlci83WHB1QUJSQ2lpZXN5azJp">用户</a></li><li class="   level2  "><a class="default-btn" href="http://la.org/admin/role?key=YWRtaW4vcm9sZS83WHB1QUJSQ2lpZXN5azJp">角色</a></li></ul></li><li class="   level1  "><a class="default-btn" href="http://la.org/admin/cache?key=YWRtaW4vY2FjaGUvN1hwdUFCUkNpaWVzeWsyaQ%3D%3D">缓存管理</a></li><li class="   level1  "><a class="default-btn" href="http://la.org/admin/config?key=YWRtaW4vY29uZmlnLzdYcHVBQlJDaWllc3lrMmk%3D">配置</a></li></ul></li>				</ul>
            </div>
        </div>

    </div>

</template>




<script>
    import button_counter from './Increment'
    import Vue from 'vue'
    import Api from '../helper/Api'

    export default  {
      name: 'home-header',
      props: ['myname'],
      data () {
        return {
          myAttr:'动态属性',
          text:'header',
          date:(new Date()).toLocaleDateString(),


        }
      },

      methods: {
          logout:function () {
            Lockr.flush();
            this.api.post('Public/logout').then(response=>{
                if(response.status==200 && response.data.status==false){
                    Cookies.remove('user');
                    Cookies.remove('session_id');
                    router.push('/');
                }
            })
          },

          routerPush(){
              this.$router.push({name: 'view',params:{catalogId:222,productId:444}});
          },

      },

      computed: {
          currentUser(){
              return this.$store.state.currentUser;
          },
      },

      mixins:[Api]


    }


</script>

<style scoped>
    .header{
        width:auto;
        height: 100px ;
        border: 1px solid #ccc;
    }
</style>