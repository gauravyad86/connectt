import axios from 'axios';

const API_URL = 'http://localhost:4001/auth';

export const fetchData = async ({prop}) => {
    
    console.log("api called")
  try {
    const response = await axios.post(`${API_URL}/all-user`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};