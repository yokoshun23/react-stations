import { useState, useEffect } from "react"

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((data) => {
        const breedList = Object.keys(data.message)
        setBreeds(breedList)
      })
  }, [])
  return (
    <div>
      <h2>犬の品種一覧</h2>
      <ul>
        {breeds.map((breed) => (
          <li key={breed}>{breed}</li>
        ))}
      </ul>
    </div>
  )
}

export default DogListContainer
