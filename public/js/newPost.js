const newPost = async (event) => {
    event.preventDefault();
    console.log(submitBtn)
    const newPostTitle = document.querySelector("#postTitle").value.trim();
    const newPostContent = document.querySelector("#postContent").value.trim();

    console.log(newPostTitle, newPostContent)

    if (newPostTitle && newPostContent) {
        const response = await fetch("/api/dashboard/createpost", {
          method: "POST",
          body: JSON.stringify({ newPostTitle, newPostContent }),
          headers: { "Content-Type": "application/json" },
        });
    
        if (response.ok) {
          document.location.replace("/");
        } else {
          alert("Failed to create post");
        }
      }
};

let submitBtn = document.querySelector('.createBtn');

if (submitBtn){
  document.querySelector(".createBtn").addEventListener("submit", newPost)
};

