const newPost = async (event) => {
    event.preventDefault();
    const newPostTitle = document.querySelector("#postTitle").value.trim();
    const newPostContent = document.querySelector("#postContent").value.trim();

    console.log("new post data test", newPostTitle, newPostContent)

    if (newPostTitle && newPostContent) {
        const response = await fetch("/api/dashboard/createpost", {
          method: "POST",
          body: JSON.stringify({ newPostTitle, newPostContent }),
          headers: { "Content-Type": "application/json" },
        });
        console.log(response)
        response.ok ? document.location.replace('./') : alert('Failed to create post');
      }
};

let createBtn = document.querySelector('.createBtn');

document.querySelector("form").addEventListener("submit", newPost);


