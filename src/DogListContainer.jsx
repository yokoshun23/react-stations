import { useState, useEffect } from "react"
import BreedsSelect from "./BreedsSelect";

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [dogImages, setDogImages] = useState([]);

  useEffect(() => {
  	fetch('https://dog.ceo/api/breeds/list/all')
    .then((response) => response.json())
    .then((data) => {
      setBreeds(Object.keys(data.message));
    });
  },[]);

  // 犬種を指定して犬の画像リストを取得する関数
  const dogAPI = () => {
    if (selectedBreed) {
      fetch(`https://dog.ceo/api/breed/hound/images/random/12`)
        .then((response) => response.json())
        .then((data) => {setDogImages(data.message.slice(0, 12))});
    } else {
      fetch('https://dog.ceo/api/breed/hound/images/random/12')
        .then((response) => response.json())
        .then((data) => {setDogImages(data.message);});
    }
  }

  return (
    <div>
      <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} onChange={(event) => setSelectedBreed(event.target.value)}/>
      <button onClick={dogAPI}>表示</button>
      <div className="dog-images">
        {dogImages.map((url, index) => (
          <img key={index} src={url} alt={`dog-${index}`}/>
        ))}
      </div>
    </div>
  )
}

export default DogListContainer
