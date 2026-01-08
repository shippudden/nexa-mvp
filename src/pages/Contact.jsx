import { useNavigate, useParams } from "react-router-dom"
import { agents } from "../data/agents"

export default function Contact() {
  const { agentId } = useParams()
  const navigate = useNavigate()
  const agent = agents.find(agent => agent.id === Number(agentId))

  if (!agent) {
    return <div>Agent not found</div>
  }

  return (
    <div className="contact-container">
      <h2>Contact {agent.name}</h2>
      <p>
        You'll be connected directly to the agent. No inspectionns, no pressure - just clarity
      </p>

      {/* form */}
      <div className="form-container">
        <input type="text" placeholder="Your name" />
        <input type="text" placeholder="Your phone number" />
        <button 
          className="contact-agent-btn" 
          onClick={() => navigate(`/success`)}
          >
            Contact Agent via whatsapp
        </button>
      </div>
    </div>
  )
}
