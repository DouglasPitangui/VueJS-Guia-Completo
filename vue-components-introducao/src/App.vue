<template>
  <div>
    <AppHeader/>
    <AppContador/>
  </div>
</template>
<script>

import AppContador from './components/AppContador.vue'
import AppHeader from './components/AppHeader.vue'

export default {
  components:{
    AppContador,
    AppHeader
    //AppHeader : AppHeader poderia ser assim tbn
  }  
}
</script>