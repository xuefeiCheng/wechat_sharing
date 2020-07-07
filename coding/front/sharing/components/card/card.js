//Component Object
Component({
  properties: {
    item:{
      type:Object,
      value:{}
    },

  },
  data: {
    isActive: false
  },
  methods: {
    trigger () {
      this.setData({
        isActive: !this.data.isActive
      })
    }
  },
  created: function(){

  },
  attached: function(){

  },
  ready: function(){

  },
  moved: function(){

  },
  detached: function(){

  },
});