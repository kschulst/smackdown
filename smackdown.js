Smackdowns = new Meteor.Collection("smackdowns");

if (Meteor.isClient) {
  Template.smackdownsTemplate.smackdowns = function () {
    return Smackdowns.find().fetch();
  };

//  Template.smackdownsTemplate.events({
//    'click input' : function () {
//      // template data, if any, is available in 'this'
//      if (typeof console !== 'undefined')
//        console.log("You pressed the button");
//    }
//  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
