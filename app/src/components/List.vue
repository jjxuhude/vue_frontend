<template>

    <div>
        <ol v-if="items.length>0">

            <li v-for="item in items" >{{item}} </li>
        </ol>
        <div v-else="" style="color: red">
            <p >{{error}}</p>
        </div>
    </div>
</template>

<script>
    import Api from '../helper/Api'
    import Base from './Base.vue'
    export default {
        data(){
            return {
                items:[],
                error:{

                },
                currentUser:Lockr.get('userInfo')

            }
        },
        methods: {
            list(){
                this.api.post('Vue').then(response=>{
                    if(response.status==200 && response.data.status==true){
                        this.items=response.data.items;
                    }else{
                        this.error=response.data;
                    }

                })
            }
        },
        created(){
            console.log('list');
            this.list();
        },
        mixins:[Api],
        extends:Base,


    }
</script>

<style>

</style>