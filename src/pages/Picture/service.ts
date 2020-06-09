import axios from '../../utils/axios';

const getPicture = (pid: number): any => axios(`api/picture?pid=${pid}`);

export default getPicture;
