export const api_key = "f2ed585703a2449aaa13d4899e469848"

const getNewsFeed = (date,query) => {
    return `http://newsapi.org/v2/everything?q=${query}&from=${date}&sortBy=publishedAt&apiKey=` + api_key;
};


export const ServiceURL = {
    getNewsFeed,

};
