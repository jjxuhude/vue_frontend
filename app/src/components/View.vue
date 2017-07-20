<template>

    <div>
        <h3>View</h3>
        <ol v-if="items.length>0">
            <li v-for="item in items" >{{item.id}} {{item.name}} {{ item.password }}</li>
        </ol>
        <div v-else="">
            <p>code:{{error.code}} message:{{error.message}}</p>
        </div>
    </div>
</template>

<script>
    import Api from '../helper/Api'
    export default {
        data(){
            return {
                items:[],
                error:{
                    code:'',
                    message:''
                },
                currentUser:Lockr.get('userInfo')

            }
        },
        methods: {
            list(){
                this.api.post('Vue').then(response=>{
                    if(response.data.error==true){
                        this.error.code=response.data.code;
                        this.error.message=response.data.message;
                    }else {
                        this.items=response.data;
                    }
                })
            }
        },
        created:function (){
            this.list();
        },
        mixins:[Api]

    }
</script>

<style>

</style>