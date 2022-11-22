const createPost = async (event) => {
    const newPostTitle = document.querySelector("#postTitle").value.trim();
    const newPostContent = document.querySelector("#postContent").value.trim();

    console.log(newPostTitle, newPostContent)

    if (newPostTitle && newPostContent) {
        const response = await fetch("/api/user/newPost", {
          method: "POST",
          body: JSON.stringify({ username, password }),
          headers: { "Content-Type": "application/json" },
        });
    
        if (response.ok) {
          document.location.replace("/");
        } else {
          alert("Failed to sign up.");
        }
      }
};

