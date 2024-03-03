// Ordered list of statically-linked external JS libraries and scripts
const lib_paths =[
    `/lib/jquery-3.6.1/jquery-3.6.1.min.js`,
    `/lib/viselect.min.js`,
    `/lib/FileSaver.min.js`,
    `/lib/socket.io/socket.io.min.js`,
    `/lib/qrcode.min.js`,
    `/lib/jquery-ui-1.13.2/jquery-ui.min.js`,
    `/lib/lodash@4.17.21.min.js`,
    `/lib/jquery.dragster.js`,
    `/lib/html-entities.js`,
    `/lib/timeago.min.js`,
    `/lib/iro.min.js`,
    `/lib/isMobile.min.js`,
    `/lib/jszip-3.10.1.min.js`,
]

// Ordered list of CSS stylesheets
const css_paths = [
    '/css/normalize.css',
    '/lib/jquery-ui-1.13.2/jquery-ui.min.css',
    '/css/style.css',
]

// Ordered list of JS scripts
const js_paths = [
    '/initgui.js',
    '/helpers.js',
    '/IPC.js',
    '/globals.js',
]

module.exports = { lib_paths, css_paths, js_paths }