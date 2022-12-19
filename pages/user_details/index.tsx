import { useRouter } from "next/router"
import { MouseEventHandler } from "react"
import useAppStore from "../../global_store/useAppStore"
import { Recipe } from "../../models/recipe_model"
import styles from '../../styles/user_details.module.css'
import AppBar from "../../ui_library/appbar/appbar"
import Card from "../../ui_library/card/card"
import CustomButton from "../../ui_library/custom_button/custom_button"

const UserInfo = () => {
    const { selectedRecipes, firstname, email, handleUserInfoChange  } = useAppStore()
    const router = useRouter()

    const handleOnSubmit = () => {
        if(firstname.length === 0 || email.length === 0){

        }
        else{
            router.push('/confirmation')
        }
    }

    return(
        <div className="flex flex-col h-screen" >
            <AppBar title='Checkout' />
            <div className=" flex flex-col md:flex-row" >
                <div className="flex flex-col flex-initial p-6 md:p-3 overflow-y-auto" >
                    <p className="font-semibold text-xl mb-2" >Selected Items</p>
                    {
                        selectedRecipes.map((item: Recipe, index: number) => {
                            return(
                                <Card 
                                    style={{display:"flex", flexDirection:"column", justifyContent: "space-between", marginBottom:"12px"}} 
                                    key={item.id}
                                    title={`${index+1}.  `+item.title}
                                />
                            )
                        })
                    }
                </div>
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
                        label='Confirm'
                        disabled={ firstname.length === 0 || email.length === 0 }
                        handleOnClick={handleOnSubmit} 
                        style={{ alignSelf: 'center', }}
                    />
                </form>
            </div>
        </div>
    )
}

export default UserInfo