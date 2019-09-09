// Update
sudo apt-get update

// Install  npm and nodejs + ext change
// Helpful link: https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04
sudo apt-get install nodejs npm
sudo ln -s `which nodejs` /usr/bin/node
$ npm init
npm install express --save

MongoDB - copy paste line by line
// Import the public key used by the package management system
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4

// Create a /etc/apt/sources.list.d/mongodb-enterprise.list file for MongoDB
echo "deb [ arch=amd64,arm64,ppc64el,s390x ] http://repo.mongodb.com/apt/ubuntu xenial/mongodb-enterprise/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-enterprise.list

// Reload local package database and install the MongoDB Enterprise packages.
sudo apt-get update
sudo apt-get install -y mongodb-enterprise

// Make writable directory
sudo mkdir -p /data/db
sudo chmod -R go+w /data/db


// Start MongoDB -- make sure you use said port for localhost
sudo systemctl start mongod
mongod --port 27018
// Open new Terminal(WebFullStack)
mongo --port 27018

// Common MongoDB -- Don't forget to start mongod and mongo on two different terminals
show dbs
dbs."this".find()

// Install Mongoose for JS to pull from MongoDB
npm install mongoose -g 

//Body-Parser
npm install body-parser --save

// Nvm manager - v0.34.0
curl https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash

//method-override
npm install method-override


Names of default campground:
var data = [
  {
    name: "Waterfairy Island",
    image: "https://images.unsplash.com/photo-1545153996-e01b50d6ec38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
    description: "This is a huge granite hill, no bathrooms. Beautiful waterfall!",
    price: 15,
    
  },
  {
    name:"Skippy Lake",
    image: "https://images.unsplash.com/photo-1537565266759-34bbc16be345?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    description: "A great park to skip rocks",
    price: 10,
    
  },
  {
    name: "Granite Hill",
    image: "https://images.unsplash.com/photo-1525811902-f2342640856e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
    description: "Part of the Great Walls of Granite",
    price: 8,
    
  },
  {
    name: "Lone Shark Hill",
    image: "https://images.unsplash.com/photo-1526491109672-74740652b963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    description: "A park with a shark in the middle of a hill?",
    price: 3,
   
  },
  {
    name: "Salmon Creek",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    description: "Season creek that salmon travel in, great views",
    price: 2,
    
  }

Issue 1 -- https://stackoverflow.com/questions/41533926/mongoose-typeerror-hex-is-not-a-function

Link - Deployed:
https://shielded-thicket-43768.herokuapp.com/ 

