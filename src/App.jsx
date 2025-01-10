// DO NOT DELETE

import './App.css'
import { useState } from 'react'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg')

  const changeDogImage = () => setDogUrl('https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg')

  return (
    <div>
      <header>
        <h1>Dogアプリ</h1>
        <p>このサイトは可愛い犬の写真を紹介します</p>
      </header>
      <img src={dogUrl} alt="cute dog"/>
      <button onClick={changeDogImage}>更新</button>
    </div>
  )
}
