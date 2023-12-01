import { ref } from 'vue';
import * as Realm from "realm-web";
export const loginAuthentication = (router) =>{
    const email = ref("")
    const password = ref("")
    const error = ref({})
    const app = Realm.getApp("workout_final-jogzu");

    const authenticateUser = async () =>{
        try{
            console.log("start")
            const credentials = Realm.Credentials.emailPassword(
                email.value,
                password.value
            )
            console.log("credentials")
            try{
                const user = await app.logIn(credentials)
                console.log("logged in")
                if(router){
                    router.replace({path: `/`})
                }else{
                    console.log('tangina mo')
                }
            }catch(err){
                console.error("Failed logging in", err)
            }
        }catch (err){
            console.error('Error gago', err)
        }
    }

    return {
        //properties
        email,
        password,
        error,
        //method
        authenticateUser
    }
}