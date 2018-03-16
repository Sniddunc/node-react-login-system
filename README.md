<h1>Node/React Login System</h1>
Simple username/password login system with a Node back end and a React front end. Passport was used as the authentication helper.

Client bootstrapped with <a href="https://github.com/facebook/create-react-app">create-react-app</a>.

<h3>Setup</h3>

Clone this repository
```
$ git clone https://github.com/Sniddunc/node-react-login-system.git
```

Change directories into it
```
$ cd node-react-login-system
```

Install dependencies
```
$ npm install
```

<h4>Start</h4>

Client
```
$ npm run client
```

Server
```
$ npm run server
```

Both
```
$ npm run dev
```

<h3>General Process</h3>
We have a node back end server that handles all of our authentication requests and a React front end that
displays appropriate information and forms that generate our auth requests.

One of these authentication routes is `/auth/signup`. This route handles a POST request that instructs Passport to execute the appropriate local strategy:
`server/services/passport/strategies/local-signup.js`. This strategy ensures that user details are valid and that there are no duplicates.

The other route is `/auth/login`. This also handles a POST request that instructs Passport to check if a user with those credentials exists. If
so, Passport attaches `user` to the request object (`req.user`). The strategy that handles login is `server/services/passport/strategies/local-login.js`.

Our client communicates with the server via an API. Our API routes are `/api/current_user` which returns the user (if logged in, the user object. If not, nothing)
and `/api/logout` which logs out the user if they are logged in. These communications are made through <a href="https://github.com/axios/axios">axios</a>.

The client uses Redux for it's store. After the `App` component is loaded, a request is sent to our API to get the user. If they are logged in,
the user object is returned. If not, nothing is returned. As `App` is connected to our Redux store, the user object then gets mapped to the store.

The page that depends on authentication (`ProfilePage`) is also connected to our store, and the value of `state.auth` from Redux is mapped
to it's props. It's props are then compared, and content is shown appropriately depending on whether or not the user is logged in.

Note that for the sake of this demo, access to pages that should require authentication is not completely restricted as they would be if this
was a production implementation.
