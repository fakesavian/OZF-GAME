import readline from 'readline';
import fetch from 'node-fetch';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let matchId: string = '';
let playerId = 'testPlayer';

async function startMatch() {
  const res = await fetch('http://localhost:3000/api/match/start', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ playerAId: playerId })
  });
  const data = await res.json();
  matchId = data.id;
  console.log(`Match started. ID: ${matchId}`);
  playTurn();
}

async function playTurn() {
  rl.question('Choose ability (e.g. cleave, shield_wall): ', async (abilityId) => {
    const res = await fetch(`http://localhost:3000/api/match/${matchId}/turn`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        playerId: playerId,
        abilityId: abilityId.trim(),
        targetId: 'BOT'
      })
    });

    const data = await res.json();
    console.log('--- Combat Log ---');
    data.combatLog.forEach((line: string) => console.log(line));
    console.log('------------------');

    if (data.winner) {
      console.log(`🏆 Match over. Winner: ${data.winner}`);
      rl.close();
    } else {
      playTurn();
    }
  });
}

startMatch();