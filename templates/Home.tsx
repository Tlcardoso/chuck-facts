import React, { useState } from 'react'
import { Background } from '../components/atoms/Background'
import { Footer } from '../components/molecules/Footer'
import { Header } from '../components/molecules/Header'
import { FactsSection } from '../components/organisms/factsSection'
import { ListSection } from '../components/organisms/listSection'
import { Fact } from '../types/fact'


interface HomeTemplateProps {
  exploreFact: Fact
  factsCategories: string[]
  getANewFact: () => void
  getANewFactByCategory: (category: string) => void
  factBanner?: Fact
  getANewFactByQuery: (query: string) => void
  recordedFacts: Fact[]
}

const HomeTemplate = ({
      exploreFact, 
      factsCategories, 
      getANewFact, 
      getANewFactByCategory, 
      factBanner, 
      getANewFactByQuery, 
      recordedFacts}: HomeTemplateProps) => {

  return (
    <Background>

      <header className=' w-full top-0 left-0 right-0 z-10'>
        <Header/>
      </header>

        <div className="w-screen h-[500px] px-[5%] bg-orange-200">
            <FactsSection 
              categories={factsCategories} 
              newFacts={getANewFact}
              factsByCategory={getANewFactByCategory}
            >
                {factBanner?.value || exploreFact?.value}
            </FactsSection>
        </div>

        <div className="w-screen px-[5%]">
          <ListSection searchClick={getANewFactByQuery} facts={recordedFacts}/>
        </div>

        <div className="mt-4">
          <Footer/>
        </div>
    </Background>
  )
}



export { HomeTemplate }