export const HOST = "http://localhost:3005";

const AUTH_URL = `${HOST}/api/auth`;
const MESSAGE_URL = `${HOST}/api/messages`;

export const CHECK_USER_ROUTE = `${AUTH_URL}/check-user`;
export const ONBOARD_USER_ROUTE = `${AUTH_URL}/onboard-user`;
export const GET_ALL_USERS = `${AUTH_URL}/get-contacts`;

export const ADD_MESSAGE_ROUTE = `${MESSAGE_URL}/add-message`;
export const GET_ALL_MESSAGES_ROUTE = `${MESSAGE_URL}/get-messages`;
export const ADD_IMAGE_MESSAGE_ROUTE = `${MESSAGE_URL}/add-image-message`;
export const ADD_AUDIO_MESSAGE_ROUTE = `${MESSAGE_URL}/add-audio-message`;
