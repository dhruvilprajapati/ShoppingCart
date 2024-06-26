﻿# Shopping Cart Project

## About

Welcome to the "Shopping Cart" project! This web application is built using React, React-Bootstrap for styling, and React Router for seamless navigation. The project incorporates advanced state management techniques with `useContext` and a custom hook called `useLocalStorage`. Leveraging the browser's `localStorage`, the application persistently stores shopping cart data, ensuring a seamless user experience even after page reloads.

## Overview

The project is structured with modular React components, promoting code organization and maintainability. Components utilize React-Bootstrap for a clean and responsive user interface. The application's navigation is handled smoothly using React Router, allowing users to easily move between different sections like the shopping cart and checkout pages.

## Key Features

- **React Components:** The project is organized with modular React components, enhancing code maintainability. Components use React-Bootstrap for a clean and responsive UI.
- **Router:** Navigation within the application is handled using React Router, providing a smooth user experience for easy traversal between different sections.

- **Global State Management with `useContext`:** The application utilizes the `useContext` hook for global state management, specifically for handling the shopping cart. This allows components throughout the application to access and update the cart without prop drilling.

- **Persistent Data Storage with `useLocalStorage`:** The `useLocalStorage` custom hook manages the state of shopping cart items in localStorage, ensuring the user's cart remains intact even after closing or refreshing the page.

- **Dynamic Shopping Cart:** Users can view their current shopping cart, adding and removing items with ease. The cart dynamically updates both in-memory and in localStorage as items are added or removed.

- **Responsive Design:** React-Bootstrap components contribute to a responsive design, making the application accessible across various devices and screen sizes.

## Technology Used

- React
- React-Bootstrap
- React Router
- `useContext` for global state management
- `useLocalStorage` custom hook for persistent data storage

## Developed by

URL: [ShoppingCart](https://dhruvil-shopping-cart.vercel.app/)
This project was developed by Dhruvil Prajapati.
