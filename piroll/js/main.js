if (localStorage.getItem("n") < 1) localStorage.setItem("n", 1);


function setData() {
    var temp = "user";
    const user = {
        name: document.getElementById("user-name").value,
        email: document.getElementById("user-email").value,
        title: document.getElementById("user-title").value,
        text: document.getElementById("user-text").value
    };
    var n = localStorage.getItem("n");
    temp = temp + n;
    localStorage.setItem(temp, JSON.stringify(user));
    sessionStorage.setItem(temp, JSON.stringify(user));
    n++;
    localStorage.setItem("n", n);
    getData();
}


function getData() {
    var temp = "user";
    var node = document.createElement("p");
    var n = localStorage.getItem("n");

    for (var i = 1; i < n; i++) {
        var temp = "user";
        temp = temp + i;
        var obj2 = JSON.parse(sessionStorage.getItem("user1"));
        var textnode = document.createTextNode(temp + " = {" + "name: " + obj2.name + " email: " + obj2.email + " title: " + obj2.email + " text: " + obj2.text + " }");
        node.appendChild(textnode);
        document.getElementById("data").appendChild(node);
    }
}

$(function() {

    $('body').append('<a href="#" id="pg-up-button"><i class="fas fa-chevron-up"></i></a>');

    $.fn.scrollToTop = function() {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() >= "250")
            $(this).fadeIn("slow");
        var scrollDiv = $(this);
        $(window).scroll(function() {
            if ($(window).scrollTop() <= "250") {
                $(scrollDiv).fadeOut("slow")
                $(".navbar").css({ "background": "transparent", "height": "100px" });
            } else {
                $(scrollDiv).fadeIn("slow")
                $(".navbar").css({ "background": "#E2E3E7", "height": "70px" });
            }
        });
        $(this).click(function() {
            $("html, body").animate({ scrollTop: 0 }, "slow")
        })
    }

    $("#pg-up-button").scrollToTop();
});