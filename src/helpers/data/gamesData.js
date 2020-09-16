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

const getGameById = (gameId) => axios.get(`${baseUrl}/games/${gameId}.json`);

const deleteGame = (gameId) => axios.delete(`${baseUrl}/games/${gameId}.json`);

const addGame = (newGame) => axios.post(`${baseUrl}/games.json`, newGame);

const updateGame = (gameId, editedGame) => axios.put(`${baseUrl}/games/${gameId}.json`, editedGame);

export default {
  getGamesByUid,
  deleteGame,
  addGame,
  updateGame,
  getGameById,
};
