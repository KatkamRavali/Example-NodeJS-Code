// ----------------- Code From Chatgpt -----------------

const http = require("http"); // Load the http module to create an HTTP server.

const port = 3000; // Define a port to listen to.

const server = http.createServer((req, res) => { // Create the HTTP server and define the response to be sent for each request.
      
      // ----------- Basic Server Program ---------
      // res.writeHead(200, { "Content-Type": "text/plain" }); // Set the response HTTP header with HTTP status and Content type
      // res.end("Hello, World!\n"); // Send the response body "Hello, World!"

      // ------------ Display Method on UI ----------
      const {method , url} = req ;
      if(url === "/todos"){
          if(method === "GET"){
              res.writeHead(200);
              res.write("You finally succeded in your work");
          }
      }
      res.end();
});

// The server listens on port 3000
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// write node filename.jsExtension in the terminal
// copy the url and paste it in the browser for output
