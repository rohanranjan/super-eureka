
var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;

var express = require('express');


//Database connection
DbConnection = function(host,port){
  this.db = new Db('nodetest',new Server(host,port,{safe:false}));
  this.db.open(function(){});

};

//selecting collection with Database
DbConnection.prototype.getCollection= function(callback) {
 // DbConnection();
  this.db.collection('test', function(error, db_collection) {
    if( error ) callback(error);
    else callback(null, db_collection);
  });
};


//find all the data
DbConnection.prototype.findAll = function(callback) { 
   this.getCollection(function(error,db_collection){
    if(error)callback (error)
      else{
        db_collection.find().toArray(function(error,results){
          if(error) callback(error)
            else callback(null,results)
        });
    }
   });
};

