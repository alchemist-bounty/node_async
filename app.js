import fetch from 'node-fetch'; 

async function getTotalGoals(team, year) {
	// https://jsonmock.hackerrank.com/api/football_matches?year=<year>&team1=<team>&page=<page>
	let url = "https://jsonmock.hackerrank.com/api/football_matches?";
	const response= await fetch(url+"year="+year+"&team1="+team+"&page=1");
	const data=await response.json();

	console.log(data.data);
}

getTotalGoals('Barcelona', 2011);
