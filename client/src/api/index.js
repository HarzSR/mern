import axios from "axios";

const URL = 'http://localhost:5000/posts';

export const fetchPost = () => axios.get(URL);