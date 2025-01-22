import { useState, useEffect } from "react"

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
  	fetch('https://dog.ceo/api/breeds/list/all')
    .then((response) => response.json())
    .then((data) => {
      setBreeds(Object.keys(data.message));
    });
  },[]);

  return (
    <select name="breeds">
      {breeds.map((item) => (
        <option keys={item} value={item}>{item}</option>
      ))}
    </select>
  )
}

export default DogListContainer
