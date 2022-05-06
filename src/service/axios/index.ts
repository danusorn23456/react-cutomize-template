import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

enum PathURL{
    AUTH_LOGIN = "/auth/login",
    AUTH_REQUEST_TOKEN = "/auth/req-access-token"
}

function getAccessToken(){
    // need return of this 
    return {
        access_token:"",
        refresh_token:""
    }
}

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
    const { access_token } = getAccessToken()

    //set header
    if (config.headers) {
        const pathURL = config?.url ?? "";
        if (access_token && pathURL !== PathURL.AUTH_LOGIN) {
            config.headers["Authorization"] = `Bearer ${access_token}`
        }
    }

    return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
    return response;
};

const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
    const { refresh_token } = getAccessToken();

    // Error Case
    const METHOD_NOT_ALLOWED = error.response?.status === 405
    const REFRESH_TOKEN_FAIL = error.response?.status === 401 && error.config?.url === "/auth/req-access-token"
    const UNAUTHORIZED = error.response?.status === 401 && refresh_token

    // Handle Case
    async function handleMethodNotAllowed() {
        
    }
    
    async function handleRefreshTokenFail() {
        //refresh token fail need signout
        window?.location?.reload();
    }

    async function handleUnauthorized() {
        try {
            await axios.post("/auth/req-access-token", {}, { headers: { refresh_token } }).then(response => {
                const { access_token, refresh_token } = response.data;
                if (access_token || refresh_token) {
                    //do set
                }
            });
        } catch (error) {
            //do logout
            window?.location?.reload();
        }
    }
    
    if(METHOD_NOT_ALLOWED){
        handleMethodNotAllowed()
    }
    else if(REFRESH_TOKEN_FAIL){
        handleRefreshTokenFail()
    }
    else if(UNAUTHORIZED){
        await handleUnauthorized()
    }
    
    return Promise.reject(error)
};

export function setupInterceptorsTo(axiosInstance: AxiosInstance, baseUrl: string): AxiosInstance {
    axiosInstance.defaults.baseURL = baseUrl;
    axiosInstance.defaults.withCredentials = true;
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
}
