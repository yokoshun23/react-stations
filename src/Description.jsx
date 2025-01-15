import { useState } from 'react'
import DogImage from './DogImage'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState('https://avatars.githubusercontent.com/u/9919?s=200&v=4')
  const updateDogImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setDogUrl(data.message))
  }

  return (
    <React.Fragment>
      <DogImage imageUrl={dogUrl} alt="cute dog"/>
      <button onClick={updateDogImage}>更新</button>
    </React.Fragment>
  )
}

export default Description
