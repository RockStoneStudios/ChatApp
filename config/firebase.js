import {initializeApp,getApps} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';



const firebaseConfig = {
    apiKey : 'AIzaSyA5QnamUkdE6tVIhjFCnrIrNSjQ1Uwt43s',
    authDomain : 'AUTH_DOMAIN=zorrapp-7866d.firebaseapp.com',
    projectId : 'zorrapp-7866d',
    storageBucket : 'zorrapp-7866d.appspot.com',
    appId : '1:368352768268:web:4082b64b97ace5a8ea5929'

}
 if(getApps.length === 0)
{
    initializeApp(firebaseConfig);
}
export const auth = getAuth();
export const database = getFirestore();