import { useRouter } from "next/router"
import useAppStore from "../../global_store/useAppStore"
import { Recipe } from "../../models/recipe_model"

const UserInfo = () => {
    const { selectedRecipes, firstname, email, handleUserInfoChange  } = useAppStore()
    const router = useRouter()

    return(
        <>
            {
                selectedRecipes.map((recipe: Recipe) => {
                    return <p key={recipe.id} >{recipe.title}</p>
                })
            }
            <form className="flex flex-col" onSubmit={(e) => { e.preventDefault(); router.push('/confirmation') }} >
                <label htmlFor="firstname">First Name</label>
                <input 
                    className="w-1/4 border-gray-500 rounded-lg" 
                    id="firstname" 
                    type="text" 
                    value={firstname} 
                    onChange={(e) => handleUserInfoChange(e) } 
                />

                <label htmlFor="email">Email</label>
                <input className="w-1/4 border-gray-500 rounded-lg" id="email" type='email' value={email} onChange={(e) => handleUserInfoChange(e) }/>
                
                <button className="btn btn-blue">
                    Confirm
                </button>
            </form>
        </>
    )
}

export default UserInfo