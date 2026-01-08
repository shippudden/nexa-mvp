import { useSearchParams, useNavigate } from "react-router-dom"
import { properties } from "../data/properties"
import PropertyCard from "../components/PropertyCard.jsx"

export default function PropertyFeed() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const type = searchParams.get("type")
  const location = searchParams.get("location")
  const budget = searchParams.get("budget")

  const filteredProperties = properties.filter((property) => 
      property.type === type &&
      property.location === location &&
      property.budgetKey === budget
  )

  return (
    <div>
      <h2>Available properties in {location}</h2>
      <p>{type} properties in {location} with a budget of {budget}</p>

      {filteredProperties.length === 0 && (
        <p>No properties found.</p>
      )}

      {filteredProperties.map((property) => (
        <PropertyCard 
          key={property.id}
          property={property}
          onClick={() => navigate(`/propertydetails/${property.id}`)}
        />
      ))}

    </div>
  )
}
