const token = localStorage.getItem('token');
export const headers = { headers: { 'authorization': `Bearer ${token}` } };

