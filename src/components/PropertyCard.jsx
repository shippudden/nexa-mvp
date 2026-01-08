

export default function PropertyCard({property, onClick}) {
  return (
    <div className="property-card" onClick={onClick}>
        <div className="property-image">
            <p className="text-thumbnail2">Video / Image</p>
        </div>
        <p>{property.price}</p>
        <p>{property.beds} Beds, {property.baths} Baths</p>
        <p>{property.location}</p>
    </div>
  )
}
