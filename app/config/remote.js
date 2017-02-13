const dev = {
    API_URL: 'http://127.0.0.1/api/'
};

const prod = {
    API_URL: 'http://sandstone.pw/api/'
};

const remote = (__DEV__) ? dev : prod;

export default remote;
