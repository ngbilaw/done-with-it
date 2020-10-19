import client from "./client";
import authStorage from '../auth/storage';

const endpoint = '/messages';

const getMessages = () => 
  client.get(endpoint)

const send = (message, listingId) =>
  client.post(endpoint, {
    message,
    listingId,
  });

export default {
  send,
  getMessages,
};
