// const PROTOCOLO = ['http://', 'https://']
// DIRECCION = ['localhost', '127.0.0.1', '10.0.1.48']
// PUERTO = ['8081', '4000']

// URL = PROTOCOLO + DIRECCION + PUERTO

// Mode development and no SSL:
// URL = http://localhost:8081
// URL = http://127.0.0.1:8081
// URL = http://10.0.1.48:8081

//Mode Production and SSL:
// URL = https://www.domain.com:4001


let PROTOCOLO = 'https://'
let IPs = ['localhost', '127.0.0.1', '10.0.1.48','192.168.1.13'] // 10.0.1.23
let PORTs = ['8081','4000'] // 8081

let HOST = 'www.pdsc.ml'
// Buscamos en la lista de IPs si coincide con la IP actual
IPs.forEach(IP => {
  if (location.hostname == IP) {
    // Si coincide, asignamos esa IP o DOMINIO como HOST
    HOST = IP
  }
})
let PORT =':443'
PORTs.forEach(P => {
  if (location.port == P) {
    PORT = ':4000'
    PROTOCOLO = 'http://'
  }
})

const URL = PROTOCOLO+HOST+PORT
const LOGIN_URL = URL+"/api/login"
const SIGNIN_URL = URL+"/api/signin"

export default {
  URL,
  HOST,
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
