
var uuid = require( "uuid" );

var data = {
    user: {
        name: "",
        age: 0,
    },
    names: [
        {
            id: uuid.v4( ),
            name: "Will B",
        },
        {   
            id: uuid.v4( ),
            names: "Will H",
        },
        {
            id: uuid.v4( ),
            names: "Greg"
        },
        {
            id: uuid.v4( ),
            name: "John"
        },
    ],
    numbers: [
        {
            id: uuid.v4( ),
            number: 4
        },
        {
            id: uuid.v4( ),
            number: 8
        },
        {
            id: uuid.v4( ),
            number: 13
        },
        {
            id: uuid.v4( ),
            number: 19
        },
    ],
};

module.exports = data;