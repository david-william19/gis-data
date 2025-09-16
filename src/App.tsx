import MapDevices from './components/maps/MapDevices'
import TableDevices from './components/TableDevices'
import useDevices from './hooks/useDevices'
import "./app.css"

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
        <label className='select-label'>Select Operator</label>
        <select className='select-input' onChange={selectedFilter}>
          <option value={"all"}>all operator</option>
          <option value={"telkomsel"}>Telkomsel</option>
          <option value={"xl axiata"}>XL Axiata</option>
          <option value={"smartfren"}>Smartfren</option>
          <option value={"indosat"}>Indosat</option>
        </select>

        <div className='container'>
<div className='card'>
        <h2>Table of operator</h2>
          {dataDevice && <TableDevices data={dataDevice} />}
        </div>
        <div className='card'>
        <h2>Maps</h2>
          {dataDevice && <MapDevices data={dataDevice} />}
        </div>
        </div>
      </div>
  )
}

export default App
