
setTimeout("alert('WelCome To My Product-Page !!!');", 1000);
$('document').ready(function(e) {
    function dispalyitem(e) {

        var items = [];
        $.getJSON('/shops/', function(data) {
            console.log("success");
            items.push('<div id="maindiv">');
            $.each(data, function(key, val) {
                items.push('<div class="alert alert-info"> \
                <button id=' + val.id + ' type="button" class="btn btn-default pull-right">X</button> \
                <h4> <strong>' + val.additem + '</strong><button type="button" class="btn btn-primary pull-right">$' + val.price + '</button> </h4> \
                <p>' + val.description + '</p>\
                </div>');
                $('<div>', {
                    html: items.join("")
                }).appendTo("#d1");
            });
            items.push('</div>');
        })
    };
    dispalyitem(e);

    //append data on current page

    $("#add").on('click', function(e) {
        
        e.preventDefault();
        var x = {
            additem: $("#additem").val(),
            description: $("#description").val(),
            price: $("#price").val(),
        };
        console.log(x);
        $.ajax({
            url: "/shops",
            type: "post",
            data: x,
            success: function(result) {
                console.log(result);
                var additem1 = result.additem;
                var desc1 = result.description;
                var price1 = result.price;
                $("#d1").append('<div><div class="alert alert-info"> \
                <button id=' + result.id + ' type="button" class="btn btn-default pull-right">X</button> \
                <h4 > <strong> ' + additem1 + '</strong> <button type="button" class="btn btn-primary pull-right"> $' + price1 + '</button> </h4> \
                <p>' + desc1 + '</p>\
                </div></div>');
                $("#additem").val("");
                $("#description").val("");
                $("#price").val("");

                setTimeout("alert(' Congretulation !!! Item Is Sucessfully Enter !!!');", 2000);
            }
        });
    });

    //delete data
    $("div").on('click', '.btn-default', function(e) {
        var removeName = confirm("Are you sure you want to delete the item?");
        if (removeName === true) {
            var item = $(this).prop('id');
            console.log(item);
            var item2 = $(this).closest('div.alert');
            console.log(item2);
            $.ajax({
                url: '/shops/' + item,
                type: "DELETE",
                data: {
                    "id": item
                },
                success: function() {
                    console.log($(this));
                    item2.remove();
                    setTimeout("alert(' Item Is Remove From The DATABASE. Thank you !!');", 2000);

                }
            });
        }

    });
});
