import MapDevices from './components/maps/MapDevices'
import TableDevices from './components/TableDevices'
import useDevices from './hooks/useDevices'

function App() {
  const {dataDevice, selectedFilter, loading, error} = useDevices();

  if(loading) {
    return (
      <div className='loading-container'>
          <p>Loading, Please wait...</p>
      </div>
    )
  }

  if(error) {
    return (
      <div>
        <p>{error}</p>
      </div>
    )
  }

  return (
      <div>
        <select onChange={selectedFilter}>
          <option value={"all"}>all operator</option>
          <option value={"telkomsel"}>Telkomsel</option>
          <option value={"xl axiata"}>XL Axiata</option>
          <option value={"smartfren"}>Smartfren</option>
          <option value={"indosat"}>Indosat</option>
        </select>

        {dataDevice && <TableDevices data={dataDevice} />}
        {dataDevice && <MapDevices data={dataDevice} />}
      </div>
  )
}

export default App
