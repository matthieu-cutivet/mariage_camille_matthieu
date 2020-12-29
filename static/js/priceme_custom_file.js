(function($){

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
            $("#"+id_target).removeClass("pm-reduced");

            // turn extend button into reduce button
            $(this).removeClass("pm-extend-button").addClass("pm-reduce-button");
            event.preventDefault();
            event.stopPropagation();

        });
        $('*').on("click",".pm-reduce-button", function(event){

            var id_target = $(this).attr("target");
            $("#"+id_target).addClass("pm-reduced");

            // turn reduce button into extdend button
            $(this).addClass("pm-extend-button").removeClass("pm-reduce-button");
            event.preventDefault();
            event.stopPropagation();
        });
    }
    );
}
)(jQuery) ;


// Requirements :
// 1) submit button of class pm-submit-button
// 2) error message ctn of class : pm-error-message
function pm_form_submit_management(form_id ,url_post, frequence_update_answer , function_when_validated){
    (function($){
        $( "#"+form_id ).submit(function( event ) {

           $("#"+form_id+" .pm-error-message").text("");
           $("#"+form_id+" .pm-submit-button").html('<i class="fas fa-spinner fa-spin"></i>');
           $("#"+form_id+" .pm-submit-button").prop("disabled",true);

           var  form_serie = $(this).serialize();

           $.post(url = url_post ,
                    data = form_serie ,
                    success = function(answer){

				if(typeof(answer.url) == "undefined"){
					alert("(typeof(answer.url) == 'undefined'). "+url_post);
				}

			   var url_to_check = answer.url ;

				var refreshId =  setInterval(function(){

					$.getJSON(url_to_check, success = function(data)
					{


					if(typeof(data.status) == "undefined"){
						alert("typeof(data.status) == 'undefined'). "+url_post);
					}
					if(typeof(data.log) == "undefined"){
						alert("typeof(data.log) == 'undefined')."+url_post);
					}

					if(data.status == "failure"){

						$("#"+form_id+" .pm-error-message").text(data.log);
						$("#"+form_id+" .pm-submit-button").html("Submit");
						$("#"+form_id+" .pm-submit-button").prop("disabled",false);
						clearInterval(refreshId);

					}
					else if(data.status == "success"){

						function_when_validated();

						$("#"+form_id+" .pm-error-message").text("");
						$("#"+form_id+" .pm-submit-button").html("Submit");
						$("#"+form_id+" .pm-submit-button").prop("disabled",false);

                        clearInterval(refreshId);
					}
			   });},frequence_update_answer );});



          event.preventDefault();
        });

    })(jQuery);
    }

function automatic_check_version_and_reload(url_get_version ,frequence_update, reload_function,name = "" ) {
    (function($){

        var id_loop =Math.random()  ;

        centralised_dictionnary[url_get_version+"#"+name] =id_loop  ;

        var last_version_update = 0 ;

        var refreshId = setInterval(function(){

            if(id_loop != centralised_dictionnary[url_get_version+"#"+name])
            {
                clearInterval(refreshId);
            }

            $.getJSON( url_get_version ,success = function(answer){

            if(typeof(answer.version) == "undefined"){
                alert("Current version is nan : "+url_get_version);
            }

            current_version = parseInt(answer.version);

            if(isNaN(current_version)){
                alert("Current version is nan : "+url_get_version);
            }

            if(parseInt(last_version_update) < current_version){
                reload_function();
                last_version_update = current_version ;
            }

            });


        }, frequence_update);

    })(jQuery);

}


function load_when_ready(url_to_load ,frequence_update, id_or_class_to_reload , class_or_id,event_to_fire_when_finished= "" ) {
    (function($){

        var spinner = $("#spinner").html();

        if(class_or_id=="class"){
            $("."+id_or_class_to_reload).html(spinner);
        }
        else{
            $("#"+id_or_class_to_reload).html(spinner);
        }

        function get_and_kill_interval(refreshId){
            $.get( url_to_load ,success = function(answer){

                if(typeof(answer) != "string"){
                    alert('typeof(answer) =',typeof(answer)," || ", answer);

                }

                if(answer != "__empty__"){
                    if(class_or_id=="class"){
                        $("."+id_or_class_to_reload).html(answer);
                    }
                    else{
                        $("#"+id_or_class_to_reload).html(answer);
                    }

                    if(!(typeof refreshId === 'string')) {
                        clearInterval(refreshId);

                    }

                    if(event_to_fire_when_finished != ""){
                        $(document).trigger(event_to_fire_when_finished);
                    }

                    return "ok";

                }
                else{
                    return "wait";
                }


            });
        }

        if(get_and_kill_interval(refreshId="")!="ok"){
            var refreshId = setInterval(function(){get_and_kill_interval(refreshId);}, frequence_update);
        }


    })(jQuery);

}

function quit_management_function(id_button , class_or_id_button,class_or_id_target){
    (function($){
        var prefixe = "#" ;
        if( class_or_id_button=="class"){
            prefixe = ".";
        }
        $(prefixe+id_button).on("click",function(){
          target_id = $(this).attr("target_id") ;
          if(class_or_id_target=="id"){
            $("#"+target_id).addClass("pm-hidden");
          }
          else{
            $("."+target_id).addClass("pm-hidden");
          }
       });
    })(jQuery);

}

function show_element_if_click_on_button(id_button , id_to_show, hide_if_click_again = false){
    (function($){
        $("#"+id_button).on("click", function(event){
            if($("#"+id_to_show).hasClass("pm-hidden") ){
              $("#"+id_to_show).removeClass("pm-hidden");
              event.preventDefault();
              event.stopPropagation();
            }
            else{
                if(hide_if_click_again){
                  $("#"+id_to_show).addClass("pm-hidden");
                  event.preventDefault();
                  event.stopPropagation();
                }
            }
        });

    })(jQuery);

}

function hide_element_when_click_outside(id){

    (function($){
        $(document).on("click",function(e)
        {
            var container = $("#"+id);

            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0)
            {
                container.addClass("pm-hidden");
            }
        });
    })(jQuery);

}