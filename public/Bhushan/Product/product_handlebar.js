$(document).ready(function(e) {
    function dispalyitem(e) {
        //get data from server
        $.ajax({
            url: "/shops/",
            dataType: "json",
            type: "get",
            success: function(mydata) {

                var template = Handlebars.compile($("#tpl").html());
                $(".page").append(template(mydata));

            }
        });

    };
    dispalyitem(e);

    // for adding data (button click event)

    $("#add").on("click", function(e) {
        e.preventDefault();

        var item_name = $("#additem").val();
        var description = $("#desc").val();
        var Price = $("#price").val();

        $.ajax({
            url: "/shops",
            type: "post",
            data: {
                item_name, description, Price
            },
            success: function(result) {
                console.log(result);
                var template = Handlebars.compile($("#tpl").html());
                console.log(template([result]));
                $(".page").append(template([result]));
                $("#additem").val("");
                $("#desc").val("");
                $("#price").val("");

            }
        });
    });
    $(".page").on('click', '.glyphicon', function(e) {
        var cnfrm = confirm("Are you sure you want to delete it??");
        if (cnfrm === true) {
            var del_item = $(this).prop("id");

            var del_item1 = $(this).closest(".alert");

            $.ajax({

                url: '/shops/' + del_item,
                type: "DELETE",
                data: {
                    "id": del_item
                },
                success: function() {
                    console.log($(this));
                    del_item1.remove();
                }
            });
        }

    });

});
