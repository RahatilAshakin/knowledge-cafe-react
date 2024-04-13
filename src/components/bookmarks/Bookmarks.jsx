
import PropTypes from 'prop-types'
import Bookmark from '../bookmark/Bookmark';



const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        
        <div className='md:w-1/3 bg-slate-400 ml-4  rounded-xl'>

<div>
    <h3 className='text-3xl pl-6 capitalize text-left'>Reading time: {readingTime}</h3>
</div>

            <h2 className='pl-6 text-3xl capitalize text-left'>
                Bookmarked blogs: {bookmarks.length} </h2>

                <div>
                {
                bookmarks.map( (bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
                </div>
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;