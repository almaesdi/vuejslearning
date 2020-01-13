<template>
  <span :class="cssClasses"></span>
</template>

<script>

  export default {
      props: ['img'],
      computed: {
          cssClasses: function(){
              return 'glyphicon glyphicon-'+this.img;
          }
      },
  }

</script>
