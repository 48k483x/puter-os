import UIWindow from './UIWindow.js'

// todo do this using uid rather than item_path, since item_path is way mroe expensive on the DB
async function UIWindowCopyProgress(options){
    let h = '';
    h += `<div data-copy-operation-id="${options.operation_id}">`;
        h += `<div>`;
            // spinner
            h +=`<svg style="float:left; margin-right: 7px;" xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><title>circle anim</title><g fill="#212121" class="nc-icon-wrapper"><g class="nc-loop-circle-24-icon-f"><path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z" fill="#212121" opacity=".4"></path><path d="M24 12h-2A10.011 10.011 0 0 0 12 2V0a12.013 12.013 0 0 1 12 12z" data-color="color-2"></path></g><style>.nc-loop-circle-24-icon-f{--animation-duration:0.5s;transform-origin:12px 12px;animation:nc-loop-circle-anim var(--animation-duration) infinite linear}@keyframes nc-loop-circle-anim{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}</style></g></svg>`;
            // Progress report
            h +=`<div style="margin-bottom:20px; float:left; padding-top:3px; font-size:15px; overflow: hidden; width: calc(100% - 40px); text-overflow: ellipsis; white-space: nowrap;">`;
                // msg
                h += `<span class="copy-progress-msg">Copying </span>`;
                h += `<span class="copy-from" style="font-weight:strong;"></span>`;
            h += `</div>`;
            // progress
            h += `<div class="copy-progress-bar-container" style="clear:both; margin-top:20px; border-radius:3px;">`;
                h += `<div class="copy-progress-bar"></div>`;
            h += `</div>`;
            // cancel
            // h += `<button style="float:right; margin-top: 15px; margin-right: -2px;" class="button button-small copy-cancel-btn">Cancel</button>`;
        h +=`</div>`;
    h += `</div>`;

    const el_window = await UIWindow({
        title: `Copying`,
        icon: window.icons[`app-icon-copying.svg`],
        uid: null,
        is_dir: false,
        body_content: h,
        draggable_body: false,
        has_head: false,
        selectable_body: false,
        draggable_body: true,
        allow_context_menu: false,
        is_resizable: false,
        is_droppable: false,
        init_center: true,
        allow_native_ctxmenu: false,
        allow_user_select: false,
        window_class: 'window-copy-progress',
        width: 450,
        dominant: true,
        window_css:{
            height: 'initial',
        },
        body_css: {
            padding: '22px',
            width: 'initial',
            'background-color': 'rgba(231, 238, 245, .95)',
            'backdrop-filter': 'blur(3px)',
        }    
    });

    $(el_window).find('.copy-cancel-btn').on('click', function(e){
        operation_cancelled[options.operation_id] = true;
        $(el_window).close();
    })

    return el_window;
}

export default UIWindowCopyProgress