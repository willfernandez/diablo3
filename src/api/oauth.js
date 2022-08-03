// Traemos el método post de 'axios'
import { post } from 'axios'

// Cogemos los datos de nuestra cuenta de Blizzard
// 🔥 Recuerda que debes usar tus datos a la hora de hacer las llamadas a las APIs
// 🔥 Como dice la documentación, tienes un máximo de llamadas por segundo y por hora a la API. 
// 🔥 Estos datos deberían ser privados
const clientId = '3a4b9f4504d54c49b2029c60d1c98b29'
const clientSecret = 'jmrr8dDjqPbqGAeqSpxzNo4WGjx5wnOQ'

// API URL para hacer oauth
const region = 'eu'
const API_URL = `https://${region}.battle.net/oauth/token`