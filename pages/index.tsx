import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useAppStore from '../global_store/useAppStore'
import { convertDataToRecipe, Recipe } from '../models/recipe_model'
import { useRouter } from 'next/router'

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
        {
            recipes.map((item: Recipe) => {
                return(
                  <div style={{marginBottom: 16}} className={styles.card} key={item.id}>
                    <input 
                      className='mr-4' type='checkbox' 
                      checked={selectedRecipes.find((r) => r.id === item.id) !== undefined} 
                      onChange={() => onSelectRecipe(item)}  
                    />
                    <span className='text-lg font-semibold'>{item.title}</span>
                  </div>
                )
            })
        }
        <button 
          className={styles.checkoutBtn}
          onClick={() => router.push('/user_details')} 
          disabled={ selectedRecipes.length < 2 }
        >
          Checkout
        </button>
      </main>
    </>
  )
}
