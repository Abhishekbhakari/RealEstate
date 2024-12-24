import axios from 'axios';

export const fetchPropertyData = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/properties');
    return response.data;
  } catch (error) {
    console.error('Error fetching property data:', error);
  }
};