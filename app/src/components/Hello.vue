<template>
  <div class="login-block" >

  <div class="login-container">
  <div class="hello login">
    <ul>
      <legend>login</legend>
      <p v-show="error.status===false" style="color:red">status:{{error.status}},code:{{error.code}},message:{{error.message}}</p>


      <form action="" method="post" class="form-horizontal" role="form">



        <div class="form-group">
          <label for="name" class="col-sm-2 control-label">name</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="name" placeholder="name"  v-model="fm.name">
          </div>
          <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" />
        </div>
        <div class="form-group">
          <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
          <div class="col-sm-8">
            <input type="password" class="form-control" id="inputPassword3" placeholder="Password" v-model="fm.password" >
          </div>
        </div>


        <div class="form-group">
          <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" />
          <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button type="submit" class="btn btn-primary" @click.prevent="login">Submit</button>
          </div>
        </div>
      </form>






    </ul>
  </div>
</div>
</div>

</template>

<script>
  import Api from '../helper/Api'
  export default {
      name: 'hello',
      data () {
        return {

          msg: 'home',
          items:[
            'vue-router','vuex','vue-loader','awesome-vue'
          ],
          fm:{},
          error:{
                status:true,
                code:'',
                message:''
          }
        }
      },
      methods: {
          login(evt){
            var $this=this;
            this.api.post('Public/login',this.fm).then(response=>{
                if(response.status==200 && response.data.status==true){
                  this.api.resetCommonData(response.data);
                }else {
                    this.error=response.data;
                }
            }).catch(error=>{
                alert(error);
            })
          },
      },

      mixins:[Api]



  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }
</style>
