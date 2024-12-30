# Local Server Setup with Node.js and Express

This guide explains how to set up and run a simple local server using Node.js and Express.

## Prerequisites

Before starting, ensure you have the following installed on your system:

1. [Node.js](https://nodejs.org/) (Version 12 or higher recommended)
2. [npm](https://www.npmjs.com/) (comes with Node.js)

## Steps to Set Up the Server

### 1. Initialize a New Node.js Project

1. Open a terminal or command prompt.
2. Navigate to the folder where you want to create the project.
3. Run the following command to initialize a new Node.js project:

   ```bash
   npm init -y
   ```

   This command creates a `package.json` file with default settings.

### 2. Install Express

Install Express as a dependency using the following command:

```bash
npm install express
```

This will add Express to your `node_modules` folder and update the `dependencies` section in `package.json`.

### 3. Create the Server File

1. Create a new file named `server.js` in your project directory.
2. Add the following code to `server.js`:

   ```javascript
   const express = require('express');

   const app = express();
   const port = 5001;

   app.get('/', (req, res) => {
       return res.send('Hello everyone');
   });

   app.listen(port, () => {
       console.log(`Server listening on port ${port}`);
   });
   ```

### 4. Add a Start Script

In your `package.json` file, add the following line in the `scripts` section:

```json
"start": "node server.js"
```

This script allows you to start the server using the command `npm run start`.

### 5. Start the Server

Run the following command to start your server:

```bash
npm run start
```

You should see the following message in your terminal:

```
Server listening on port 5001
```

### 6. Access the Server

1. Open a web browser and go to:

   ```
   http://localhost:5001/
   ```

   You should see the text `Hello everyone` displayed on the page.

2. Alternatively, you can use a tool like `curl` to test the server:

   ```bash
   curl http://localhost:5001/
   ```

   The response should be:

   ```
   Hello everyone
   ```

## Troubleshooting

### Common Issues

1. **Port in Use:**
   - If you see an error like `EADDRINUSE`, it means the port is already in use.
   - Change the port number in `server.js` (e.g., `const port = 3000;`) and restart the server.

2. **Firewall Blocking:**
   - Ensure your firewall allows access to the specified port (e.g., `5001`).

### Verifying Dependencies

Ensure Express is installed by running:

```bash
npm list express
```

If not installed, run `npm install express` again.

## Conclusion

You have successfully set up a local server using Node.js and Express. Modify the `server.js` file to add more routes and functionality as needed. Happy coding!
