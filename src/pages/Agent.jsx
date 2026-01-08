import { useNavigate, useParams } from "react-router-dom"
import { agents } from "../data/agents"

export default function Agent() {
  const { agentId } = useParams()
  const navigate = useNavigate()
  const agent = agents.find(agent => agent.id === Number(agentId))

  if (!agent) {
    return <div>Agent not found</div>
  }

  return (
    <div className="agent-container">
      <div className="avatar"></div>
      {/* agent name */}
      <h2>{agent.name}</h2>

      {/* Trust copy */}
      <p>
        This agent has verified property videos and will guide you without unnecessary inspections
      </p>

      <div className="bottom-section">
        <strong>What happens next?</strong>
        <p>
          You'll share your contact details. The agent will react out directly to answer questions or schedule a visit if needed.
        </p>

        <button 
          className="contact-agent-btn" 
          onClick={() => navigate(`/contact/${agent.id}`)}
          >
            Continue to contact agent
        </button>
      </div>
    </div>
  )
}
