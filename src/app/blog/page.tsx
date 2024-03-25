'use client';

import MainLayout from '@components/MainLayout';
import BlogService from '@services/blog.service';
import { useEffect } from 'react';

const Blog = () => {
    useEffect(() => {
        console.log('fetching blogs');
        const fetchBlogs = async () => {
            const res = await BlogService.getListBlogs();
            console.log(res);
        };
        fetchBlogs();
    }, []);

    return (
        <MainLayout>
            <h1>Blog</h1>
            <button>Create blog</button>
        </MainLayout>
    );
};

export default Blog;
