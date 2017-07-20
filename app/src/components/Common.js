import Vue from 'vue'
var getChildrenTextContent = function (children) {
  return children.map(function (node) {
    return node.children
      ? getChildrenTextContent(node.children)
      : node.text
  }).join('')
}
Vue.component('anchored-heading', {
  render: function (createElement) {
    // create kebabCase id
    var headingId = getChildrenTextContent(this.$slots.default)
      .toLowerCase()
      .replace(/\W+/g, '+')
      .replace(/(^\-|\-$)/g, '')
    return createElement(
      'h' + this.level,
      [
        createElement('a', {
          attrs: {
            name: headingId,
            href: '#' + headingId
          }
        }, this.$slots.default)
      ]
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})

Vue.component('jj_layout',{
  render: function (createElement) {


    var header=createElement('header',{
          class:['header'],
          style: {
              width:'100%',
              border:'1px solid #ccc',
              textAlign:'center'
          },
          attrs:{
              title: 'customer layout'
          },
          // on: {
          //   click: function (e) {
          //     console.log(e.target)
          //   }
          // },
          // 仅对于组件，用于监听原生事件，而不是组件内部使用 `vm.$emit` 触发的事件。
          nativeOn: {
              click: function (e) {
                  console.log(222);
              },

          },

      },this.$slots.header);


      var footer=createElement('footer',{
          class: ['footer'],
          style: {
              width:'100%',
              border:'1px solid #ccc',
              textAlign:'center'
          }
      },this.$slots.footer);

      var body=createElement('main',this.$slots.default);
      var layer=[];
      var excludes=['home'];


      if(_.indexOf(excludes,router.currentRoute.name)==-1){
          layer.push(header);
      }

      layer.push(body);

      if(_.indexOf(excludes,router.currentRoute.name)==-1){
          layer.push(footer);
      }


      return createElement('div',
        {},
        layer
      );
  }
});




