import React from 'react'
import { LoginUser ,SignOut} from '../store/actions/authActions'
import { connect } from 'react-redux'


class Login extends React.Component {
    render() {
        return ( 
            <button onClick={() => {
                this.props.login();
            }}>
                login
            </button> 
        )
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        login: () => dispatch(LoginUser()),
        logout : ()=>dispatch(SignOut())
    }
}
export default connect(null, mapDispatchtoProps)(Login)

/*
"{"user":{"uid":"oqJJgup9EvRjBhrSrg3DbcTfrDC2","displayName":"Achuth hadnoor","photoURL":"https://lh3.googleusercontent.com/a-/AOh14Gjgu75b0jZqLMi2Q6EeXKSO0E0bk795Ah9AHji8tDU=s96-c","email":"achuth.hadnoor123@gmail.com","emailVerified":true,"phoneNumber":null,"isAnonymous":false,"tenantId":null,"providerData":[{"uid":"112712760224600574907","displayName":"Achuth hadnoor","photoURL":"https://lh3.googleusercontent.com/a-/AOh14Gjgu75b0jZqLMi2Q6EeXKSO0E0bk795Ah9AHji8tDU=s96-c","email":"achuth.hadnoor123@gmail.com","phoneNumber":null,"providerId":"google.com"}],"apiKey":"AIzaSyCWvbVoWV_1garK_RwqxLIwonrzoTwgGuw","appName":"[DEFAULT]","authDomain":"coder-2e6f6.firebaseapp.com","stsTokenManager":{"apiKey":"AIzaSyCWvbVoWV_1garK_RwqxLIwonrzoTwgGuw","refreshToken":"AG8BCneT0LQ1GCnh0th15Bvd-4nwXMOZbGrybQKPohMXGrrErVGgjexjF6TKdKLAeFtGKy26JHc8o5L0vMpCkdtAolQpJ9aywsnaf8WTMz0jy9SG6YCNbjQ0uSYGSF__8xO7bwfYmtLHB9lIePp4_f_9zGJjTIjQNh48GAroQzgAtmPrzg5V9vB4MMOJ1P3lZ9f53FSNEziA2GgGlfrd3-mDMptbfaypRFSEo7fszzGsMFaAt5EWLUAFESU0mTyn2SyEZFXboSeLnYkCcaOA0q-LRVGipu9_zJM5XKOxq_Fy_i1hE78OEseq8vM_B8ASfTxO7ZHMsl9WL6EjfEJV1xYNRGSIhfSz2cA1b4Uy0kyXTDM7CtlaoZ8owkykNwVutGG3QQNgoF0ocHFG5sMGCOs6aTyDLRfVl8n287Ni4cbpra28lBQRfyM","accessToken":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjJmOGI1NTdjMWNkMWUxZWM2ODBjZTkyYWFmY2U0NTIxMWUxZTRiNDEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQWNodXRoIGhhZG5vb3IiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2pndTc1YjBqWnFMTWkyUTZFZVhLU08wRTBiazc5NUFoOUFIamk4dERVPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2NvZGVyLTJlNmY2IiwiYXVkIjoiY29kZXItMmU2ZjYiLCJhdXRoX3RpbWUiOjE2MDUwMjQwMDUsInVzZXJfaWQiOiJvcUpKZ3VwOUV2UmpCaHJTcmczRGJjVGZyREMyIiwic3ViIjoib3FKSmd1cDlFdlJqQmhyU3JnM0RiY1RmckRDMiIsImlhdCI6MTYwNTAyNDAwNSwiZXhwIjoxNjA1MDI3NjA1LCJlbWFpbCI6ImFjaHV0aC5oYWRub29yMTIzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTEyNzEyNzYwMjI0NjAwNTc0OTA3Il0sImVtYWlsIjpbImFjaHV0aC5oYWRub29yMTIzQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.raYDyCTuEKC37C0VU_LVR1t8DWojRUhoo0ceB9585qR6pHbYP6P3Qet_TdgY_MlWL6oIn9V4icxlZ3DQtYFIjAO7jHIGEX5U-RajPpFSlgNsFqtZbL1FyvYGtdix3Udbksp5P7fIQ-DVigKEnAi_U8Wp8CxxjkxXs4UatwhVP9P0ZrwLp3vD79pexc24pv5kFo6cIdCuXVep3zi79XXPfg3yA_A9xiM2MOWJ31lU38WIm2sNJIISG-dies9lNiYANR7j8hC_EkDxMRDLr6rGniYEco15VD3GydegC75K6sCxcdYSAP7B27GPTfBy1-nGtdjEuCu9ty-ptFaOJ2xHqg","expirationTime":1605027605000},"redirectEventId":null,"lastLoginAt":"1605024005069","createdAt":"1604477840765","multiFactor":{"enrolledFactors":[]}},"credential":{"providerId":"google.com","signInMethod":"google.com","oauthIdToken":"eyJhbGciOiJSUzI1NiIsImtpZCI6ImYwOTJiNjEyZTliNjQ0N2RlYjEwNjg1YmI4ZmZhOGFlNjJmNmFhOTEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiODU0MDY5ODY3MDAzLWlrZHU0OTA4cHVxdjNjdDZmYWdkYjhubjU0bDNxcTR2LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiODU0MDY5ODY3MDAzLWlrZHU0OTA4cHVxdjNjdDZmYWdkYjhubjU0bDNxcTR2LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTEyNzEyNzYwMjI0NjAwNTc0OTA3IiwiZW1haWwiOiJhY2h1dGguaGFkbm9vcjEyM0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6ImZ5MU5wTVlPckswWkc3SnlpRDZLTWciLCJpYXQiOjE2MDUwMjQwMDQsImV4cCI6MTYwNTAyNzYwNH0.sGiEmD0aWeJUo8SFfI0ukJWiTg5U8AJZUUVyEKJTtf-u2jZC5N6e7zvBniP6obUUv1eiSPNaJySOfEZ49j4e8SOTBdjwJvtd-Jid3yPKCJRa-T0tDguefSf6gnKMTC7DxuEPt0ri50vaPR5yDGuEzb2lPgf9c1noTQk9KApqt3xPV3tikXXUeh-xjKE-xLOU82630qvqGaAYNxH1IpIDPA044iuOP7ixakpChIaOQQK1nvcNd2Wds-wTsPcMD0Ew9Eqs9uswIjt47tR_oOJoMXJGpjr88cjmf__pzBDSOGSBXz1Bh1C7HmcWod-30_-1DsFidwuvAJcWuajnfc6X5Q","oauthAccessToken":"ya29.A0AfH6SMCmO-GRgA4dswzlVgIHHxipytLxuJ27XAk_cI09fEJYmhJXTw4pUWREUXWO2wa_ABdwKVnuvBOEdjEHQKmE1HcqkhhfFwDM52Ol-WVWG-BzAOtyRNU5xQRodsnj6RupkpOVe5WX4FXAOtjwg10WOG8vgOl1aqFPXaPXYjBG"},"additionalUserInfo":{"providerId":"google.com","isNewUser":false,"profile":{"name":"Achuth hadnoor","granted_scopes":"https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid","id":"112712760224600574907","verified_email":true,"given_name":"Achuth","locale":"en","family_name":"hadnoor","email":"achuth.hadnoor123@gmail.com","picture":"https://lh3.googleusercontent.com/a-/AOh14Gjgu75b0jZqLMi2Q6EeXKSO0E0bk795Ah9AHji8tDU=s96-c"}},"operationType":"signIn"}"
*/