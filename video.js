const readFromJSON = () => JSON.parse(data);
let videoData = readFromJSON();

const listCnt = document.getElementById("list_cnt");
const mainVideo = document.getElementById("main_video");
const videoTitle = document.getElementById("video_title");
const videoDescription = document.getElementById("video_description");

// videoItem - обьект с json 
const updateHTMLVideoData = (videoItem) => {
    mainVideo.src = `https://www.youtube.com/embed/${videoItem.id}`;
    videoTitle.innerHTML = videoItem.title;
    videoDescription.innerHTML = videoItem.description;
}

updateHTMLVideoData(videoData[0]);

const renderVideoItem = (title, description, videoId) => `
    <li onclick="onVideoItemClick('${videoId}')">
        <p class="content_title">${title}</p>
        <span class="content_description">${description}</span>
    </li>
`

const renderVideoList = () => {
    console.log(videoData);

    let htmlItems = '';
    videoData.forEach(videoItem => {
        let htmlItem = renderVideoItem(videoItem.title, videoItem.description, videoItem.id);

        // add new child to html string structure
        htmlItems += htmlItem;
    });
    listCnt.innerHTML = htmlItems;
}


renderVideoList();

const onVideoItemClick = (videoId) => {

    // искать видео по json с таким же videoId

    // название функции .find(название элемента) => 
    let videoItem = videoData.find(element => element.id == videoId);
    console.log(videoItem);
    
    updateHTMLVideoData(videoItem);
    // заменить все html данные
}


const find = () => {
    for(let element in videoData) {
        if (element.id == videoId) {
            return element;
        }
    }
}