let commentBtn = document.querySelector('#commentBtn');
const addComment = async (event) => {
  try {
    // console.log(req.session)
    event.preventDefault();
    let commentContent = document.querySelector("#commentContent").value.trim();

    // console.log("commentContent", commentContent)
    
    let postId = commentBtn.getAttribute('data-id');

    // console.log("postId", postId);

    // console.log("commentContent + postId + userName", commentContent, postId);
        const response = await fetch("./api/comment/", {
          method: "POST",
          body: JSON.stringify({ commentContent, postId }),
          headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
          console.log("response", response);
        }
      } catch (error) {
        console.error(error)
      }
};


document.querySelector("#commentBtn").addEventListener("click", addComment);