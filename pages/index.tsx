import Head from 'next/head'
import { useState } from 'react'
import { HomeTemplate } from '../templates/Home'
import { Fact } from '../types/fact'
import { getFact, getFactByCategory, getFactByQuery } from './api'


interface HomeProps {
  exploreFact: Fact
  factsCategories: string[]
}

const Home = ({exploreFact, factsCategories}: HomeProps) => {
  const [factBanner, setFactBanner] = useState<Fact>()
  const [recordedFacts, setRecordedFacts] = useState<Fact[]>([exploreFact])

  const getANewFact = async () => {
    const fact = await getFact()
    setFactBanner(fact)
    setRecordedFacts([...recordedFacts, fact])
  }

  const getANewFactByCategory = async (category: string) => {
    const fact = await getFactByCategory(category)
    setFactBanner(fact)
    setRecordedFacts([...recordedFacts, fact])
  }

  const getANewFactByQuery = async (query: string) => {
    if (!query || query.length < 3) return null

    const facts = await getFactByQuery(query)
    setFactBanner(facts.result[0])

    setRecordedFacts([...recordedFacts, ...facts.result]) 
  }

  return (
    <div>
      <Head>
        <title>Chuck Facts</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeTemplate 
        exploreFact={exploreFact}
        factsCategories={factsCategories}
        getANewFact={getANewFact}
        getANewFactByCategory={getANewFactByCategory}
        factBanner={factBanner}
        getANewFactByQuery={getANewFactByQuery}
        recordedFacts={recordedFacts}
      />
    </div>
  )
}

export const getStaticProps = async () => {
  const exploreFact = await fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => response.json())

  const factsCategories = await fetch('https://api.chucknorris.io/jokes/categories')
    .then((response) => response.json())

  return {
    props: {
      exploreFact,
      factsCategories,
    }
  }
}

export default Home
