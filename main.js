// XMLHttpRequest POST
const xhr = new XMLHttpRequest();

//The URL will direct the request to the correct server.
const url = 'https://api-to-call.com/endpoint';

// JSON.stringify() will convert a value to a JSON string. By converting the value to a string, we can then send the data to a server.
const data = JSON.stringify({id: '200'});

// Set the responseType property of the xhr object to be 'json'
xhr.responseType = 'json';
xhr.onreadystatechange = () =>{
 if ( xhr.readyState === XMLHttpRequest.DONE ){
 return xhr.response;
 }
};

//.open() creates a new request and the arguments passed in determine what type of request is being made and where it’s being made to.
xhr.open ('POST', url);

//.send() will send the request to the server.
xhr.send (data);
