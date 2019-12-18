import client from './client';

// load items
export const loadItems = () => client.get(`items`);
// buy item
export const buyItem = ({ item_id }) => client.post(`items/${item_id}/purchase`);
