let commentBtn = document.querySelector('#commentBtn');
const addComment = async (event) => {
    event.preventDefault();
    const commentContent = document.querySelector("#commentContent").value.trim();

    console.log("commentContent", commentContent)
    
    let postId = commentBtn.getAttribute('data-id');

    console.log(postId);

    console.log("commentContent + postId + userName", commentContent, postId);

    if (commentContent) {
        const response = await fetch("/api/comment", {
          method: "POST",
          body: JSON.stringify({ commentContent, postId }),
          headers: { "Content-Type": "application/json" },
        });
        console.log(response)
        response.ok ? document.location.replace('./') : alert('Failed to create comment');
      }
};


document.querySelector("#commentBtn").addEventListener("click", addComment);