function handleFetchErrors(res) {
    if (!res.ok) throw new Error("something went wrong");
    return res;
}

export function fetchData(dataToBeFetched, id) {

    return new Promise((resolve, reject) => {

        const Key = process.env.API_KEY;
        let url;

        if (!dataToBeFetched)
            url = `https://api.football-data.org/v2/competitions/${id}`;
        // url = "./backupData/bundesliga.json"

        if (dataToBeFetched === "standings") {
            url = `https://api.football-data.org/v2/competitions/${id}/${dataToBeFetched}`;
            // let url = "./backupData/bundesligaStandings.json";
        }

        if (dataToBeFetched === "teams")
            url = `https://api.football-data.org/v2/competitions/${id}/teams`;
        // url = `./backupData/bundesligaTeams.json`;

        if (dataToBeFetched === "particularTeam")
            url = `https://api.football-data.org/v2/teams/${id}`;
        // url = "./backupData/athletiMadrid.json";

        if (dataToBeFetched === "matches")
            url = `https://api.football-data.org/v2/teams/${id}/matches/`;

        console.log(url);

        fetch(
            url,
            {
                headers: {
                    "X-Auth-Token": Key,
                    "Access-Control-Allow-Origin": "*"
                }
            }
        )
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch(error => reject(error))
    })
}