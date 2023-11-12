import axios from "axios";

export const getCategories = async () => {
    try {
        const response = await axios.get(`/api_category.php`);
          
        // Check if the HTTP response is successful
        if (response.status === 200) {
          // The response data is already in JSON format
          return response.data;
        } else {
          return [];
        }
      } catch (error) {
        console.error("An error occurred:", error);
        return [];
      }
  }