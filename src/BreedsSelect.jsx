export const BreedsSelect = (props) => {
  return (
    <select name="breeds">
      {props.breeds.map((item) => (
        <option keys={item} value={item}>{item}</option>
      ))}
    </select>
  )
}

export default BreedsSelect
