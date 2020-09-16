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

const getLogsById = (logId) => axios.get(`${baseUrl}/logs/${logId}.json`);

const addNewLog = (newLog) => axios.post(`${baseUrl}/logs.json`, newLog);

const editALog = (logId, editedLog) => axios.put(`${baseUrl}/logs/${logId}.json`, editedLog);

const deleteLog = (logId) => axios.delete(`${baseUrl}/logs/${logId}.json`);

export default {
  getLogsByGameId,
  deleteLog,
  getLogsById,
  addNewLog,
  editALog,
};
