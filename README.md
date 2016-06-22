###Nspire.org

#####Installation
1. Install NodeJS and update npm using `npm install -g npm`
2. Install project dependencies with `sudo npm install`
3. If you receive a dependency error for node_modules/mongodb/bson, go into the node_modules/mongodb directory and run `sudo npm install`
4. Build the project by running `npm run pack`. You can keep this running in a seperate terminal window, as it will automatically rebundle the project if you make any changes to code within the public/ directory.
5. Run the project server with `npm run server`

If you run into any errors while installing, or have any questions regarding the code base, just drop a message on our Slack channel.