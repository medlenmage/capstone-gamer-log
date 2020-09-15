import gamesData from './gamesData';
import logsData from './logsData';

const totallyRemoveGame = (gameId) => new Promise((resolve, reject) => {
  gamesData.deleteGame(gameId)
    .then(() => {
      logsData.getLogsByGameId(gameId)
        .then((logs) => {
          logs.forEach((log) => {
            logsData.deleteLog(log.id);
          });
          resolve();
        });
    })
    .catch((err) => reject(err));
});

export default { totallyRemoveGame };
