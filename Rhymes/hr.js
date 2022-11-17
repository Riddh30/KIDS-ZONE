fetch(
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCsCe7SNQckiRJ6y563SIupg&maxResults=20&order=date&key=AIzaSyAvaq6lp_cK96yIybrDJam_Hx_6g7Nyp1w"
)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    let videos = data.items;
    let vidcont = document.querySelector(".ytcontainer");
    for (vid of videos) {
      // document.write(vid.id.videoId);
      vidcont.innerHTML += `<iframe src="https://www.youtube.com/embed/${vid.id.videoId}"></iframe>`;
      // let y=`"https://www.youtube.com/watch?v=${vid.id.videoId}"`
      // document.write(y)
    }
  });
