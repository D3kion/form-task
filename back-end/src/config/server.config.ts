import * as config from 'config';

const API_CONFIG = config.get('API');

export const API_SERVER_PORT = API_CONFIG.PORT;
