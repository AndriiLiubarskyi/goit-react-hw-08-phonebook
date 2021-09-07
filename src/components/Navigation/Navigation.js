import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import styles from '../Navigation/Navigation.module.css';

const style = {
  activeLink: {
    color: 'rgb(40, 23, 22)',
  },
};

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink
        to="/"
        exact
        className={styles.link}
        activeStyle={style.activeLink}
      >
        Главная
      </NavLink>
      {isLoggedIn && (
        <>
          <NavLink
            to="/contacts"
            exact
            className={styles.link}
            activeStyle={style.activeLink}
          >
            Контакты
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navigation;
