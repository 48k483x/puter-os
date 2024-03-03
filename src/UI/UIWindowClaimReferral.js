import UIWindow from './UIWindow.js'
import UIWindowSaveAccount from './UIWindowSaveAccount.js';

async function UIWindowClaimReferral(options){
    let h = '';

    h += `<div>`;
        h += `<div class="qr-code-window-close-btn generic-close-window-button disable-user-select"> &times; </div>`;
        h += `<img src="${window.icons['present.svg']}" style="width: 70px; margin: 20px auto 20px; display: block; margin-bottom: 20px;">`;
        h += `<h1 style="font-weight: 400; padding: 0 10px; font-size: 21px; text-align: center; margin-bottom: 0; color: #60626d; -webkit-font-smoothing: antialiased;">You have been referred to Puter by a friend!</h1>`;
        h += `<p style="text-align: center; font-size: 16px; padding: 20px; font-weight: 400; margin: -10px 10px 0px 10px; -webkit-font-smoothing: antialiased; color: #5f626d;">Create an account and confirm your email address to receive 1 GB of free storage. Your friend will get 1 GB of free storage too.</p>`;
        h += `<button class="button button-primary button-block create-account-ref-btn" style="display: block;">Create Account</button>`;
    h += `</div>`;

    const el_window = await UIWindow({
        title: `Refer a friend!`,
        icon: null,
        uid: null,
        is_dir: false,
        body_content: h,
        has_head: false,
        selectable_body: false,
        draggable_body: true,
        allow_context_menu: false,
        is_draggable: true,
        is_resizable: false,
        is_droppable: false,
        init_center: true,
        allow_native_ctxmenu: true,
        allow_user_select: true,
        onAppend: function(el_window){
        },
        width: 400,
        dominant: true,
        window_css: {
            height: 'initial',
        },
        body_css: {
            padding: '10px',
            width: 'initial',
            'max-height': 'calc(100vh - 200px)',
            'background-color': 'rgb(241 246 251)',
            'backdrop-filter': 'blur(3px)',
            'padding': '10px 20px 20px 20px',
            'height': 'initial',
        }    
    });

    $(el_window).find('.create-account-ref-btn').on('click', function(e){    
        UIWindowSaveAccount();
        $(el_window).close();
    })
}

export default UIWindowClaimReferral