<template>
    <button v-on:click="increment()" >{{ counter }}</button>

</template>

<script>
    export default {
      props:['attr'],
      data: function (){
        return {
          counter: 0
        }
      },
      methods: {
        increment: function(){
          this.counter++;
          this.$parent.myAttr+=this.counter
          this.$emit('increment');
        }
      },
      created: function () {
        console.log('created');
      },
      mounted:  function () {
        console.log('mounted');
      },
      updated:  function () {
        console.log('updated');
      },
      destroyed: function () {
        console.log('destroyed');
      },
      mixins:[
        {
          beforeUpdate:  function () {
            console.log('mixins update')
          }
        }
      ]



    }
</script>


