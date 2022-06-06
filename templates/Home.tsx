import React, { useEffect, useState } from 'react'
import { Background } from '../components/atoms/Background'
import { Header } from '../components/molecules/Header'
import { FactsSection } from '../components/organisms/factsSection'
import { ListSection } from '../components/organisms/listSection'
import { getCategories, getFact, getFactByCategory, getFactByQuery } from '../pages/api/hello'

interface Fact {
  icon_url: string
  id: string
  url: string
  value: string
  updated_at: string
}

const HomeTemplate = () => {

  const [factOnBanner, setFactOnBanner] = useState<Fact>()
  const [recordedFacts, setRecordedFacts] = useState<Fact[]>([])
  const [defaultFact , setDefaultFacts] = useState<string>()
  const [categories, setCategories] = useState<string[]>()

  

  useEffect(() => {
    const getListCategories = async () => {
      const categoriesList = await getCategories()
      setCategories(categoriesList)
    }

    const getDefaultFact = async () => {
      const fact = await getFact()
      setDefaultFacts(fact.value)
      setRecordedFacts([...recordedFacts, fact])
    }

    getDefaultFact()
    getListCategories()
  },[])

  const getANewFact = async () => {
    const fact = await getFact()
    setFactOnBanner(fact)
    setRecordedFacts([...recordedFacts, fact])
  }

  const getANewFactByCategory = async (category: string) => {
    const fact = await getFactByCategory(category)
    setFactOnBanner(fact)
    setRecordedFacts([...recordedFacts, fact])
  }

  const getANewFactByQuery = async (query: string) => {
    if (!query || query.length < 3) return null

    const facts = await getFactByQuery(query)
    setFactOnBanner(facts.result[0])

    setRecordedFacts([...recordedFacts, ...facts.result]) 
  }

  return (
    <Background>

      <header className=' w-full top-0 left-0 right-0 z-10'>
        <Header/>
      </header>

        <div className="w-screen h-[500px] px-[5%] bg-orange-200">
            <FactsSection 
              categories={categories} 
              newFacts={getANewFact}
              factsByCategory={getANewFactByCategory}
            >
                {factOnBanner?.value || defaultFact}
            </FactsSection>
        </div>

        <div className="w-screen px-[5%]">
          <ListSection searchClick={getANewFactByQuery} facts={recordedFacts}/>
        </div>
    </Background>
  )
}

export { HomeTemplate }