const container = document.querySelector(".container");

let limit = 4;
let pageCount = 1;
let postCount = 1;


const getPost = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`);
    // console.log(response);
    const data = await response.json();
    //  console.log(data);

    data.map((ele, index) => {
        //  console.log(ele.title);
        const htmlData = `
           <div class="posts">
            <h2 class="post-id">${postCount++}</h2>
            <h2 class="title">${ele.title}</h2>
            <p class="post-info">${ele.body}</p>
        </div>`;

        container.insertAdjacentHTML("beforeend", htmlData)
    })
}
getPost();

const showData = () => {
    setTimeout(() => {
        pageCount++;
        getPost();
    }, 200)
}
window.addEventListener("scroll", () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 1) {
        // console.log("bottom");
        showData();
    }
    // console.log(scrollHeight, scrollTop + clientHeight);
})