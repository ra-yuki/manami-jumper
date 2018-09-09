var targetNode = document.getElementById("container");
var config = {childList: true, subtree: true};
var injectHTML = "<a href=\"http://localhost:8080/manami?q=@q&k=@k\" class=\"btn btn-danger\" target=\"_blank\">▶</a>";

var callback = function(mutationsList) {
    var docs = document.getElementsByTagName("span");
    for(var i=0; i<docs.length; i++){
        var condition = !docs[i].innerHTML.includes(injectHTML);
        var regex = /^[a-zA-Z' ]+$/g;
        var condition2 = docs[i].innerText.match(regex) != null;
        var condition3 = docs[i].innerText != "HOME" && docs[i].innerText != "STUDY" && docs[i].innerText != "ROOM" && docs[i].innerText != "LOG" && docs[i].innerText != "TRY" && docs[i].innerText != "STUDY" && docs[i].innerText != "SETTING";

        if(condition && condition2 && condition3)
            docs[i].innerHTML += injectHTML.replace("@q", "ted").replace("@k", docs[i].innerText);
    }

    //injecting css to existing tag
    var username = document.getElementsByClassName("l_header_user_name")[0];
    username.setAttribute("class", username.getAttribute("class")+" text-center");

};

var observer = new MutationObserver(callback);

observer.observe(targetNode, config);