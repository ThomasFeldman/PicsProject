import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          'Client-ID 4BIdfMGXYi5zF0Gy8yn6FTRjSAmB7LShhOOycKjntk4'
      }
});