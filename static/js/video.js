$(function() {
    $("#playlist li").on("click", function() {
        $("#videoarea").attr({
            "src": $(this).attr("title"),
            "data-image": "",
            "autoplay": "autoplay"
        })
    })
    $("#videoarea").attr({
        "src": $("#playlist li").eq(0).attr("titlr"),
        "data-image": $("#playlist li").eq(0).attr("data-image")
    })
})


