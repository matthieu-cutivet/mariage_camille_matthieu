(function($){

    // load and fill information about the dataset
    function preprocessing_load_and_add_information_about_dataset(){
        $.getJSON("/data-preprocessing/get-info-about-dataset-dataset1/" , function(data){
            $("#current-dataset-name").text(data.name)  ;

            $("#info-box>span").each(function(){
                var info_name = $(this).attr("info-name");
                $(this).html("<strong>"+info_name + "</strong> : " + data[info_name]);
            }) ;
        });
    }

    // load and create DataTable object behind the Preprocessing - Features table
    function preprocessing_features_load_table(){
        // fill the features list
        $("#features-list>.card-body").load("/data-preprocessing/features-table-dataset1",function(){

        $(this).find("table").DataTable(
            {"paging" : false , "info":     false , "scrollY": "400px","scrollCollapse": true});

        });

    }

    // load and create empty cards for each graph and then run f_after
    function preprocessing_create_list_empty_graphs(f_after){
        $("#data-visualisation-graphs-ctn").load("/data-preprocessing/data-visualisation/load-empty-graph-cards");
        $("#feature-explanation-graphs-ctn").load("/data-preprocessing/feature-explanation/load-empty-graph-cards", f_after);

    }
    // fill a graph card by loading and adding the graph inside
    function preprocessing_load_and_add_graph(type){
        return function(){
            var id_graph = $(this).attr("id");
            $("#"+id_graph+">.pm-graph-ctn").load("/data-preprocessing/load-graph-"+id_graph+"-type-"+type);
        } ;

    }
    // Apply the previous function to all the graphs in the page
    function preprocessing_load_and_add_all_graphs(){
        $("#data-visualisation-graphs-ctn>.pm-graph-card").each( preprocessing_load_and_add_graph("dataviz")) ;
        $("#feature-explanation-graphs-ctn>.pm-graph-card").each( preprocessing_load_and_add_graph("feature-explanation")) ;
    }


    /*  Expand or reduce the side-toolbar when hover */
    $(document).ready(
    function()
    {

        // side toolbar reduce / expends
        $("#pm-side-toolbar-container").on("mouseenter"  ,
            function(e){
                    $(this).removeClass("reduced") ;
                    $("#pm-central-container").addClass("reduced");
            }
        ).on("mouseleave" ,
            function(e){
                    $(this).addClass("reduced") ;
                    $("#pm-central-container").removeClass("reduced");
            }
        ) ;

        // remove all the showed pm-temporary-showed if we click somewhere
        $(document).on("click", function(){
            //$(".dropdown-menu.pm-showed").removeClass("pm-showed").addClass("pm-hidden");
            $(".pm-temporary-showed").removeClass("pm-temporary-showed").addClass("pm-hidden");
        });

        // manage temporary showed element
        $(".pm-temporary-show-button").on("click" , function(event){
            var target_id =  $(this).attr("target-id") ;


            if (! $("#"+target_id).hasClass("pm-temporary-showed"))
            {
                // we clear everything in case an other dropdown is opened
                $(".pm-temporary-showed").removeClass("pm-temporary-showed").addClass("pm-hidden");
                $("#"+target_id).removeClass("pm-hidden").addClass("pm-temporary-showed");
                // stop every other methods
                event.stopImmediatePropagation();
            }
            else
            {
                $("#"+target_id).removeClass("pm-temporary-showed").addClass("pm-hidden");
            }

        }) ;

        // manage the reducing of cards :
        $("*").on("click",".pm-extend-button", function(event){

            var id_target = $(this).attr("target");
            $("#"+id_target).removeClass("reduced");

            // turn extend button into reduce button
            $(this).removeClass("pm-extend-button").addClass("pm-reduce-button");
            event.preventDefault();
            event.stopPropagation();
        });
        $('*').on("click",".pm-reduce-button", function(event){

            var id_target = $(this).attr("target");
            $("#"+id_target).addClass("reduced");

            // turn reduce button into extdend button
            $(this).addClass("pm-extend-button").removeClass("pm-reduce-button");
            event.preventDefault();
            event.stopPropagation();
        });

        preprocessing_load_and_add_information_about_dataset();

        preprocessing_features_load_table();

        // load the list of empty graph cards and then load and add all the graphs
        preprocessing_create_list_empty_graphs(preprocessing_load_and_add_all_graphs) ;

    }
    );
}
)(jQuery) ;