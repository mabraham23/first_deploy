const express = require( "express");
const cors = require( "cors" );

var server = express( );
var port = process.env.PORT || 3000;

//Data
var data = require( "./data.js");

//Middleware
server.use( cors( ) );
server.use( express.json( ));
server.use( express.urlencoded( {
    extended: false
} ) );

//REST endpoints
//Get /user
server.get( "/user", function(req, res) {
    if ( !data.user.name ) {
        res.status( 400 );
        var response = {
            msg: "No name has been entered yet"
        };
        res.json( response );
    } else {
        var response = {
            user: data.user.name,
            age: data.user.age,
            created_on: new Date ( ),
        }
        res.json( response );
    }
});

//Post /user
server.post( "/user", function(req, res) {
    if ( !req.body.user.name ) {
        res.status( 400 );
        var response = {
            msg: "Please enter a user name"
        };
        res.json(response);
    } else if ( isNaN( req.body.user.age )) {
        res.status( 400 );
        var response = {
            msg: "Please enter a valid age"
        };
        res.json( response );
    } else {
        var new_user = {
            "name": req.body.user.name,
            "age": req.body.user.age,
            "created on": new Date ( )
        }
        data.user = new_user;
        res.status( 201 );
        res.send( );
    }
});

//Get /greeting
    server.get( "/greeting", function(req, res) {
        if ( !data.user.name ) {
            res.status( 400 );
            var response = {
                greeting: "Welcome"
            };
            res.json( response );
        } else {
            res.status( 201 );
            var response = {
                greeting: "Welcome " + data.user.name
            }
            res.json( response );
        }
    });

    //Get /names
    server.get( "/names", function (req, res ) {
        var response = {
            names: data.names
        };
        res.json( response );
    });

    // Get /names/id
    server.get( "/names/:id", function ( req, res ) {
        //console.log( req.params.id );
        var filtered_names = [ ];
        data.names.forEach( function (name) {
            if ( name.id == req.params.id) {
                filtered_names.push( name );
            }
        });

    // 404 if we didn't find a name with that id
    if ( filtered_names.length == 0 ) {
        res.status( 404 );
        var response = {
            msg: "Couldn't find a name with that id"
        };
        res.json( response );
    } else { //200 if we did find a name, send back the respective name
        var name = filtered_names[ 0 ];
        var response = {
            name: name
        };
        res.json( response );
    }
        res.send( );
    });

server.listen( port, function ( ) {
    console.log(`Listening on 
    port ${port}`);
});