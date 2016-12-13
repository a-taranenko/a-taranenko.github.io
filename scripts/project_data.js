'use strict';

function projectPush(project) {
  projects.push(project);
}

function Project(title, description, endpoint) {
  let id = endpoint.split("/")[1].toLowerCase();

  this.name = title;
  this.data = description;
  this.id = id;
  this.class = `${id}-text`;
  this.endpoint = endpoint;

  projectPush(this);
}

const projects = [];

const avatarDownloaderDescription = "A fun project that uses GitHub's API with the help of Javascript and Request to make HTTP requests to access and download some of the Lighthouse Labs' mentors' avatars.";
const tinyAppDescription = "This project uses Javascript and Express framework on the back end to create a simple web site that allows a user to assign short URLs to links. Short URLs can then be used to access corresponding links via a redirect. MongoDB is used to store user-created data. Embedded Javascript is used on the front end.";
const tweeterDescription = "A neat project that mimics Twitter to some extent. HTML and CSS are implemented to introduce a user to a stylized web page, where he/she can view and join a simulated conversation. Javascript, Express and MongoDB are used on the back-end, while AJAX and JQuery are used on the front-end.";
const coolWikiMapsDescription = "A more in-depth project that uses Google Maps API, Heroku, Postgres, and User Authentication to create a web site that allows users to sign up and create maps with their favourite locations. Other users have access to and can add new locations to already existing maps. Javascript and Express are used on the back end, Knex.js is used to make database queries, while AJAX, JQuery, and Embedded Javascript are used on the front end.";
const chattyAppDescription = "An application that uses a popular Javascript technology ReactJS and Webpack to simulate a messenger environment. In this case many users can connect to a server and participate in a conversation in real time.";
const jungleDescription = "An e-commerce application that uses Ruby on Rails on the back end, Active Record to communicate with the database, and Embedded Ruby on the front end. Users can make accounts, purchase products, and provide their reviews.";
const gitMarkedDescription = "An application that uses GitHub to connect mentors and students by enabling code highlighting and commenting. The project uses Javascript, Express, Postgres, and Sequelize on the backend,  while AJAX, JQuery, and Embedded Javascript are applied on the front end. Codemirror, jsTree help render a user's GitHub repo tree and code.";

const avatarDownloader = new Project("Avatar Downloader", avatarDownloaderDescription, "a-taranenko/avatar-downloader");
const tinyApp = new Project("TinyApp", tinyAppDescription, "a-taranenko/tiny-app");
const tweeter = new Project("Tweeter", tweeterDescription, "a-taranenko/tweeter");
const coolWikiMaps = new Project("Cool Wiki Maps", coolWikiMapsDescription, "a-taranenko/cool-wiki-maps");
const chattyApp = new Project("Chatty App", chattyAppDescription, "a-taranenko/chatty-app");
const jungle = new Project("Jungle", jungleDescription, "a-taranenko/jungle-rails");
const gitMarked = new Project("GitMarked", gitMarkedDescription, "BatBrain/GitMarked");
