<template>
  <f7-page no-toolbar no-navbar no-swipeback login-screen>
    <f7-block class="text-align-center">
      <img src="images/logo-cuadrado.png" alt="Logo de phoenix" width="150px">
    </f7-block>
    <f7-login-screen-title>Iniciar Sesión</f7-login-screen-title>
    <f7-list form>
      <f7-list-input
        label="Correo Electronico"
        type="email"
        placeholder="Correo Electronico"
        :value="params.email"
        @input="params.email = $event.target.value"
        required
        validate
        error-message="Debe ingresar un correo electronico"
        autocomplete
        clear-button
        @keyup.native.enter="Ingresar"
      ></f7-list-input>
      <f7-list-input
        label="Contraseña"
        type="password"
        placeholder="Contraseña"
        :value="params.password"
        @input="params.password = $event.target.value"
        required
        validate
        clear-button
        @keyup.native.enter="Ingresar"
      ></f7-list-input>
      <f7-button @click="Ingresar" class="margin-horizontal margin-top" raised color="black">Ingresar</f7-button>
    </f7-list>
    <f7-list class="padding-top">
      <f7-list-button @click="$f7router.navigate('/registrar-usuario/')" class="no-padding">Registrarse</f7-list-button>
      <f7-block-footer>¿Aun no esta registrado?.<br>Registrate para ser parte de nuestra comunidad.</f7-block-footer>
    </f7-list>
  </f7-page>
</template>


<script>
  import Auth from '../../auth'

  export default {
    data() {
      return {
        params: {
          email: '',
          password: '',
        }
      };
    },
    methods: {
      camposValidos(){
        return this.params.email != '' && this.params.password != '' ? true : false
      },
      formatoEmail(){
        var re = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(this.params.email)
      },
      Ingresar(){
        const self = this
        const app = self.$f7
        const router = self.$f7router

        if(self.camposValidos()){
          if (self.formatoEmail()) {
            Auth.login(this, this.params).then( resp => {
              if (resp.status === 201) {
                // almacenamos los datos JSON de la sesion
                let data = resp.data.data
                let allname = data.name + '' + data.ape
                localStorage.setItem('id_token', data.id)
                localStorage.setItem('v_username', allname)
                localStorage.setItem('v_email', data.email)
        
                // AQUI VA EL TOKEN NO EL ID (ESTO VIENE DE PHOENIX SERVER)
                window.userToken = data.token
                localStorage.setItem('token', data.token)
                localStorage.setItem('user', JSON.stringify(data))
                
                console.log(data);
                location.reload()
              }else{
                // devolvemos error JSON
                console.log(resp.data.errors)
                app.dialog.alert(resp.data.errors)
              }
            }).catch(error => {
              app.dialog.alert(error)
            })
          }else{
            app.dialog.alert('Email Invalido')
          }
        }else{
          app.dialog.alert('Campos Vacios')
        }
      }
    },
    mounted(){
      console.log(location.hostname)
      localStorage.removeItem('user')
      localStorage.clear()
    }
  }
</script>