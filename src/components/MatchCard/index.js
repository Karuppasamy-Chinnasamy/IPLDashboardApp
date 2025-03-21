// Write your code here
import './index.css'
import {Component} from 'react'

class MatchCard extends Component {
  render() {
    const {matchDetails} = this.props
    const {competingTeamLogo, competingTeam, matchStatus, result} = matchDetails
    const getMatchStatusClassName = status =>
      status === 'Won' ? 'won' : 'lost'
    const matchStatusClassName = `match-status ${getMatchStatusClassName(
      matchStatus,
    )}`

    return (
      <li className="match-item">
        <img
          src={competingTeamLogo}
          className="competing-team-logo"
          alt={`competing team ${competingTeam}`}
        />
        <p className="competing-team-name">{competingTeam}</p>
        <p className="result">{result}</p>
        <p className={matchStatusClassName}>{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
