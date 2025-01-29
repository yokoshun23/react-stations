export const BreedsSelect = (props) => {
  return (
    <select name="breeds" value={props.selectedBreed} onChange={props.onChange}>
      {props.breeds.map((breed) => (
        <option key={breed} value={breed}>{breed}</option>
      ))}
    </select>
  )
}

export default BreedsSelect
