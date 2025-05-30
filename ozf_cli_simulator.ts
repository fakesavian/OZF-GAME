import readline from 'readline';
import fetch from 'node-fetch';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let matchId = '';
const playerId = 'CLI_PLAYER';

async function startMatch() {
  try {
    const res = await fetch('http://localhost:3000/api/match/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ playerAId: playerId })
    });

    const data = await res.json();
    matchId = data.matchId;

    if (!matchId) {
      console.error('❌ Failed to start match: matchId undefined');
      process.exit(1);
    }

    console.log(`🎮 Match started. ID: ${matchId}`);
    playTurn();
  } catch (err) {
    console.error('❌ Error starting match:', err);
    process.exit(1);
  }
}

async function playTurn() {
  rl.question('Choose ability (e.g. cleave, shield_wall): ', async (abilityId) => {
    try {
      const res = await fetch(`http://localhost:3000/api/match/${matchId}/turn`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          playerId,
          abilityId: abilityId.trim(),
          targetId: 'BOT'
        })
      });

      const data = await res.json();
      console.log('\n--- Combat Log ---');
      data.combatLog.forEach((line: string) => console.log(line));
      console.log('-------------------\n');

      if (data.winner) {
        console.log(`🏆 Match over. Winner: ${data.winner}`);
        rl.close();
      } else {
        playTurn();
      }
    } catch (err) {
      console.error('❌ Turn failed:', err);
      rl.close();
    }
  });
}

startMatch();