import { useState } from 'react'
import DogImage from './DogImage'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg')

  const dogAPI = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {setDogUrl(data.message)})
  }
  return (
    <div>
      <p>犬の画像を表示するサイトです</p>
      <DogImage dogUrl={dogUrl} alt="cute dog"/>
      <button onClick={dogAPI}>更新</button>
    </div>
  )
}

export default Description
