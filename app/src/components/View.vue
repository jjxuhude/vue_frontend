<template>

    <div>
        <h3>View</h3>
        <div>
            {{params}}
        </div>

    </div>
</template>

<script>
    import Api from '../helper/Api'
    export default {
        data(){
            return {
                params:{}
            }
        },
        methods: {

        },
        created:function (){
            this.params=this.$route.params;
        },

        mixins:[Api]

    }
</script>

<style>

</style>