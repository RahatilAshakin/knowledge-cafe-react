
import PropTypes from 'prop-types'


const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
    return (
        <div className='bg-yellow-200 rounded-xl p-8 mt-4'>
            <h3 className='text-2xl'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes={
    bookmark: PropTypes.object
}
export default Bookmark;