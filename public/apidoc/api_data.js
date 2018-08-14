define({ "api": [  {    "type": "get",    "url": "/ping",    "title": "Health check",    "name": "Ping",    "group": "Ping",    "version": "1.0.0",    "description": "<p>A simple health check endpoint to confirm whether the API is up and running.</p>",    "examples": [      {        "title": "Example usage:",        "content": "curl -i https://restful-booker.herokuapp.com/ping",        "type": "json"      }    ],    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "OK",            "description": "<p>Default HTTP 201 response</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 201 OK",          "type": "json"        }      ]    },    "filename": "routes/index.js",    "groupTitle": "Ping",    "sampleRequest": [      {        "url": "https://localhost:3001/ping"      }    ]  }] });
