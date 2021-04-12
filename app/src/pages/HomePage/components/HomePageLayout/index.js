import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {ROUTES} from '../../../../routes/routesNames';
import UserCard from '../UserCard';

const HomePageLayout = ({userList}) => {
    return (
    <div>
        <h1>HOME PAGE</h1>
        <div className = 'content_counter'>
            <Link to={ROUTES.COUNTER_PAGE}>
            <button>GO TO COUNTER PAGE</button>
            </Link>
        </div>
    </div>
    );
};

HomePageLayout.defaultProps ={
    name:'some user',
};
HomePageLayout.propTypes ={
    name: PropTypes.string.isRequired,
}

export default HomePageLayout;