import { useRouter } from 'next/router'
import { useState } from 'react'
import useAppStore from '../../../global_store/useAppStore'
import CustomButton from '../../../ui_library/custom_button/custom_button'
import styles from '../../../styles/user_details.module.css'

const postURL: string = 'https://code-challenge-mid.vercel.app/api/submit'

const UserDetailsForm = () => {
    const { 
        firstname, 
        email, 
        handleUserInfoChange, 
        getResponseBody, 
    } = useAppStore()
    const router = useRouter()

    const [sending, setSending] = useState<boolean>(false)

    const handleOnSubmit = async () => {
        setSending(true)

        let resp = await fetch(postURL, {
            method: 'POST', 
            mode: 'no-cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(getResponseBody())
        })
        /*
            got CORS error, thus added mode: no-cors to fetch,
            after that, the response retured is empty with status 0,
            thus, no response failure check implemented
        */
        router.push('/confirmation')  
        setSending(false)
    }
    
    return(
        <form 
            className="flex flex-col flex-1 md:items-center p-6 md:p-3" 
            onSubmit={(e) => e.preventDefault()} 
        >
            <p className="font-semibold text-xl mb-2" >User Details</p>
            <input 
                className={styles.input}
                style={{marginBottom: "12px"}}
                id="firstname"
                placeholder="First Name" 
                type="text" 
                value={firstname} 
                onChange={(e) => handleUserInfoChange(e) } 
            />

            <input  
                className={styles.input} 
                style={{marginBottom: "12px"}}
                id="email" 
                type='email' 
                placeholder="Email"
                value={email} 
                onChange={(e) => handleUserInfoChange(e) }
            />
            
            <CustomButton 
                label={sending ? 'Sending...' : 'Confirm'}
                disabled={ firstname.length === 0 || email.length === 0 || sending }
                handleOnClick={handleOnSubmit} 
                style={{ alignSelf: 'center', }}
            />
        </form>
    )
}

export default UserDetailsForm