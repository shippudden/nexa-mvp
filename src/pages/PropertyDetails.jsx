import { useNavigate, useParams } from "react-router-dom"
import { properties } from "../data/properties"


export default function PropertyDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const property = properties.find(property => property.id === Number(id))

  if (!property) {
    return <div>Property not found</div>
  }

  return (
    <>
      <h2>Property Details</h2>

      <div className="property-details">
        <div className="video-container">
          <p className="text-thumbnail">
            Video / Image
          </p>
        </div>
        <h2>{property.price}</h2>
        <p>{property.beds} beds, {property.baths} baths</p>
        <p>{property.location}</p>
        <button 
          className="contact-agent-btn" 
          onClick={() => navigate(`/agent/${property.agentId}`)}
          >
            Contact Agent
          </button>
      </div>
    </>
  )
}
