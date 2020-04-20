<template>
  <div>
    <bar-top
    :show-refesh-icon="false"
    :show-return-icon="false"
    :show-write-icon="false">
    </bar-top>
    <div class="pagethree-button">
        <my></my>
    </div>
    <bar-bottom></bar-bottom>
    <alert></alert>
  </div>
</template>

<script>
import barTop from '../components/barTop.vue';
import my from '../components/my.vue';
import barBottom from '../components/barBottom.vue';
import alert from '../components/alert.vue';

export default {
  components: {
    'bar-top': barTop,
    'my':my,
    'alert': alert,
    'bar-bottom': barBottom,
  },
  methods: {

  }
}
</script>

<style>
.pagethree-button {
  margin-top: 80px;
}
</style>
