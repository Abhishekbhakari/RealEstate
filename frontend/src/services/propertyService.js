export const fetchPropertyData = async () => {
    try {
      const response = await fetch('https://api.example.com/properties');
      return await response.json();
    } catch (error) {
      console.error('Error fetching property data:', error);
    }
  };