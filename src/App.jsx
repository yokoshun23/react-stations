// DO NOT DELETE

import './App.css'
import { useState } from 'react'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState('')

  // 犬の画像を取得する関数
  const updateDogImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setDogUrl(data.message))
  }

  return (
    <div>
      <header>
        <h1>Dogアプリ</h1>
        <p>このサイトは可愛い犬の写真を紹介します</p>
      </header>
      <img src={dogUrl} alt="cute dog"/>
      <button onClick={updateDogImage}>更新</button>
    </div>
  )
}
