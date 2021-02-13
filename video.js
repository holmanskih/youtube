const videoData = [
    {
        title: "Title1",
        description: "Description1",
        url: "url",
    
        // новый обьек user
        user: {
            name: "Username",
            subscribers: 1000,
        },
    },
    {
        title: "Title2",
        description: "Description1",
        url: "url",
    
        // новый обьек user
        user: {
            name: "Username",
            subscribers: 1000,
        },
    },
    {
        title: "Title3",
        description: "Description1",
        url: "url",
    
        // новый обьек user
        user: {
            name: "Username",
            subscribers: 1000,
        },
    },
];

const listCnt = document.getElementById("list_cnt");

const renderVideoItem = (title, description) => `
    <li>
        <p class="content_title">${title}</p>
        <span class="content_description">${description}</span>
    </li>
`

const renderVideoList = () => {
    let htmlItems = '';
    videoData.forEach(videoItem => {
        let htmlItem = renderVideoItem(videoItem.title, videoItem.description);

        // add new child to html string structure
        htmlItems += htmlItem;
    });
    listCnt.innerHTML = htmlItems;
}

renderVideoList();
// for-of