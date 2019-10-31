const PROTOCOLO = 'https://'
let IPs = ['localhost', '127.0.0.1', '10.0.1.48'] // 10.0.1.23
let PORTs = ['4000'] // 8081
let HOST = 'www.pdsc.ml'
IPs.forEach(IP => {
  if (location.hostname == IP) {
    HOST = IP
  }
})
let PORT =':443'
PORTs.forEach(P => {
  if (location.port == P) {
    PORT = ':4000'
  }
})
const URL = HOST+PORT
const LOGIN_URL = PROTOCOLO+URL+"/api/login"
const SIGNIN_URL = PROTOCOLO+URL+"/api/signin"

export default {
  URL,
  // Datos de usuario local
  user:{
    id: Number.parseInt(localStorage.getItem('id_token')),
    name: localStorage.getItem('v_username'),
    email: localStorage.getItem('v_email'),
    authenticated: !!localStorage.getItem('id_token')
  },
  // Iniciar Sesion
  login (context, creds, redirect) {
    
    PORTs.forEach(PORT => {
      console.log(location.port == PORT)
    })
    return context.axios.post(LOGIN_URL, creds)
  },
  // Registrar Usuario
  signin(context, creds, redirect){
    return context.axios.post(SIGNIN_URL, creds)
  },
  // Cerrar Sesion
  signOut(context){
    // Limpiamos los datos locales almacenados
    localStorage.removeItem('id_token')
    localStorage.removeItem('v_username')
    localStorage.removeItem('v_email')
    localStorage.removeItem('token')
    // window.userToken = null
    location.reload()
  }
}
