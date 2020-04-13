/* @flow */
import React, { useState } from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles.scss';


function CustomBreadcrumbs(props) {
  const [breadCrumbItems, setBreadCrumbsValue] = useState( [
    { linkTo: '/', label: 'Home' },
    { linkTo: '/cart', label: 'cart' },
    ])
    

  const breadCrumbsPath = (linkTo) => {
    if (linkTo === '/') {
      setBreadCrumbsValue(
        [ { linkTo: '/', label: 'Home' },{ linkTo: '/cart', label: 'cart' }]
      );
    } else if (linkTo === '/cart') {
      setBreadCrumbsValue(
       [ { linkTo: '/', label: 'Home' },
       { linkTo: '/cart', label: 'cart' }]
      );
    } else if (linkTo === '/checkout') {
      setBreadCrumbsValue(
        { linkTo: '/', label: 'Home' },
        { linkTo: '/cart', label: 'cart' },
      );
    }
  };

  return (
    <div className="breadcrumbs">
      {breadCrumbItems && (
        <Breadcrumbs
        aria-label="breadcrumb"
        >
          {breadCrumbItems.map(({ linkTo, label }) => (
            <Link
              key={label}
              to={linkTo}
              className="breadcrumbsstyle"
              onClick={() => breadCrumbsPath(linkTo)}
            >
              {label}
            </Link>
          ))}
        </Breadcrumbs>
      )}
    </div>
  );
}

CustomBreadcrumbs.propTypes = {
  breadCrumbList: PropTypes.objectOf(PropTypes.object).isRequired,
  pathName: PropTypes.string.isRequired
};

export default withRouter(CustomBreadcrumbs);
