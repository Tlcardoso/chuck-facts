const BASE_URL = 'https://api.chucknorris.io/jokes'

export const getFact = async () => {
  const fact = await fetch(`${BASE_URL}/random`)
    .then((response) => response.json())

  return fact
}

export const getFactByCategory = async (category: string) => {
  const fact = await fetch(`${BASE_URL}/random?category=${category}`)
    .then((response) => response.json())

  return fact
}

export const getFactByQuery = async (query: string) => {
  const fact = await fetch(`${BASE_URL}/search?query=${query}`)
    .then((response) => response.json())

  return fact
}

export const getCategories = async () => {
  const categories = await fetch(`${BASE_URL}/categories`)
    .then((response) => response.json())

    return categories
}