// const expandPost = async (event) => {
//     console.log("editPost.js")
//     event.preventDefault();
//     try {
//         const getId = event.target.getAttribute("data-id");
//         console.log("getId", getId)

//         const response = await fetch("/post", {
//             method: "GET",
//             body: JSON.stringify({ getId }),
//             headers: { "Content-Type": "application/json" }})
//             if (response.ok){
//                 console.log("response ok")
//             }
//     } catch (err){
//         console.error(err)
//     }
// };

// let detailsBtn = document.querySelectorAll('.detailsBtn');

// for (let i = 0; i < detailsBtn.length; i++){
// detailsBtn[i].addEventListener("click", expandPost)};