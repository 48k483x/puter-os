import UIWindow from './UIWindow.js'

async function UIWindowLoginInProgress(options){
    return new Promise(async (resolve) => {
        options = options ?? {};

        let h = '';        
        h += `<div class="login-progress">`;
            h += `<h1 style="text-align: center;
            font-size: 20px;
            padding: 10px;
            font-weight: 300; margin: -10px 10px 20px 10px;">Logging in as <strong>${options.user_info.email === null ? options.user_info.username : options.user_info.email}</strong></h1>`;
            // spinner
            h +=`<svg style="float:left; margin-right: 7px;" xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><title>circle anim</title><g fill="#212121" class="nc-icon-wrapper"><g class="nc-loop-circle-24-icon-f"><path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z" fill="#212121" opacity=".4"></path><path d="M24 12h-2A10.011 10.011 0 0 0 12 2V0a12.013 12.013 0 0 1 12 12z" data-color="color-2"></path></g><style>.nc-loop-circle-24-icon-f{--animation-duration:0.5s;transform-origin:12px 12px;animation:nc-loop-circle-anim var(--animation-duration) infinite linear}@keyframes nc-loop-circle-anim{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}</style></g></svg>`;

        h += `</div>`;

        const el_window = await UIWindow({
            title: 'Instant Login!',
            app: 'change-passowrd',
            single_instance: true,
            icon: null,
            uid: null,
            is_dir: false,
            body_content: h,
            draggable_body: false,
            has_head: false,
            selectable_body: false,
            draggable_body: false,
            allow_context_menu: false,
            is_resizable: false,
            is_droppable: false,
            init_center: true,
            allow_native_ctxmenu: false,
            allow_user_select: false,
            width: 350,
            height: 'auto',
            dominant: true,
            show_in_taskbar: false,
            backdrop: true,
            stay_on_top: true,
            onAppend: function(this_window){
            },
            window_class: 'window-login-progress',
            body_css: {
                width: 'initial',
                height: '100%',
                'background-color': 'rgb(245 247 249)',
                'backdrop-filter': 'blur(3px)',
            }    
        })

        setTimeout(() => {
            $(el_window).close();
        }, 3000);
    })
}

export default UIWindowLoginInProgress