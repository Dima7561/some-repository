import PropTypes from 'prop-types';

import './style.css'

const UserCard = ({name, age}) => {
    return(
        <div className='wrapper'>
            <p>Hello, {name}!</p>
            <p>I`m {age} y.e.</p>
        </div>
    )
};
UserCard.defaultProps ={
    name:'some user',
};
UserCard.propTypes ={
    name: PropTypes.string,
} 
export default UserCard;
