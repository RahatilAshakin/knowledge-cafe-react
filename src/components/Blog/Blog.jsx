
import PropTypes from 'prop-types';
import { FcBookmark } from "react-icons/fc";

const Blog = ({blog, handleBookmarks, handleMarkAsRead}) => {
    console.log(blog);
    const {id, author_name, cover_image, title, author_img, posted_date, reading_time, hashtag}=blog

    return (
        <div className='mb-20  border-4 border-yellow-700 rounded-xl'>
            <img className='w-full rounded-xl' src={cover_image} alt={`Cover Picture of Title ${title}`}
              />

            <div className='flex justify-between mb-8'>
                <div className='flex gap-10 mt-5 mb-5'>
                    <img className='w-14 rounded-full  ' src={author_img} alt="" srcset="" />
                    <div>
                        <h3 className='text-2xl mb-4'>{author_name}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center mt-0'>
                    <span>{reading_time} min read</span>

                    <button
                    onClick={()=> handleBookmarks(blog)}
                    className='ml-2 text-red-700 p-4'>
                        <FcBookmark className='text-3xl' />
                    </button>
                </div>
            </div>

           <h2 className='text-4xl mb-4'> Blog Title: {title}</h2>
            
           <div>
           <p className='mb-4 p-4'>
                {
                    hashtag.map((hash, idx) =><span key={idx}><a href="">{hash}</a></span>)
                }
<br />
                <button
                onClick={()=>handleMarkAsRead(id, reading_time)}
                 className='my-3 text-purple-600 font-bold underline bg-gray-300 rounded-xl p-2'>Mark as REad</button>
           </p>
           </div>

        </div>
    );
};


Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;