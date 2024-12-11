
let posts = [];

function openModal() {
    document.getElementById("modal").style.display = "block";
}


function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("post-content").value = ""; 
}


function saveContent() {
    const content = document.getElementById("post-content").value;
    if (content) {
        posts.push(content);
        displayPosts(); 
        closeModal();
    }
}


function displayPosts() {
    const displayContent = document.getElementById("display-content");
    displayContent.innerHTML = ""; 

    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.textContent = post;
        displayContent.appendChild(postElement);
    });
}


document.getElementById("new-button").addEventListener("click", openModal);
document.getElementById("cancel-button").addEventListener("click", closeModal);
document.getElementById("save-button").addEventListener("click", saveContent);
