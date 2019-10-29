<template>
  <f7-page>
    <f7-block-title>Perfil de usuario</f7-block-title>
    <f7-block>
        <small>{{user.name +' '+ user.ape}}</small>
    </f7-block>
    <f7-block-title>Opciones</f7-block-title>
    <f7-list>
      <f7-list-item link="/About/" title="Privacidad" panel-close></f7-list-item>
      <f7-list-item link="/form/" title="Notificaciones" panel-close></f7-list-item>
      <f7-list-item link="/inicio/" title="Configuraciones" panel-close></f7-list-item>
    </f7-list>
    <f7-block>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse a faucibus lectus.</p>
    </f7-block>
     <f7-list>
      <f7-link @click="Salir" text-color="red" class="item-divider">Cerrar Sesión</f7-link>
    </f7-list>
  </f7-page>
</template>
<script>
import Auth from '../../auth'
export default {
  components: {},
  data(){
    return {
      user: localStorage.getItem('user') != null ? JSON.parse(localStorage.getItem('user')) : ''
    }
  },
  methods:{
    Salir: () => {
      Auth.signOut(this)
      location.reload()
    }
  }
};
</script>
