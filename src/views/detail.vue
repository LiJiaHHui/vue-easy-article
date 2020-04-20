<template>
    <div>
        <bar-top
        :show-refesh-icon="false"
        :show-return-icon="true"
    :show-write-icon="false"
        ></bar-top>
    </div>
</template>
<script>
import barTop from '../components/barTop'
export default {
    components:{
        'bar-top':barTop,
        'text-content':Text,
    }
}
</script>