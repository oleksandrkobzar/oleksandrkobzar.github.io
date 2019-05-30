if (localStorage.getItem("n") < 1) localStorage.setItem("n", 1);

function validation() {
    if(document.getElementById("user-name").value == "") return false;
    if(document.getElementById("user-email").value == "") return false;
    if(document.getElementById("user-title").value == "") return false;
    if(document.getElementById("user-text").value == "") return false;
    return true;
}

function setData() {
    if(validation()){
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
        n++;
        localStorage.setItem("n", n);
    }
}

function updateData(temp) {
    const user = {
        name: document.getElementById("user-name").value,
        email: document.getElementById("user-email").value,
        title: document.getElementById("user-title").value,
        text: document.getElementById("user-text").value
    };
    localStorage.setItem(temp, JSON.stringify(user));
}

function getData() {
    var n = parseInt(localStorage.getItem("n"));
    var data = document.getElementById("data");
    for (var i = 1; i < n; i++) {
        let temp = "user" + i;       
        console.log(temp);
        var obj2 = JSON.parse(localStorage.getItem(temp));
        if(obj2 != null){
            console.log(obj2);
            let tr = document.createElement("tr");
            tr.innerHTML = "<th scope='row' id='data-name'>" + obj2.name + "</th><td id='data-email'>" + obj2.email + "</td><td id='data-title'>" + obj2.title + "</td><td id='data-text'>" + obj2.text + "</td><td><button type='submit' class='btn edit-storage' data-toggle='modal' data-target='#exampleModal' value='" + temp + "'><i class='far fa-edit'></i></button></td><td><button type='submit' class='delete-storage btn' value='" + temp + "'><i class='far fa-trash-alt'></i></button></td><td class='data-id'>" + temp + "</td>";
            data.appendChild(tr);
        }
        
    }
}

function insertData(temp) {
    var obj2 = JSON.parse(localStorage.getItem(temp));
    document.getElementById("user-name").value = obj2.name;
    document.getElementById("user-email").value = obj2.email;
    document.getElementById("user-title").value = obj2.title;
    document.getElementById("user-text").value = obj2.text;
    document.getElementById("save-change").value = temp;
}

function removeKey(key) {
    localStorage.removeItem(key);
}

function daleteAll(){
    localStorage.clear();
    var data = document.getElementById("data");
    let tr = document.createElement("tr");
    tr.innerHTML = "";
    data.appendChild(tr);
    window.location.reload();
}

$(function() {

    $(document).on("click", ".delete-storage", function() {
        removeKey($(this).attr("value"));
        window.location.reload();
    });

    $(document).on("click", ".edit-storage", function() {
        insertData($(this).attr("value"));
    });

    $('#save-change').click(function() {
        console.log($(this).attr("value"));
        updateData($(this).attr("value"));
        window.location.reload();
    });

    $('#show-data').click(function() {
        $('.table-data').fadeIn();
        $('#delete-all').fadeIn();
    });

    $('.button-contact-us').click(function(){
        window.location.replace('#need-a-project');
    });

    $('body').append('<a href="#" id="pg-up-button"><i class="fas fa-chevron-up"></i></a>');

    $.fn.scrollToTop = function() {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() >= "250")
            $(this).fadeIn("slow");
        var scrollDiv = $(this);
        $(window).scroll(function() {
            if ($(window).scrollTop() <= "250") {
                $(scrollDiv).fadeOut("slow");
            } else {
                $(scrollDiv).fadeIn("slow");
            }
            if ($(window).scrollTop() <= "50") {
                $(".navbar").css({ "background": "transparent", "height": "100px" });
            } else {
                $(".navbar").css({ "background": "#E2E3E7", "height": "70px" });
            }
        });
        $(this).click(function() {
            $("html, body").animate({ scrollTop: 0 }, "slow")
        })
    }

    $("#pg-up-button").scrollToTop();
});