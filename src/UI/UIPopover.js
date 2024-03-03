// todo change to apps popover or sth
function UIPopover(options){
    // skip if popover already open
    if(options.parent_element && $(options.parent_element).hasClass('has-open-popover'))
        return;

    $('.window-active .window-app-iframe').css('pointer-events', 'none');

    global_element_id++;

    options.content = options.content ?? '';

    let h = '';
    h += `<div id="popover-${global_element_id}" class="popover">`;
        h += options.content;
    h += `</div>`;

    $('body').append(h);


    const el_popover = document.getElementById(`popover-${global_element_id}`);

    $(el_popover).show(0, function(e){
        // options.onAppend()
        if(options.onAppend && typeof options.onAppend === 'function'){
            options.onAppend(el_popover);
        }
    })

    let x_pos;
    let y_pos;

    if(options.parent_element){
        $(options.parent_element).addClass('has-open-popover');
    }
    $(el_popover).on("remove", function () {
        if(options.parent_element){
            $(options.parent_element).removeClass('has-open-popover');
        }
    })

    function position_popover(){
        // X position
        const popover_width = options.width ?? $(el_popover).width();
        if(options.center_horizontally){
            x_pos = window.innerWidth/2 - popover_width/2 - 15;
        }else{
            if(options.position === 'bottom' || options.position === 'top')
                x_pos = options.left ?? ($(options.snapToElement).offset().left - (popover_width/ 2) + 10);
            else
                x_pos = options.left ?? ($(options.snapToElement).offset().left + 5);
        }

        // Y position
        const popover_height = options.height ?? $(el_popover).height();
        if(options.center_horizontally){
            y_pos = options.top ?? (window.innerHeight - (taskbar_height + popover_height + 10));
        }else{
            y_pos = options.top ?? ($(options.snapToElement).offset().top + $(options.snapToElement).height() + 5);
        }

        $(el_popover).css({
            left: x_pos + "px",
            top: y_pos + "px",
        });
    }
    position_popover();

    // If the window is resized, reposition the popover
    $(window).on('resize', function(){
        position_popover();
    });
    
    // Show Popover
    $(el_popover).delay(100).show(0).
    // In the right position (the mouse)
    css({
        left: x_pos + "px",
        top: y_pos + "px",
    });

    return el_popover;
}

export default UIPopover;