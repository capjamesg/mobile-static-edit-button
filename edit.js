if (window.location.pathname == "/mobile-edit") {
  localStorage.setItem("enabled-editing-mode", "true");
}
if (localStorage.getItem("enabled-editing-mode") == "true") {
    var editLinkButton = document.getElementById("edit-link");
    editLinkButton.style.display = "inline";
    editLinkButton.style.visibility = "visible";
  
    var url = window.location.href;
    var githubUrl = "github://github.com/capjamesg/jamesg.blog/";
    var postMatch = url.match(/https:\/\/jamesg\.blog\/(\d{4})\/(\d{2})\/(\d{2})\/([^\/]+)/);
    var gh_url = null;
    if (postMatch) {
        var year = postMatch[1];
        var month = postMatch[2];
        var day = postMatch[3];
        var slug = postMatch[4];
        var gh_url = `${githubUrl}/tree/main/pages/posts/${year}-${month}-${day}-${slug}.md`;
    }
    var exampleMatch = url.match(/https:\/\/jamesg\.blog\/([^\/]+)/);
    var dataFormat = document.body.getElementsByClassName("file-format");
    if (dataFormat.length > 0 && dataFormat[0].value == "markdown") {
        var format = "md";
    } else {
        var format = "html";
    }
    if (exampleMatch && !gh_url) {
        var example = exampleMatch[1];
        var filename = `${encodeURIComponent(example)}.${format}`;
        var title = encodeURIComponent(example);
        var capitalized_title = String(filename).charAt(0).toUpperCase() + String(title).slice(1);
        var capitalized_title = capitalized_title.replace(/-/g, " ");
        var value = `---\nlayout: default\ntitle: ${capitalized_title}\npermalink: /${example}/\n---\n\n<h1>${capitalized_title}</h1>\n\n<p></p>`;
        var value = encodeURIComponent(value);
        if (document.body.innerText.includes("Page Not Found")) {
            var gh_url = `${githubUrl}/tree/main/pages/templates/wiki/?filename=${filename}&value=${value}`;
        }
        var gh_url = `${githubUrl}/tree/main/pages/templates/wiki/${filename}`;
    }
    editLinkButton.href = gh_url;
}
