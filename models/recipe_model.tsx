interface TypeName {
    __typename: string
}

export interface Recipe {
    id: string,
    title: string,
    subtitle: string,
    img: string,
}

// converts incoming data to Recipe, can improve type safety by creating an interface for Data
export const convertDataToRecipe = (data: any[]): Recipe[] => {
    let recipes: Recipe[] = []
    for(let i = 0; i < data.length; i++){
        let dataItem = data[i]
        let recipeObj: Recipe = {
            id: dataItem['id'],
            title: dataItem['title'],
            subtitle: dataItem['subtitle'],
            img: dataItem['image']['url']
        }
        recipes.push(recipeObj)
    }
    return recipes
}