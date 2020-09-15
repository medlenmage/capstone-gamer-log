import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getLogsByGameId = (gameId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/logs.json?orderBy="gameId"&equalTo="${gameId}"`)
    .then((response) => {
      const allLogs = response.data;
      const myLogs = [];

      Object.keys(allLogs).forEach((logId) => {
        const log = allLogs[logId];
        log.id = logId;
        myLogs.push(log);
      });
      resolve(myLogs);
    })
    .catch((err) => reject(err));
});

const deleteLog = (logId) => axios.delete(`${baseUrl}/logs/${logId}.json`);

export default { getLogsByGameId, deleteLog };
