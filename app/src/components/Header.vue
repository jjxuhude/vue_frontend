<template>

    <div class="links">
        <ul class="list-unstyled pull-left">
            <li> <router-link to="/list">list</router-link> </li>
            <li> <router-link to="/view/2/123">view:/view/2/123</router-link> </li>
            <li> <router-link to="/view/4/456">view:/view/4/456</router-link> </li>

        </ul>

        <ul class="list-unstyled">
            <li>{{date}}</li>
            <li>{{currentUser.name}}</li>
            <li @click="logout"><a>logout</a></li>
        </ul>

    </div>

</template>




<script>
    import button_counter from './Increment'
    import Vue from 'vue'
    import Api from '../helper/Api'

    export default  {
      name: 'home-header',

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