<template>
  <f7-page no-toolbar no-navbar no-swipeback login-screen>
    <f7-block class="text-align-center">
      <img src="images/logo-cuadrado.png" alt="Logo de phoenix" width="150px">
    </f7-block>
    <f7-login-screen-title>Registro de Usuarios</f7-login-screen-title>
    <f7-list form>
      <f7-list-item-row>
        <f7-list-input
          label="Nombre"
          type="text"
          placeholder="Nombre"
          :value="params.name"
          @input="params.name = $event.target.value"
        ></f7-list-input>
        <f7-list-input
          label="Apellido"
          type="text"
          placeholder="Apellido"
          :value="params.ape"
          @input="params.ape = $event.target.value"
        ></f7-list-input>
      </f7-list-item-row>
      <f7-list-input
        label="Correo Electronico"
        type="email"
        placeholder="Correo Electronico"
        :value="params.email"
        @input="params.email = $event.target.value"
      ></f7-list-input>
      <f7-list-item-row>
        <f7-list-input
          label="Contraseña"
          type="password"
          placeholder="Contraseña"
          :value="params.password"
          @input="params.password = $event.target.value"
        ></f7-list-input>
        <f7-list-input
          label="Confirmar Contraseña"
          type="password"
          placeholder="Confirmar Contraseña"
          :value="params.password_confirmation"
          @input="params.password_confirmation = $event.target.value"
        ></f7-list-input>
      </f7-list-item-row>
      <f7-list-item-row>
        <f7-list-item>
          <small>
            <f7-checkbox 
              :value="params.tyc" 
              @change="params.tyc = $event.target.value"
            ></f7-checkbox> Acepto los Terminos y Condiciones
          </small>
        </f7-list-item>
      </f7-list-item-row>
      <f7-button @click="Registrarse" class="margin-horizontal margin-top" raised color="black">Registrarse</f7-button>
    </f7-list>
    <f7-list class="padding-top">
      <f7-list-button @click="$f7router.navigate('/')" class="no-padding">Iniciar Sesión</f7-list-button>
      <f7-block-footer>¿Ya estas registrado?.<br>Inicia sesión con tu cuenta.</f7-block-footer>
    </f7-list>
  </f7-page>
</template>

<script>
  import Auth from '../../auth'
  export default {
    data() {
      return {
        params: {
          name: '',
          ape: '',
          email: '',
          password: '',
          password_confirmation: '',
          tyc: true,
        }
      };
    },
    methods: {
      Registrarse: function(e){
        // LOGICA PARA REGISTRAR UN USUARIO
        e.preventDefault();
        const self = this
        const app = self.$f7
        const router = self.$f7router
        
        if (this.validarCampos()) {
          if (this.validarEmail()) {
            if (this.validateMinLength()) {
              if (this.validateConfirmationPassword()) {
                
                Auth.signin(this, this.params).then((resp) => {
                  console.log(resp.status)
                  console.log(resp.data)
                  console.log(Object.keys(resp))
                  router.navigate('/registro-exitoso/')
                  console.log('DEBIO IR A REGISTRO_EXITOSO')
                }).catch((error) => {
                  app.dialog.alert("OCURRIO UN ERROR, ENTRO POR CATCH");
                  console.log(Object.keys(error))
                  console.log(error)
                  console.log(error.request)
                  console.log(error.response)
                  console.log(error.isAxiosError)
                })
              }else{
                console.log("El password no coincide")
                app.dialog.alert('El password no coincide')
              }
            }else{
              console.log("El password debe tener min 8 characteres")
              app.dialog.alert('El password debe tener min 8 characteres')
            }
          }else{
            console.log("Email invalido")
            app.dialog.alert('Email Invalido')
          }

        }else{
            console.log("Campos vacios")
            app.dialog.alert('Campos vacios')
        }
      },
      validarCampos: function() {
        return (this.params.name != "" && this.params.ape != "" && this.params.email != "" && this.params.password != "" && this.params.password_confirmation != "") ? true : false
      },
      validarEmail: function() {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(this.params.email)
      },
      validateMinLength(){
        return this.params.password.trim().length > 7 ? true : false
      },
      validateConfirmationPassword(){
        return (this.params.password == this.params.password_confirmation) ? true : false
      }
    },
  };
</script>