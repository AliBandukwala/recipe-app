import useAppStore from "../../global_store/useAppStore"
import CustomButton from "../../ui_library/custom_button/custom_button"
import { useRouter } from "next/router"
import AppBar from "../../ui_library/appbar/appbar"

const Confirmation = () => {
    const router = useRouter()
    const {firstname, email, resetStateToDefault} = useAppStore()

    return(
        <>
            <AppBar title="Confirmation" />
            <div className="flex flex-col justify-center items-center" >
                <p className="text-3xl font-bold mt-6 mb-3" >ORDER CONFIRMED!</p>
                <p className="my-2" > 
                    Thank you for your order 
                    <span className="font-semibold ml-1">{firstname}</span> 
                </p>
                <p className="mt-2 mb-6">
                    An order confirmation email is sent to 
                    <span className="font-semibold ml-1">{email}</span>
                </p>
                <CustomButton 
                    label="Keep Browsing" 
                    handleOnClick={() => { resetStateToDefault(); router.push('/'); }}  
                />
            </div>
        </>
    )
}

export default Confirmation