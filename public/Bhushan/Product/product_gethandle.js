$(document).ready(function() {
    $.ajax({
        url: "/shops",
        method: "GET",
        success: function(data) {
            console.log($(this));
            var source = $("#get-template").html();
            console.log(source);
            var template = Handlebars.compile(source);
            console.log(template);
            var temp = template(data);
            console.log(temp);
            $("#d1").append(temp);
        }
    });
    $(".btn").on("click", function(e) {
        console.log($(this));
        var name = $("#itemName").val();
        console.log(name);

        var description = $("#itemDescription").val();
        console.log(description);

        var price = $("#itemPrice").val();
        console.log(price);

        $.ajax({
            url: "/shops",
            method: "POST",
            data: {
                itemName: name,
                itemDescription: description,
                itemPrice: price
            },
            success: function(data) {
                console.log($(this));
                var name = $("#itemName").val();
                console.log(name);

                var description = $("#itemDescription").val();
                console.log(description);

                var price = $("#itemPrice").val();
                console.log(price);

                var source = $("#get-template").html();
                console.log(source);

                var template = Handlebars.compile(source);
                console.log(template);

                var temp = template([data]);
                console.log(temp);
                console.log($("#d1").append(temp));
            }
        });
        e.preventDefault();
    });
    $("#d1").on('click', '.glyphicon', function(e) {
        console.log($(this));
        var cnfrm = confirm("Are you sure you want to delete it??");
        console.log(cnfrm);
        if (cnfrm === true) {
            var x = $(this).prop("id");
            console.log(x);
            $.ajax({
                url: '/shops/' + x,
                type: "DELETE",
                success: function() {
                    console.log($(this));
                    console.log($("#d1 div.well:has(span[id=" + x + "])").remove());


                }
            });
        }

    });
});
// var name = $("input[name=itemName]").val();
// description = $("input[name=itemDescription]").val("");
// $("#d1").on("click", function(e) {
//     var a = e.target;
//     if (e.target.nodeName === "SPAN") {
//         var x = a.id;
//         $.ajax({
//             url: "/products/" + x,
//             method: "DELETE",
//             success: function(data, textStatus) {
//                 if (textStatus === "success") {
//                     $("#d1 div.well:has(span[id=" + x + "])").remove();
//                 }
//             }
//         });
//     }
// });
// var del_item1 = $(this).closest(".alert");
