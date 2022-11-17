
function show1() {
    document.getElementById("opt1").style.visibility = "visible";
  }
  function show11() {
    document.getElementById("opt1").style.visibility = "visible";
    document.getElementById("hmm").removeAttribute("onmouseout");
  }
  function show2() {
    document.getElementById("opt2").style.visibility = "visible";
  }
  
  function show22() {
    document.getElementById("opt2").style.visibility = "visible";
    document.getElementById("umm").removeAttribute("onmouseout");
  }
  
  
  const hov=new Audio('./sounds/swing-whoosh-110410.mp3');
  function hover(){
  hov.play();
  }
  
function Home(){
    return(
        <>
    <section class="header">
    <div class="topmost">
        <div class="icons">
           <a href="https://dhanushaditya.github.io/Voice_assistance/"><img src="https://img.icons8.com/ios-filled/50/null/microphone--v1.png" alt="microphone" /></a>
           <a href="https://kidszonehelpbot.netlify.app/"> <img src="https://img.icons8.com/ios-glyphs/30/null/chatbot.png" alt="chatbot"/></a>
            <a href="https://kidszonegps.netlify.app/"> <img src="https://img.icons8.com/glyph-neue/64/null/marker.png" alt="gps"/></a>
            
        </div>
    </div>
    
    <h2 class="trouble" style={{color: 'red'}}>Hello Kiddo! What do you wanna do today?</h2>
    
    <div class="buttons">
        <div>
            <button  id='hmm' onmouseover={show1}  onclick={show11} onmouseout='document.getElementById("opt1").style.visibility = "hidden"'>Entertainment</button> <br/>
            <div id="opt1">
                <a href="https://kidszone-games.netlify.app/"><h3 onmouseover={hover} >Games</h3></a>
                <a href="https://dhanushaditya.github.io/video_crafts/"><h3 onmouseover={hover}  >Fun videos</h3></a>
                <a href="https://kidszonebedtimestories.netlify.app"><h3 onmouseover={hover} >Bedtime stories</h3></a>
               <a href="https://kushall0603.github.io/drawing.github.io/"> <h3 onmouseover={hover}>Paint</h3></a>
                
            </div>
            
            
            
        </div>
        <div>
            <button id="umm" onmouseover={show2} onclick={show22} onmouseout='document.getElementById("opt2").style.visibility = "hidden"'>Education</button> <br/>
            <div id="opt2">
              <a href="https://kidszonequiz.netlify.app/"> <h3 onmouseover={hover} >Quiz</h3> </a>       
              <a href="https://kidszonereadingcomp.netlify.app/"><h3 onmouseover={hover} >Reading Comprehension</h3></a>
              <a href="https://dhanushaditya.github.io/Educational_videos/"><h3 onmouseover={hover}  >Educational Videos</h3></a>
               <a href="https://kidszonerhymes.netlify.app"><h3 onmouseover={hover} >Rhymes</h3> </a>
            </div>
        </div>
    </div>
</section>
        </>
    )
    }
export default Home
