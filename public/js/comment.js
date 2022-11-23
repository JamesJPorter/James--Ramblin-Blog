const addComment = async (event) => {
    event.preventDefault();
    const newComment = document.querySelector(".newComment").value.trim();
    
    const postId = document.querySelector(`${this.data-id}`)
  

    console.log("newComment + postId", newComment, postId)

    if (newComment) {
        const response = await fetch("/api/dashboard/comment", {
          method: "POST",
          body: JSON.stringify({ newComment, postId }),
          headers: { "Content-Type": "application/json" },
        });
        console.log(response)
        response.ok ? document.location.replace('./') : alert('Failed to create post');
      }
};

let createBtn = document.querySelector('.commentBtn');

document.querySelector(".commentBtn").addEventListener("click", addComment);