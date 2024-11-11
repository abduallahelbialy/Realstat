<template>
    <div :style="{
      display: [
        '/',
        '/login',
        '/forget',
        '/otpe',
        '/Newpass',
        '/Newaccount',
        '/Allnot',
        '/chat',
        '/Serchrol',
        '/Favouirt',
        '/Steppe',
      ].includes(currentPath)
        ? 'none'
        : '',
    }">
سسس
    </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

    export default {
     setup(){
       const route = useRoute();
          const currentPath = ref(route.path);

          watch(
          () => route.path,
          (newPath) => {
            currentPath.value = newPath;
          }
        );
        return{
                currentPath,

        }
     }

    }
</script>

<style  scoped>

</style>
