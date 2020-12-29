$("#waVYHSaBUHRcaFlgCHUha4wR0JwUXc").off("click");
$("#waVYHSaBUHRcaFlgCHUha4wR0JwUXc").on("click",
         function(event){
                $("#id_main_body_ctn").prepend("<div id = 'FVCr5CmQ4vKGLhkfaSjzOlvfkAX4VU'  class='PyWebWidget PWW_flex_container PWW_pop_up fade show' style = 'top : 0px;flex-shrink : 0;width : 100vw;height : 100vh;background-color : rgba(0,0,0,0.4);flex-grow : 1;left : 0px;flex-direction : column ;overflow-x : hidden ;overflow-y : hidden ;position : absolute ; align-items : center ; justify-content : center ; z-index : 1000 ; '  ><div id = 'yL3FP8g8Ql1VGGMczqG4HpxPp64zvO'  class='PyWebWidget PWW_flex_container PWW_card' style = 'padding-bottom : 30px;min-width : 30%;flex-shrink : 0;padding-right : 20px;padding-left : 20x;padding-top : 10px;margin-bottom : 0px;margin : 30px;flex-grow : 0;flex-direction : column ;overflow-x : hidden ;overflow-y : hidden ;align-items : stretch ; '  ><div id = 'kWRqc9C3O2Wo76c2hjLnAsms9KYwct'  class='PyWebWidget PWW_flex_container border-bottom' style = 'color : rgb(0,64,113);padding-bottom : 5px;flex-shrink : 0;margin-right : 0px;margin-left : 0px;margin-bottom : 20px;flex-grow : 0;flex-direction : row ;overflow-x : visible ;overflow-y : visible ;align-items : center ; font-size : 1.4rem;'  >             <p id = 'UfEFWFCOEatKZo4I4DjOn6HjmvEFyQ'  class='PyWebWidget' style = 'margin-bottom : 0px;font-size : 80%;flex-shrink : 0;flex-grow : 0;' >                 Create new project             </p>                      <div  id = '9xJ9DjEBoqgeE7eC8r10JYqzOBnqpR'  class='PyWebWidget' style = 'flex-grow : 1;'  ></div>                          <a id = 'e9LI3j3QuDKnKJiDCTOxaTlJAkyl08'  class='PyWebWidget' style = 'margin-left : 0px;flex-shrink : 0;flex-grow : 0;'  href = '#'><i class='fas fa-times'></i></a>                 </div>             <form id = 'new_project_form'  class='PyWebWidget' style = 'margin-bottom : 20px;margin-top : 20px;flex-shrink : 0;flex-grow : 1;flex-grow : 1;'  action = '' method = post>                 <div id = 'GkwQc5TFl3NoH1gkXlgwlAdqINSB3q'  class='PyWebWidget PWW_flex_container' style = 'flex-shrink : 0;flex-grow : 1;flex-direction : column ;overflow-x : hidden ;overflow-y : hidden ;align-items : stretch ; '  ><div id = 'f7y8YlPv9rFufV6wLBsCvgO624ouod'  class='PyWebWidget PWW_flex_container' style = 'margin-bottom : 1.0rem;flex-shrink : 0;flex-grow : 1;flex-direction : column ;overflow-x : hidden ;overflow-y : hidden ;align-items : stretch ; '  >             <p id = 'JB4I9mp2tjuVhdndLRVYNU3NoiZ5RQ'  class='PyWebWidget' style = 'flex-shrink : 0;flex-grow : 1;margin-bottom: .5rem;' >                 Project name:             </p>                      <input id = 'name'  class='PyWebWidget PWW_input form-control PWW_text_field' style = 'flex-shrink : 0;flex-grow : 1;'  name='name' required type='text' value=''>                      <p id = 'error_message_name'  class='PyWebWidget form_error_message' style = 'color : rgb(255,0,0);flex-shrink : 0;flex-grow : 1;' >                              </p>         </div>             <input id = 'EcX0aDrv36V7EZ8yrSxwGxLD0hneNQ'  class='PyWebWidget PWW_input btn btn-outline-info PWW_submit_field' style = 'flex-shrink : 0;flex-grow : 1;'  type='submit' value = 'Create'>                      <p id = 'error_message_new_project_form'  class='PyWebWidget form_error_message' style = 'color : rgb(255,0,0);flex-shrink : 0;flex-grow : 1;' >                              </p>         </div>              </form>         </div></div>");

                $('html').click(function(event) {
                      /* if clicked element is not your element and parents aren't your div */
                      if (event.target.id != 'yL3FP8g8Ql1VGGMczqG4HpxPp64zvO' && $(event.target).parents('#yL3FP8g8Ql1VGGMczqG4HpxPp64zvO').length == 0) {
                           $("#FVCr5CmQ4vKGLhkfaSjzOlvfkAX4VU").remove();
                           event.stopImmediatePropagation();
                       }
                });

                $("#yL3FP8g8Ql1VGGMczqG4HpxPp64zvO").off("remove");
                $("#yL3FP8g8Ql1VGGMczqG4HpxPp64zvO").on("remove",
                        function(event){
                            $("#FVCr5CmQ4vKGLhkfaSjzOlvfkAX4VU").remove();
                            event.stopImmediatePropagation();
                            }
                );

                $("#e9LI3j3QuDKnKJiDCTOxaTlJAkyl08").off("click");
                $("#e9LI3j3QuDKnKJiDCTOxaTlJAkyl08").on("click",  function(event){
                    $("#yL3FP8g8Ql1VGGMczqG4HpxPp64zvO").remove();
                    event.stopImmediatePropagation();
                }    );

                $('#new_project_form').off('submit');
                $('#new_project_form').on('submit', function(event){
                       event.preventDefault();
                        $.post(
                        /* url to post */
                        '/create_new_project/',
                         /* data to be posted as a dictionnary */
                         $('#new_project_form').serialize(),
                         /*  Function to be run with the result data
                         the answer has to be a JSON with a javascript property to be executed */
                         function run_data_dot_javascript(data){
                            if(typeof(data.javascript) == "undefined"){
                                return;                             }
                            if(data.javascript != ""){
                                eval(String(data.javascript));
                            }
                         },
                         'json' /* I expect a JSON response */
                         );
                         return false;
                });

                event.stopImmediatePropagation();
            }
        );


function webWidget_update_element(id){
	(function($){
	    $.getJSON(url = "/PyWebWidget/get_content_of_"+id+"/" ,
            success = function(answer){

                var target = $("#"+id) ;

                /* Check if this id does exist */
                if(target.length == 0) {
                    console.error('Failure in updating : unknown id = '+id);
                    return;
                }

                /* check if update is necessary */
				if(typeof(answer.version) == "undefined"){
					alert("(typeof(answer.version) == 'undefined')");
					return;
				}
				if( String(answer.version) != String(target.attr("version"))){

                    /* Update class */
                    if(typeof(answer.class) == "undefined"){
                        alert("(typeof(answer.class) == 'undefined')");
                        return;
                    }
                    target.attr("class",String(answer.class));

                    /* Update style */
                    if(typeof(answer.style) == "undefined"){
                        alert("(typeof(answer.style) == 'undefined')");
                        return;
                    }
                    target.attr("style",String(answer.style));

                    /* Update inner html */
                    if(typeof(answer.inner_html) == "undefined"){
                        alert("(typeof(answer.inner_html) == 'undefined')");
                        return;
                    }
                    target.html(String(answer.inner_html));

                    /* Update javascript */
                    if(typeof(answer.javascript) == "undefined"){
                        alert("(typeof(answer.javascript) == 'undefined')");
                        return;
                    }
                    if(answer.javascript != ""){
                        eval(String(answer.javascript));
                    }


                    /* Update version */
                    target.attr("version",String(answer.version));

				}

	        }
	     );

	
	})(jQuery) ;
}

function webWidget_check_versions_of_all_elements(){
	(function($){
	    $.getJSON(url = "/PyWebWidget/get_version_of_all_elements/" ,
            success = function(answer){

                /* for each PyWebWidget element, check if the version is up-to-date*/
                $(".PyWebWidget").each(function(){
                    var id = $(this).attr("id") ;

                    /* check if the version of this object is present */
                    if(typeof(answer[id]) == "undefined"){
                         console.log("Unknown version for id : "+id);
                         return;
                    }


                    if( String(answer[id]) != String($(this).attr("version"))){
                        webWidget_update_element(id);
                    }

                });
            }
	
	    );
	

    })(jQuery) ;
}

/* Launch the loop to update elements */
(function($){
    $(document).ready(
        function(){
            /*
            var refreshId =  setInterval(webWidget_check_versions_of_all_elements,1000);
            */
        }
    );
})(jQuery) ;