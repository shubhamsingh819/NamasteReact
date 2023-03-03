/*
// npx parcel index.html -> for running and building our project
// npm i -D parcel ->for installing  Dev dependencies
// How can we install react -> npm i react;
// Script type in script tag ? 

HMR -< hot module Replacement
Dist folder -> create a dev build and hot it on server .
dist basically specialise entry point of your app.
Parcel is a buindler 
parcel did  bundling
parcel did minify
parcel is cleaning our code.
parcel manages dev and prod build
parcel is super fast build algorithm.
parcel does caching for you
parcle does image optimization
parcel caching while development
parcel do compression
parcle compatable with older version of browser
Parcel enabled HTTPS on dev
parcel manages port number 
// we should put parcel-cache in git ignore.

Parcel uses Consistent Hashing Algorithm
Parcel is a zero config bundler

Parcel does Tree Shaking -> Removing unwanted code



// Transative Dependencies



*/

/**
          Header
             - Logo
             - List item
         Body 
             - Search Bar
             - RestaurentList
             - Restaurent Card (many card)
                 - Image
                 - Name 
                 - Rating
                 - Cusines
         Footer
                - Links
                - CopyRight
          */

// React.createElement gives us Object => HTML(DOM)
//JSX example
//JSX -> jsx is having one parent tag

// component -> Functional Component
// Name of the component should be in the capital letter

import React from "react"; // core package
import ReactDOM from "react-dom/client"; // packege which is importing dom
// Default Import
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
// Named import

// const burgerKing = {
//     name: "Burger King",
//     image: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/extqcad0rvnbszppfjki',
//     cusines: ["Burger", "American"],
//     rating: "4.2"
// }

// Props => properties

const AppLayOut = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayOut />);
