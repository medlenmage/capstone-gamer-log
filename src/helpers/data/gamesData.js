import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getGamesByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/games.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const allGames = response.data;
      const myGames = [];

      Object.keys(allGames).forEach((gameId) => {
        const game = allGames[gameId];
        game.id = gameId;
        myGames.push(game);
      });
      resolve(myGames);
    })
    .catch((err) => reject(err));
});

const deleteGame = (gameId) => axios.delete(`${baseUrl}/games/${gameId}.json`);

export default { getGamesByUid, deleteGame };
