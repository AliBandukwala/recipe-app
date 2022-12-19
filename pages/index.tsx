import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useAppStore from '../global_store/useAppStore'
import { convertDataToRecipe, Recipe } from '../models/recipe_model'
import { useRouter } from 'next/router'
import CustomButton from '../ui_library/custom_button/custom_button'
import Card from '../ui_library/card/card'
import AppBar from '../ui_library/appbar/appbar'

export async function getServerSideProps() {
  const res = await fetch(`https://code-challenge-mid.vercel.app/api/recipes`)
  const data = await res.json()

  return { props: { recipes: convertDataToRecipe(data.recipes) } }
}

interface IHomeProps {
  recipes: Recipe[],
}

export default function Home({recipes}: IHomeProps) {
  const router = useRouter()
  const { selectedRecipes, onSelectRecipe } = useAppStore()

  return (
    <>
      <Head>
        <title>Recipe App</title>
        <meta name="description" content="Recipe App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <AppBar 
          title='Marley Spoon' 
          actions={
            <CustomButton 
              label={`Cart: ${selectedRecipes.length}`}  
              disabled={selectedRecipes.length < 2}
              handleOnClick={() => router.push('/user_details')} 
            />
          }
        />

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 m-4' >
        {
            recipes.map((item: Recipe) => {
                return(
                  <Card 
                    style={{display:"flex", flexDirection:"column", justifyContent: "space-between"}} 
                    key={item.id}
                    title={item.title}
                    subtitle={item.subtitle}
                    img={item.img}
                    action={
                      <div className='flex items-center self-end mt-4'>
                        <label className='text-sm font-semibold mr-1' htmlFor={item.id}>Add To Cart</label>
                        <input  
                          id={item.id}
                          type='checkbox' 
                          checked={selectedRecipes.find((r) => r.id === item.id) !== undefined} 
                          onChange={() => onSelectRecipe(item)}  
                        />
                      </div>
                    }
                  />
                )
            })
        }
        </div>
      </main>
    </>
  )
}
