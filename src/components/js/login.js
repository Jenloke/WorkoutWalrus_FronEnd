import { ref } from 'vue'
import * as Realm from "realm-web"

export const loginAuthentication = (router) =>{
    const email = ref('')
    const password = ref('')
    const error = ref({})
    const app = Realm.getApp('workout_final-jogzu');

    const authenticateUser = async () => {
        try {
            const credentials = Realm.Credentials.emailPassword(
                email.value,
                password.value
            )

            try {
                await app.logIn(credentials)

                if(router) {
                    router.replace({path: `/home`})
                } else {
                    console.log('Routing Error')
                }

            } catch(error) {
                console.error('Failed logging in (Login Error): ', error)
            }
        
        } catch(error) {
            console.error('Authentication Error: ', err)
        }
    }

    return {
        email,
        password,
        error,
        authenticateUser
    }
}