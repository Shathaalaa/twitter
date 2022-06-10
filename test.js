let tweets = [];

const tweetBtn = document.querySelector("#tweet-btn");

counter = 1;
tweetBtn.addEventListener("click", () => {
  console.log(99);
  const tweetInput = document.querySelector("#tweet-input");
  tweets.unshift({ id: counter, liked: false, text: tweetInput.value });
  renderFeeds();
  counter++;
  tweetInput.value='';
});
console.log(tweetBtn,'tweetBtn')

const liked = (id) => {
    tweets.forEach(element => {
        if(element.id === id){
            element.liked = !element.liked;
        }
    });
    renderFeeds();
}
const retweeted = (id) => {
    
    tweets.forEach(element => {
        
        if(element.id === id){
            tweets.unshift({ id: (tweets.length)+1, liked: false, text: element.text});
            console.log(id);
            counter++;
            id++;
        }
        
    });     
             
    renderFeeds();
    
       
}

let renderFeeds = () => {
  let parentDiv = document.querySelector(".tweets");
  parentDiv.innerHTML =''
  tweets.forEach((element) => {
    let html = `
    <div class="feed-tweet">
    <div class="pic"><img src="./seekerss.jpg" alt="" /></div>
    <div class="main-content">
      <div class="name-time" >
        <a href=""
          ><span
            style="color: aliceblue; font-weight: 600; font-size: 20px"
            >Shatha</span
          >
          <span style="color: rgb(90, 93, 96); font-size: 15px"
            >1h</span
          >
        </a>
        <i class="fa fa-ellipsis-h"></i>
      </div>
      <p>${element.text}</p>
      <div class="icons">
        <i class="fa fa-heart-o  ${element.liked ? "liked" : ""}" onclick="liked(${element.id})"></i>
        <i class="fa fa-comment-o"></i>
        <i class="fa fa-retweet " onclick="retweeted(${element.id})"></i>
      </div>
    </div>
  </div>`;
    parentDiv.innerHTML += html;
    
  });
};

