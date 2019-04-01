# firebase_basics

Fork this & follow along!

1. Make a project: https://console.firebase.google.com/
  - Get config info from FB & put inside of config
  - Explain importance of what NoSQL is
  - Why use Firebase RealTime Database?
  - What are sockets?
  - Socket.io vs. Firebase

2. Initial setup: https://firebase.google.com/docs/web/setup

3. Push a post to the database
  const database = firebase.database();
    database.ref('posts/').push({
      text: this.state.postText
    });


Further Reading:
Scalability/Structure Your Database: https://firebase.google.com/docs/database/web/structure-data
Read & Write Data: https://firebase.google.com/docs/database/web/read-and-write