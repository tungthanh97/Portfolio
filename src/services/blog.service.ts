import createRepository from '@services/createServices';
import { SERVER_DOMAIN } from 'data/config';

const BLOG_URL = `${SERVER_DOMAIN}/blog`;

const BlogRepository = createRepository({
    getListBlogs: (fetch) => fetch(`${BLOG_URL}`, { method: 'GET' }),
});

export default BlogRepository;
