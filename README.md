# Speeding Planet's React and Redux class

This is the source code for Speeding Planet's React and Redux class

It is based on the code from [Create React App](https://github.com/facebookincubator/create-react-app).

## Installation Instructions
Note that `yarn` can be used in place of `npm` below:
```dos
git clone https://github.com/johnpaxton/sp-react-class
cd sp-react-class
npm install 
```

After `npm install` completes, you will need to do three things:

* Start the server
* Start the REST server
* Run some tests

### Start the server
Start the server with `npm start`. Eventually, a browser window should open which looks like this:
![The server has started](/images/initial-site.png)

You can click on the "Transactions" link to expand it further:
![Transactions expanded](/images/transactions-expanded.png)

And finally click on "Transaction detail" to see the details on a particular transaction:
![Transaction detail](/images/transaction-detail.png)

### Start the REST server

Start the REST server by entering `npm run rest`. 
You can test the REST server by going to [http://localhost:8001/tx/5](http://localhost:8001/tx/5).

### Run some tests
Run a (very limited) set of tests by executing `npm test`. The tests may run automatically, or you 
 may see this screen: ![Run tests](/images/run-tests.png)
 
If you do, enter `a` to run all tests. You should see this screen: ![Successful tests](/images/successful-tests.png)

That's it! You are all set up! 

# Important note

This repo will stay static for Tuesday, May 16 and Wednesday, May 17. 
After that, it will likely be updated. The sections 
[Start the REST server](#start-the-rest-server) and 
[Run some tests](#run-some-tests) should work fine, but the details in 
[Start the server](#start-the-server) will likely change. 
