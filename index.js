const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let isLiked = false
let likeBtn = document.getElementById("like-btn")
let countLikes = document.getElementById("count-likes")
let likes = countLikes.innerHTML



likeBtn.addEventListener("click", function(){
    let likes = Number(countLikes.innerHTML)
    
    if(!isLiked){
        isLiked = true
        likes += 1
    }else{
        isLiked = false
        likes -= 1
    }
    
    countLikes.innerHTML = likes
})