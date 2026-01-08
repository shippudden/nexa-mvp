import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Entry() {
  const navigate = useNavigate()

  const [type, setType] = useState("Rent")
  const [location, setLocation] = useState("")
  const [budget, setBudget] = useState("")

  const isDisabled = !location || !budget

  const handleViewProperties = () => {
    navigate(`/propertyfeed?type=${type}&location=${location}&budget=${budget}`)
  }

  return (
    <div className='container'>
      <h1>Find your next home - Virtually</h1>

      {/* Rent / Buy Toggle */}
      <div className="toggle-container">
        <button
          className={"rent-btn" + (type === "Rent" ? " active" : "")}
          onClick={() => setType("Rent")}
        >
          Rent
        </button>
        <button
          className={"buy-btn" + (type === "Buy" ? " active" : "")}
          onClick={() => setType("Buy")}
        >
          Buy
        </button>
      </div>

      {/* Location */}
      <div className="dropdown-container">
        {/* <label>Location</label> */}
        <select 
          className='dropdown' 
          value={location} 
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">Select Location</option>
          <option value="Lekki">Lekki</option>
          <option value="Yaba">Yaba</option>
          <option value="Ikeja">Ikeja</option>
          <option value="VI">VI (Victoria Island)</option>
        </select>
      </div>

      {/* Budget */}
      <div className="dropdown-container">
        {/* <label>Budget</label> */}
        <select 
          className='dropdown' 
          value={budget} 
          onChange={(e) => setBudget(e.target.value)}
        >
          <option value="">Select Budget</option>
          <option value="0-500k">Below N500k</option>
          <option value="500k-1M">500k - 1M</option>
          <option value="1M-2M">1M - 2M</option>
          <option value="2M-plus">2M+</option>
        </select>
      </div>

        {/* CTA */}
        <button 
          className="view-properties-btn"
          onClick={handleViewProperties}
          disabled={isDisabled}
        >
          View Properties
        </button>
    </div>
  )
}
