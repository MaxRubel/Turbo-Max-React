/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button, Dropdown,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';
import {
  revenueIcon, projectsIcon, customersIcon, invoicesIcon,
  estimatesIcon,
  productsIcon,
  homeIcon,
} from '../public/icons';

export default function NavBar({ user }) {
  return (
    <>
      <nav id="sidebar">
        <h1><a href="index.html" className="logo">TM</a></h1>
        <ul className="list-unstyled components mb-5">
          <li>
            <a href="#" id="home-page">{homeIcon}&ensp; Home</a>
          </li>
          <li>
            <a href="#">{projectsIcon}&ensp; Projects</a>
          </li>
          <li>
            <a href="#" id="customers">{customersIcon}&ensp; Customers</a>
          </li>
          <li>
            <a href="#" id="invoices">{invoicesIcon}&ensp; Invoices</a>
          </li>
          <li>
            <a href="#">{estimatesIcon}&ensp; Estimates</a>
          </li>
          <li>
            <a href="#">{productsIcon}&ensp; Products</a>
          </li>
          <li>
            <a href="#">{revenueIcon}&ensp; Revenue</a>
          </li>
        </ul>
        <div className="footer" id="side-bar-footer">
          <Dropdown>
            <Dropdown.Toggle variant="d-flex align-items-center text-white text-decoration-none dropdown-toggle" style={{ margin: 'none' }}>
              <a href="#" style={{ color: 'white' }}><img src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*" id="dropdownUser1" alt="" width="32" height="32" className="rounded-circle me-2" />
                <strong>{user.displayName}</strong>
              </a>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu dropdown-menu-dark text-small shadow">
              <Dropdown.Item className="dropdown-item">
                Settings
              </Dropdown.Item>
              <Dropdown.Item className="dropdown-item">
                Edit Comapny Profile
              </Dropdown.Item>
              <Dropdown.Item className="dropdown-item">
                <hr className="dropdown-divider" style={{ marginTop: '0px' }} />
                Sign out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
    </>

  );
}

NavBar.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    photoURL: PropTypes.string,
  }).isRequired,
};
