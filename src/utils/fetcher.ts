import axios from "axios";

const fetcher = (path: string) => axios.get(path).then((res) => res.data);

export default fetcher;
