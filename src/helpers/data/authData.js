import firebase from 'firebase/app';
import 'firebase/auth';

const getUid = () => firebase.auth().currentUser.uid;

const storage = firebase.storage();

export default { getUid, storage };
