import axios from 'axios';
import { useEffect } from 'react';

const api = axios.create({
  baseURL: '/api/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const TestConnection = () => {
    const TestConnection = async (type, acronym) => {
      const response = await api.get(`/departments?type=${type}&acronym=${acronym}`);
        return response.data;
    }

    useEffect(() => {
        TestConnection('be', 'kominfo');
    }, []);

  return (
    <div>
      <h1>Test Connection</h1>
    </div>
  );
};