document.addEventListener('DOMContentLoaded', () => {

  document.getElementById("btn-post").addEventListener("click", function () {
    const newName = document.getElementById("new-name").value;
    const newComment = document.getElementById("new-comment").value;
    if (newName != "" && newComment != ""){
      const currentDate = new Date().toJSON().slice(0,10);

    const commentContainer = document.getElementById("comment-container");
    const commentElement = document.createElement("p");
    commentElement.innerText = currentDate + "\n" + newName + " commented: " + newComment;

    commentContainer.appendChild(commentElement);

    document.getElementById("new-comment").value = "";
    document.getElementById("new-name").value = "";
    }
    else {
      alert("Please write a name and a comment as well.");
    }

  });
});

function myFunction() {
  let x = document.getElementById("recipes");
  if (x.className ===  "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};
