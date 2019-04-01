# firebase_basics

Fork this & follow along!

1. Make a project: https://console.firebase.google.com/
  - Get config info from FB & put inside of config
  - Explain importance of what NoSQL is
  - Why use Firebase RealTime Database?

2. Initial setup: https://firebase.google.com/docs/web/setup

3. Push a post to the database
  const database = firebase.database();
    database.ref('posts/').push({
      text: this.state.postText
    });

4. Read new post updates in Firebase
  - Add util to FOLDER! (this is a utility method I made)
  const postRef = firebase.database().ref('posts/');
    postRef.on('value', (snapshot) => {
      const posts = transform(snapshot.val());
      this.setState({posts});
    });
  - Good use of componentDidUnmount here!!!!

5. New post to database with id inside of object
  const newPostKey = database.ref().child('posts').push().key;
    database.ref(`posts/${newPostKey}`).set({
      text: this.state.postText,
      id: newPostKey
    });

6. Add a delete button to Posts?
7. Add an edit to posts?

Mention off in componentDidUnmount()

We could put this into a store to handle reducing or subscribe directly from the components

Further Reading:
What is a NoSQL database?: https://www.youtube.com/watch?v=v_hR4K4auoQ
Scalability/Structure Your Database: https://firebase.google.com/docs/database/web/structure-data
Read & Write Data: https://firebase.google.com/docs/database/web/read-and-write
