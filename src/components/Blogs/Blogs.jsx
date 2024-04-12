import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleBookmarks, handleMarkAsRead}) => {

    const [blogs, setBlogs]=useState([])


    useEffect( () => {


        fetch(`blogs.json`)
        .then(res => res.json())
        .then(data => setBlogs(data))


    },[])



    return (
        <div className="md:w-2/3  ">
            <h1 className="text-4xl text-center  mb-4">Blogs </h1>
            
        {
            blogs.map( blog => <Blog 
                key={blog.id} 
                blog={blog}
                handleBookmarks={handleBookmarks}
                handleMarkAsRead={handleMarkAsRead}
                ></Blog>)
        }

        </div>

        
    );
};
import PropTypes from 'prop-types'
Blogs.propTypes ={
    handleBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blogs;