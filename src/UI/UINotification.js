function UINotification(options){
    global_element_id++;

    options.content = options.content ?? '';

    let h = '';
    h += `<div id="ui-notification__${global_element_id}" class="notification antialiased animate__animated animate__fadeInRight animate__slow">`;
        h += `<img class="notification-close" src="${html_encode(window.icons['close.svg'])}">`;
        h += options.content;
    h += `</div>`;

    $('body').append(h);


    const el_notification = document.getElementById(`ui-notification__${global_element_id}`);

    $(el_notification).show(0, function(e){
        // options.onAppend()
        if(options.onAppend && typeof options.onAppend === 'function'){
            options.onAppend(el_notification);
        }
    })

    // Show Notification
    $(el_notification).delay(100).show(0).
    // In the right position (the mouse)
    css({
        top: toolbar_height + 15,
    });

    return el_notification;
}

$(document).on('click', '.notification', function(e){
    if($(e.target).hasClass('notification')){
        if(options.click && typeof options.click === 'function'){
            options.click(e);
        }
        window.close_notification(e.target);
    }else{
        window.close_notification($(e.target).closest('.notification'));
    }
});

$(document).on('click', '.notification-close', function(e){
    window.close_notification($(e.target).closest('.notification'));
});


window.close_notification = function(el_notification){
    $(el_notification).addClass('animate__fadeOutRight');
    setTimeout(function(){
        $(el_notification).remove();
    }, 500);
}

export default UINotification;