import { useEffect, useState } from "react";
import "./Teams.css";

function Teams() {
  const [teams, setTeams] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://test.oye.direct/players.json");
      const result = await response.json();
      const teamsData = [];
      for (const team in result) {
        let obj = {
          teamName: "",
          players: "",
          show: false,
        };
        obj.teamName = team;
        obj.players = result[team];
        teamsData.push(obj);
      }
      setTeams(teamsData);
    }
    fetchData();
  }, []);
  const toggleTeam = (teamName, show) => {
    const copyTeams = teams.map((team) =>
      team.teamName === teamName
        ? { ...team, show: true }
        : { ...team, show: false }
    );
    setTeams(copyTeams);
  };
  return (
    <div className="teams">
      <h2 className="country-list">Country list</h2>
      {teams &&
        teams.map((team, index) => (
          <Team key={index} team={team} toggleTeam={toggleTeam} />
        ))}
    </div>
  );
}

const Team = ({ team, toggleTeam }) => {
  const { teamName, players, show } = team;
  return (
    <>
      <div className="team-name" onClick={() => toggleTeam(teamName, show)}>
        {teamName}
      </div>
      {show && <Players players={players} />}
    </>
  );
};

const Players = ({ players }) => {
  return (
    <ul className="players__list">
      {players.map(({ name, captain }, index) => (
        <li key={index} className={captain ? "active" : ""}>
          {name}
        </li>
      ))}
    </ul>
  );
};

export default Teams;
