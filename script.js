function addComment() {
    var name = document.getElementById("nameInput").value.trim();
    var comment = document.getElementById("commentInput").value.trim();
    if (name === "" || comment === "") {
        alert("Please enter your name and comment.");
        return;
    }

    var commentList = document.getElementById("commentList");
    var listItem = document.createElement("li");
    var commentText = document.createTextNode(name + ": " + comment);
    listItem.appendChild(commentText);
    commentList.appendChild(listItem);

    // Clear input fields
    document.getElementById("nameInput").value = "";
    document.getElementById("commentInput").value = "";
}
