import axios from 'axios';

// Base API configuration
const api = axios.create({
  baseURL: 'https://api-himarpl.vercel.app/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Export the api instance
export { api };

// Fetch department details by type and acronym
export const fetchDepartmentDetails = async (type, acronym) => {
  try {
    const response = await api.get(`/departments?type=${type}&acronym=${acronym}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching department details:', error);
    throw error;
  }
};

export const fetchDepartmentStaff = async (departmentId) => {
  try {
    const response = await api.get(`/users?departmentIds=${departmentId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching department staff:', error);
    throw error;
  }
};