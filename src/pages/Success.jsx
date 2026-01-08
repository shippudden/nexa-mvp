import { useNavigate } from "react-router-dom"

export default function Success() {
    const navigate = useNavigate()
  return (
    <div className="success-container">
        <h2>Request Sent</h2>
        <p>The agent will contact you shortly. You won't need to repeat inspections.</p>
        <button 
            className="back-btn" 
            onClick={() => navigate(`/`)}
            >
                Back to home
        </button>
    </div>
  )
}
