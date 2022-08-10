import React from 'react';
import './Blog.css';
import { blogData } from '../../data/blogData';

const Blog = () => {
  return (
    <div className='blogs'>
        <h1>Latest Articles From <br/> Painting Blog</h1>
        <div className="blogitem">
            {blogData.map((blog) => (
                <div className='blog'>
                   <img src={blog.image} alt="" />
                   <div className="calender">
                        <div className="left-sec-ca">
                            <span>{blog.icon}</span>
                            <p>{blog.cal}</p>
                            <small>{blog.year}</small>
                        </div>
                        <div className="right-sec-ca">
                        <a href="#">{blog.text}</a>
                        </div>
                   </div>
                   <div className="user-sec">
                        <div className="left-sec-u">
                          <img src={blog.userimg} alt="" />
                          <small>{blog.name}</small>
                        </div>
                        <div className="right-sec-u">
                          <small><span>{blog.eyeicon}</span>
                             {blog.num1}
                          </small>
                          <small><span>{blog.chaticon}</span>
                             {blog.num2}
                          </small>
                        </div>
                   </div>
                </div>                
            ))}
        </div>
    </div>
  )
}

export default Blog