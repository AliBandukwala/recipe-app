import useAppStore from "../../../global_store/useAppStore"
import { Recipe } from "../../../models/recipe_model"
import Card from "../../../ui_library/card/card"

const SelectedItemsList = () => {
    const { selectedRecipes } = useAppStore()
    return(
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
    )
}

export default SelectedItemsList