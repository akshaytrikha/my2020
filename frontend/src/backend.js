// contains functions for Cloud Firestore backend

function addUser(firstName, lastName) {
    // Add a new document in collection "cities"
    db.collection("users").add({
        firstname: firstName,
        lastname: lastName
    })
    .then((docRef) => {
        console.log("User created with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}

function updateUser(id, firstName, lastName) {
    // Update user document in collection "users"
    db.collection("users").doc(id).set({
        firstname: firstName,
        lastname: lastName
    })
    .then(() => {
        console.log("User successfully updated");
    })
    .catch((error) => {
        console.error("Error updating user: ", error);
    });
}
}