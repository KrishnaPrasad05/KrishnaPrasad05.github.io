const images=['Nature/pic1.jpg','Nature/pic2.jpg','Nature/pic3.jpg','Nature/pic4.jpg','Nature/pic5.jpg','Nature/pic6.jpg','Nature/pic7.jpg','Nature/pic8.jpg','Nature/pic9.jpg','Nature/pic10.jpg']
const text=["hello","hi","welcome","nice","what","why","where","how","good","thanks"];
const color=["lightgreen","darkgreen","gray","orange","orangered","pink","orange","cyan","burlywood","lightgreen"]
const quotes=[
    "If your actions inspire others to learn more, dream more, do more and become more then you are a leader! – John Quincy Adams",
"Before you are a leader, success is all about growing yourself. When you become a leader, success is all about growing others. – Jack Welch",
"The task of the leader is to get his people from where they are to where they have not been. – Henry Kissinger",
 "Great leaders are almost always great simplifiers, who can cut through argument, debate, and doubt to offer a solution everybody can understand.– Gen. Colin Powell, former U.S. Secretary of State",
 "The challenge of leadership is to be strong, but not rude; be kind, but not weak; be bold, but not a bully; be thoughtful, but not lazy; be humble, but not timid; be proud, but not arrogant; have humour but without folly. – Jim Rohn",

 "You don’t have to hold a position in order to be a leader. – Henry Ford, founder of the Ford Motor Company group of individuals working together",
 "Leadership is practised not so much in words as in attitude and in actions. – Harold S Geneen",
 "Management is doing things right; leadership is doing the right things. – Peter F. Drucker, author, and educator",
"Of all the things I’ve done, the most vital is coordinating those who work with me and aiming their efforts at a certain goal.– Walt Disney, founder of Disney",
"The function of leadership is to produce more leaders, not more followers. -Ralph Nader"
]
const view=document.querySelector("#view2");
const div=view.querySelector("div");
const img=view.querySelector("img");
const h2=div.querySelector("h2");
const btn=view.querySelector("#but");
const bs=["10px 10px 15px lightgreen","10px 10px 10px darkgreen","10px 10px 10px gray","10px 10px 10px orange","10px 10px 10px orangered","10px 10px 10px pink","10px 10px 10px orange","10px 10px 10px cyan","10px 10px 10px burlywood","10px 10px 10px lightgreen"];

btn.addEventListener("click",function(){
    const randomNumber=getRandomNumber();
    img.src=images[randomNumber];
    h2.textContent=quotes[randomNumber];
    div.style.boxShadow=bs[randomNumber];
    btn.style.boxShadow=bs[randomNumber];
    btn.style.borderColor=color[randomNumber];
    h2.style.color=color[randomNumber];
    btn.style.color=white;
})
function getRandomNumber(){
    return Math.floor(Math.random()*images.length);
}
