const videos = [
    {
        videoLink: "https://www.youtube.com/watch?v=QeItWvGFoqQ",
        thumbnail: "https://i.ytimg.com/vi/QeItWvGFoqQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLAPbLhWx2oOfh6IbUsuiWMBdNGKyQ",
        content: {
            channelName: "Ishtar Music",
            views: "1.2M",
            channelLogo: "https://yt3.ggpht.com/_2stKAroIlWX3mlvvTTtrUhZHkgK9GaIlJNsBTsces6EhFTvFN9Hqt5kNJZW_FHyDBIz3JJA4g=s68-c-k-c0x00ffffff-no-rj"
        }
    },
    {
        videoLink: "https://www.youtube.com/watch?v=efgh5678",
        thumbnail: "https://img.youtube.com/vi/efgh5678/maxresdefault.jpg",
        content: {
            channelName: "Fitness Pro",
            views: "850K",
            channelLogo: "https://example.com/fitnesspro-logo.jpg"
        }
    },
    {
        videoLink: "https://www.youtube.com/watch?v=ijkl9101",
        thumbnail: "https://img.youtube.com/vi/ijkl9101/maxresdefault.jpg",
        content: {
            channelName: "Cooking Magic",
            views: "2.5M",
            channelLogo: "https://example.com/cookingmagic-logo.jpg"
        }
    }
  ];
  
  // Select the container where videos will be added
  const videoContainer  = document.querySelector(".video-sec-pc");
  
  // Loop through the videos array and create elements
  videos.forEach(video => {
    const videoDiv = document.createElement("div");
    videoDiv.classList.add("link-video")

  
    videoDiv.innerHTML = `
        <a href="${video.videoLink}" target="_blank">
            <img src="${video.thumbnail}" alt="Thumbnail">
        </a>
        <div class="video-info">
            <img src="${video.content.channelLogo}" alt="Channel Logo">
            <div>
                <strong>${video.content.channelName}</strong>
                <p>${video.content.views} views</p>
            </div>
        </div>
    `;
  
    // Append the video div to the container
    videoContainer.appendChild(videoDiv);
  });