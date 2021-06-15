function myfun(data) {
    var blogcontent = document.querySelector('#blogcontent');
    var myhtml = "";
    myhtml += data.blog_data.Content;
    blogcontent.innerHTML += myhtml;
    var title = document.querySelector("#title");
    title.innerHTML += data.blog_data.Title;
    var date = document.querySelector("#date");
    date.innerHTML += new Date(data.blog_data.CreatedDate).toDateString();
    var author = document.querySelector("#author");
    author.innerHTML += data.blog_data.AuthorName;
    // var topimage = document.querySelector("#topimage");
    // topimage.children[0].src = 'http://localhost:8000/api/v1/image/' + data.blog_data.FileName;
}
fetch('https://codingclubnitm.herokuapp.com/api/v1/blog/6061f82ede79f800040f1d5a', )
    .then(response => response.json())
    .then(data => myfun(data));