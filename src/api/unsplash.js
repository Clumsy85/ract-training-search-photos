import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID OQ3uskA5SZasnF9cry5RHiwwajEBEO9dmSeyd5CfWPk'
    }
});