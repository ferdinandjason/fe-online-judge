let BASE_URL = 'http://localhost:8000';

export const APP_CONFIG = {
    name : 'OJ',
    platform : 'Nebula',
    apiURL : {
        auth : `${BASE_URL}/api/auth`,
        problem: `${BASE_URL}/api/problems`,
    }
};