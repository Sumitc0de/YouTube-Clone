const videos = [
  {
    title: "I built myself a new Robot Buddy! ",
    channelName: "Made with Layers",
    views: "241k Views",
    time: "7 months ago",
    thumbnail: "https://i.ytimg.com/vi/4xD9QCBkxAs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB4TvD7-SaHGe6mPci7AAtx1t-iTg",
    duration: "17:10",
    channelLogo: "https://yt3.ggpht.com/b7R_4be18afRCpEPUe4R_XVGNW2qWfBGVrga1e-BmQPjmqEL0mg0L1er1sVSXwXSIgKwS1g0l_Y=s88-c-k-c0x00ffffff-no-rj",
    link: "https://www.youtube.com/watch?v=4xD9QCBkxAs"
  },
  {
    title: "Ye tune kya kiya song One Upon mumbai | Akshay Kumar",
    channelName: "Music Vines",
    views: "2.4k Views",
    time: "3 days ago",
    thumbnail: "https://i.ytimg.com/vi/oxpICS8VMt8/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGHIgPCgyMA8=&rs=AOn4CLAehpQcAg-ydHA04774D9TVzWY8iQ",
    duration: "5:15",
    channelLogo: "https://yt3.ggpht.com/1_qVn0twEp5UIEB-mr7FEkW-Yw0KCUOddWEQWxIvyA3qmpEblIyBM6LP1uZWBYdjAUXbtWCU=s88-c-k-c0x00ffffff-no-rj",
    link: "https://www.youtube.com/watch?v=oxpICS8VMt8"
  },
  {
    title: "Ye tune kya kiya song One Upon mumbai | Akshay Kumar",
    channelName: "Yashraj Mukhate",
    views: "75M Views",
    time: "3 years ago",
    thumbnail: "https://i.ytimg.com/vi/h-ile9tMNM0/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA2s6nhookQhteD8uArX0oPyJw-PA",
    duration: "2:40",
    channelLogo: "https://yt3.ggpht.com/ytc/AIdro_l6dHAbHqmov1LTINuHcfZdXzVcV8dZCx6vZmos3CNYuzND=s88-c-k-c0x00ffffff-no-rj",
    link: "https://www.youtube.com/watch?v=h-ile9tMNM0"
  },
  
  {
    title: "Item Songs Dancing Nonstop | #itemsong ",
    channelName: "BestDJ",
    views: "9.2M Views",
    time: "11 months ago",
    thumbnail: "https://i.ytimg.com/vi/MCYqACY3GxU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAkQCzYs7nVPlB8OYbCaOJJ_iNazg",
    duration: "11:22",
    channelLogo: "https://yt3.ggpht.com/U7QCJY29m3wMPmnof7fJFj-RofvFxMNnOJu9CLxrjkmkvxt9ffMvGHMh8FZUM38NeNWAcTnEErQ=s68-c-k-c0x00ffffff-no-rj",
    link: "https://www.youtube.com/watch?v=MCYqACY3GxU"
  },
  
  {
    title: "4 Amazing locomotive Models made by using cardboard #train",
    channelName: "BumBin kreatif",
    views: "958k Views",
    time: "1 years ago",
    thumbnail: "https://i.ytimg.com/vi/CGRmOChz9R4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC9EFQaxXARssmcou0idUrGRGoFFA",
    duration: "1:06:23",
    channelLogo: "https://yt3.ggpht.com/dwy9Uuf8xPsVgiSVjK1RwfmDmjDJpacxB6S9xokwz3q6-iVc2gWSvK_8ky3sscoRrhAmCWlulck=s68-c-k-c0x00ffffff-no-rj",
    link: "https://www.youtube.com/watch?v=CGRmOChz9R4"
  },
  {
    title: "Top 10 Arduino Robots|| Arduino Projects || Drab Tech #arduino",
    channelName: "Drab Tech",
    views: "47k Views",
    time: "2 years ago",
    thumbnail: "https://i.ytimg.com/vi/8iw13B2a6io/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDxTj2w2mslxdEGXI7hp8u1ubyAMw",
    duration: "1:06:23",
    channelLogo: "https://yt3.ggpht.com/uVI3wTfAtNFez-Uz8XZn490DrlZQo0aGjFCt2oCtt8mjhh-H-IQpj_bKKn_ImhhStIMhFpZN4g=s68-c-k-c0x00ffffff-no-rj",
    link: "https://www.youtube.com/watch?v=8iw13B2a6io"
  },
  {
    title: "I built myself a new Robot Buddy! ",
    channelName: "Made with Layers",
    views: "241k Views",
    time: "7 months ago",
    thumbnail: "https://i.ytimg.com/vi/4xD9QCBkxAs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB4TvD7-SaHGe6mPci7AAtx1t-iTg",
    duration: "17:10",
    channelLogo: "https://yt3.ggpht.com/b7R_4be18afRCpEPUe4R_XVGNW2qWfBGVrga1e-BmQPjmqEL0mg0L1er1sVSXwXSIgKwS1g0l_Y=s88-c-k-c0x00ffffff-no-rj",
    link: "https://www.youtube.com/watch?v=4xD9QCBkxAs"
  },
  {
    title: "Ye tune kya kiya song One Upon mumbai | Akshay Kumar",
    channelName: "Music Vines",
    views: "2.4k Views",
    time: "3 days ago",
    thumbnail: "https://i.ytimg.com/vi/oxpICS8VMt8/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGHIgPCgyMA8=&rs=AOn4CLAehpQcAg-ydHA04774D9TVzWY8iQ",
    duration: "5:15",
    channelLogo: "https://yt3.ggpht.com/1_qVn0twEp5UIEB-mr7FEkW-Yw0KCUOddWEQWxIvyA3qmpEblIyBM6LP1uZWBYdjAUXbtWCU=s88-c-k-c0x00ffffff-no-rj",
    link: "https://www.youtube.com/watch?v=oxpICS8VMt8"
  },
  {
    title: "Ye tune kya kiya song One Upon mumbai | Akshay Kumar",
    channelName: "Yashraj Mukhate",
    views: "75M Views",
    time: "3 years ago",
    thumbnail: "https://i.ytimg.com/vi/h-ile9tMNM0/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA2s6nhookQhteD8uArX0oPyJw-PA",
    duration: "2:40",
    channelLogo: "https://yt3.ggpht.com/ytc/AIdro_l6dHAbHqmov1LTINuHcfZdXzVcV8dZCx6vZmos3CNYuzND=s88-c-k-c0x00ffffff-no-rj",
    link: "https://www.youtube.com/watch?v=h-ile9tMNM0"
  },
  
  {
    title: "Item Songs Dancing Nonstop | #itemsong ",
    channelName: "BestDJ",
    views: "9.2M Views",
    time: "11 months ago",
    thumbnail: "https://i.ytimg.com/vi/MCYqACY3GxU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAkQCzYs7nVPlB8OYbCaOJJ_iNazg",
    duration: "11:22",
    channelLogo: "https://yt3.ggpht.com/U7QCJY29m3wMPmnof7fJFj-RofvFxMNnOJu9CLxrjkmkvxt9ffMvGHMh8FZUM38NeNWAcTnEErQ=s68-c-k-c0x00ffffff-no-rj",
    link: "https://www.youtube.com/watch?v=MCYqACY3GxU"
  },
  
  {
    title: "4 Amazing locomotive Models made by using cardboard #train",
    channelName: "BumBin kreatif",
    views: "958k Views",
    time: "1 years ago",
    thumbnail: "https://i.ytimg.com/vi/CGRmOChz9R4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC9EFQaxXARssmcou0idUrGRGoFFA",
    duration: "1:06:23",
    channelLogo: "https://yt3.ggpht.com/dwy9Uuf8xPsVgiSVjK1RwfmDmjDJpacxB6S9xokwz3q6-iVc2gWSvK_8ky3sscoRrhAmCWlulck=s68-c-k-c0x00ffffff-no-rj",
    link: "https://www.youtube.com/watch?v=CGRmOChz9R4"
  },
  {
    title: "Top 10 Arduino Robots|| Arduino Projects || Drab Tech #arduino",
    channelName: "Drab Tech",
    views: "47k Views",
    time: "2 years ago",
    thumbnail: "https://i.ytimg.com/vi/8iw13B2a6io/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDxTj2w2mslxdEGXI7hp8u1ubyAMw",
    duration: "1:06:23",
    channelLogo: "https://yt3.ggpht.com/uVI3wTfAtNFez-Uz8XZn490DrlZQo0aGjFCt2oCtt8mjhh-H-IQpj_bKKn_ImhhStIMhFpZN4g=s68-c-k-c0x00ffffff-no-rj",
    link: "https://www.youtube.com/watch?v=8iw13B2a6io"
  },
  

  

];

const videoMainBox = document.querySelector(".video-sec-pc");

function VideoBox(video) {
  let  mainVideo = document.createElement('div');
  mainVideo.innerHTML = ` <a href="${video.link}">
                    <div class="video-box">
                        <div class="thumbnail"
                            style="background-image: url(${video.thumbnail});">
                            <div class="timer"
                                style="position: absolute; bottom: 
                6px; right: 6px; padding: 3px 6px; border-radius: 4px; background-color: rgba(0, 0, 0, 0.648); color: white; font-size: 0.8rem;">${video.duration}</div>
                        </div>
                        <div class="video-content">
                            <div class="channel-logo">
                                <div class="c-logo"
                                    style="width: 2.5vw; height: 2.5vw; background-color: black; border-radius: 50%; background-image: url(${video.channelLogo});">
                                </div>
                            </div>
                            <div class="channel-text">
                                <p style="font-size: 1vw; color: white; font-weight: 500;">${video.title}</p>
                                <p class="channel-name"
                                    style="font-size: 1vw; font-weight: 400; color: rgb(161, 151, 151);">${video.channelName}</p>
                                <p class="channel-views" style="font-size: 1vw; color: rgb(161, 151, 151);">${video.views} - ${video.time}</p>
                            </div>
                            <span style="color: white; font-size:1.5rem; margin-left:4vw;">&#8942;</span>
                           
                        </div>
                    </div>
                </a>`
  mainVideo.className = 'link-video'
  videoMainBox.appendChild(mainVideo)
}

for (let i = 0; i < videos.length; i++) {
  VideoBox(videos[i]);
}

const sidebar = document.querySelector(".side-bar")
const menu = document.querySelector(".menu-icon")
const videoSection = document.querySelector(".video-section")
const sidebartoggle = document.querySelector(".side-bar-toggle")
const videotoggle = document.querySelector(".link-video");

menu.addEventListener('click',()=>{{
  sidebar.classList.toggle("sidebar-none")
  videoSection.classList.add("video-section-toggle")
  sidebartoggle.classList.toggle("side-bar-toggle-none")
  videotoggle.classList.toggle("link-video-toggle")
}})



