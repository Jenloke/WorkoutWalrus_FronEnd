import { ref } from 'vue';
import * as Realm from "realm-web";
import { useRouter } from 'vue-router';

export const registerUser = (router) =>{
    const email = ref("")
    const username = ref("")
    const password = ref("")
    const birthday = ref(Date)
    const name = ref("")
    const height = ref(0)
    const weight = ref(0)
    const error = ref({})
    const app = Realm.getApp({id: 'workout_final-jogzu'})

    const signUp = async () =>{
        try{
            await app.emailPasswordAuth.registerUser({ email: email.value, password: password.value });
            console.log("user authenticated")

            await app.logIn(Realm.Credentials.emailPassword(email.value, password.value))
            console.log("user logged in")
            
            const user = app.currentUser
            if(user && user.isLoggedIn){
            const mongodb = app.currentUser.mongoClient("mongodb-atlas")
            const collection = mongodb.db("workoutwalrus").collection("users")
            console.log("mongo connection established")
            
            const response = await collection.insertOne({
                userID: app.currentUser.id,
                name: name.value,
                birthday: birthday.value,
                username: username.value,
                height: height.value,
                weight: weight.value,
                totalCalBurned: 0,
                toDo: []
            })
            console.log(response)
            }

            console.log('User signed up successfully')
            const router = useRouter()
            if(router){
                router.replace({path: `/login`})
            }else{
                console.log('tangina mo')
            }
        }catch (error){
            console.error('Error gago', error)
        }
    }

    return {
        email,
        username,
        password,
        birthday,
        name,
        height,
        weight,
        error,
        //methods
        signUp
    }
}