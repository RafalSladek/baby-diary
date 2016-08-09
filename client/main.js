// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';
//
// import './main.html';

// set up the main template the the router will use to build pages
Router.configure({
  layoutTemplate: 'ApplicationLayout'
});
// specify the top level route, the page users see when they arrive at the site
Router.route('/', function () {
  console.log("rendering root /");
  this.render("navbar", {to: "header"});
  this.render("startScreen", {to: "main"});
});

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});


