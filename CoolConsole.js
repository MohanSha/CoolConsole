/**
 * CoolConsole.js 1.0.0 by @AdemKouki
 * Copyright 2018-2019
 * CoolConsole is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
 */

const COLOR_CONSOLE_PRIMARY = "#3097d1";
const COLOR_CONSOLE_SUCCESS = "#3c763d";
const COLOR_CONSOLE_INFO = "#31708f";
const COLOR_CONSOLE_WARNING = "#8a6d3b";
const COLOR_CONSOLE_DANGER = "#a94442";
const COLOR_CONSOLE_DEFAULT = "black";
const DEFAULT_STYLE = `font-size: 13px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;`;

/** font styles */
const normal = `font-weight: normal;`; 
const bold = `font-weight: bold;`;
const italic = `font-style: italic;`;
const underline = `text-decoration: underline;` ;
const midline =`text-decoration: line-through;`;
const xsmall = `font-size: 9px;`;
const small = `font-size: 12px;`;
const medium = `font-size: 15px;`;
const large = `font-size: 30px;`;
const xlarge = `font-size: 50px;`;

/** colors */
const red = " color: red;";
const orange = " color: orange;";
const yellow = " color: yellow;";
const green = " color: green;";
const blue = " color: blue;";
const indigo = " color: indigo;";
const violet = " color: violet;";
const brown = " color: brown;"
const black = " color: black;";
const grey = " color: grey;";
const white = " color: white;";
const cyan = " color: cyan;";
const pink = " color: pink;";
const navy = " color: navy;";
const magenta = " color: magenta;";
const gold = " color: gold;";


/** Background colors */
const bg_red = " background-color: red;";
const bg_orange = " background-color: orange;";
const bg_yellow = " background-color: yellow;";
const bg_green = " background-color: green;";
const bg_blue = " background-color: blue;";
const bg_indigo = " background-color: indigo;";
const bg_violet = " background-color: violet;";
const bg_brown = " background-color: brown;"
const bg_black = " background-color: black;";
const bg_grey = " background-color: grey;";
const bg_white = " background-color: white;";
const bg_cyan = " background-color: cyan;";
const bg_pink = " background-color: pink;";
const bg_navy = " background-color: navy;";
const bg_magenta = " background-color: magenta;";
const bg_gold = " background-color: gold;";


const icon_flower 		= `background-image: url("data:image/svg+xml,%0A%3Csvg version='1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' enable-background='new 0 0 48 48'%3E%3Cpath fill='%232E7D32' d='M5,24c0,18.9,14.8,19,17,19s4,0,4,0S24.1,26.5,5,24z'/%3E%3Crect x='22' y='26' fill='%23388E3C' width='4' height='17'/%3E%3Cpath fill='%23C62828' d='M34,16c0,5.1-5.2,8.2-8,8.2s-2-3.1-2-8.2s5-9.2,5-9.2S34,10.9,34,16z'/%3E%3Cpath fill='%23C62828' d='M14,16c0,5.1,5.2,8.2,8,8.2s2-3.1,2-8.2s-5-9.2-5-9.2S14,10.9,14,16z'/%3E%3Cpath fill='%23E53935' d='M24,27c-2.2-1.6-1.9-4.5,2.4-8.8C30.8,13.8,32,7,32,7s5,3.4,5,9C37,21.9,31.3,27,24,27z'/%3E%3Cpath fill='%23E53935' d='M24,27c2.2-1.6,1.9-4.5-2.4-8.8C17.2,13.8,16,7,16,7s-5,3.4-5,9C11,21.9,16.7,27,24,27z'/%3E%3Cpath fill='%23F44336' d='M30,16c0,6.1-2.7,11-6,11s-6-4.9-6-11s6-11,6-11S30,9.9,30,16z'/%3E%3Cpath fill='%234CAF50' d='M22,43c0,0,1.8,0,4,0s17-0.1,17-19C23.9,26.5,22,43,22,43z'/%3E%3C/svg%3E%0A");`;
const icon_ok 			= `background-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 40 40' enable-background='new 0 0 40 40' xml:space='preserve'%3E%3Cg id='Web'%3E%3Cg id='Tabs_3_'%3E%3C/g%3E%3Cg id='Male_2_'%3E%3C/g%3E%3Cg id='Female_1_'%3E%3C/g%3E%3Cg id='Unshare_2_'%3E%3C/g%3E%3Cg id='Share_2_'%3E%3C/g%3E%3Cg id='More_4_'%3E%3C/g%3E%3Cg id='New_Window_3_'%3E%3C/g%3E%3Cg id='Edit_5_'%3E%3C/g%3E%3Cg id='Checked_3_'%3E%3C/g%3E%3Cg id='Unchecked_2_'%3E%3C/g%3E%3Cg id='Menu_Alt_1_'%3E%3C/g%3E%3Cg id='Menu_6_'%3E%3C/g%3E%3Cg id='Hand_Cursor_2_'%3E%3C/g%3E%3Cg id='Type_Cursor_2_'%3E%3C/g%3E%3Cg id='Tag_Minus_4_'%3E%3C/g%3E%3Cg id='Tag_Plus_4_'%3E%3C/g%3E%3Cg id='Tag_2_'%3E%3C/g%3E%3Cg id='Options_2_'%3E%3C/g%3E%3Cg id='List_Alt_2_'%3E%3C/g%3E%3Cg id='List_2_'%3E%3C/g%3E%3Cg id='Grid_Small'%3E%3C/g%3E%3Cg id='Grid_Big'%3E%3C/g%3E%3Cg id='Log_Out_3_'%3E%3C/g%3E%3Cg id='Log_In_3_'%3E%3C/g%3E%3Cg id='Upload_8_'%3E%3C/g%3E%3Cg id='Download_8_'%3E%3C/g%3E%3Cg id='Export_1_'%3E%3C/g%3E%3Cg id='Import_1_'%3E%3C/g%3E%3Cg id='Userlist'%3E%3C/g%3E%3Cg id='User_Star'%3E%3C/g%3E%3Cg id='User_Down'%3E%3C/g%3E%3Cg id='User_Up'%3E%3C/g%3E%3Cg id='User_Minus'%3E%3C/g%3E%3Cg id='User_Plus'%3E%3C/g%3E%3Cg id='Like_3_'%3E%3C/g%3E%3Cg id='Dislike_3_'%3E%3C/g%3E%3Cg id='Unlock'%3E%3C/g%3E%3Cg id='Lock'%3E%3C/g%3E%3Cg id='More_Windows_9_'%3E%3C/g%3E%3Cg id='External_Link_9_'%3E%3C/g%3E%3Cg id='Grid_System'%3E%3C/g%3E%3Cg id='Image_5_'%3E%3C/g%3E%3Cg id='Table_3_'%3E%3C/g%3E%3Cg id='Embed_Close_2_'%3E%3C/g%3E%3Cg id='Embed_2_'%3E%3C/g%3E%3Cg id='QR_2_'%3E%3C/g%3E%3Cg id='Translate_6_'%3E%3C/g%3E%3Cg id='Global_7_'%3E%3C/g%3E%3Cg id='Trash_4_'%3E%3C/g%3E%3Cg id='Nut_3_'%3E%3C/g%3E%3Cg id='Gauge'%3E%3C/g%3E%3Cg id='Sliders_3_'%3E%3C/g%3E%3Cg id='Tools'%3E%3C/g%3E%3Cg id='Gears_3_'%3E%3C/g%3E%3Cg id='Gear_2_'%3E%3C/g%3E%3Cg id='Arrow_Keys'%3E%3C/g%3E%3Cg id='Ban_2_'%3E%3C/g%3E%3Cg id='Warning'%3E%3C/g%3E%3Cg id='Remove_2_'%3E%3C/g%3E%3Cg id='OK_2_'%3E%3Cg id='OK'%3E%3Cg%3E%3Cpolygon fill-rule='evenodd' clip-rule='evenodd' fill='%231ABC9C' points='29.9,10.1 15.8,24.2 10.1,18.6 7.3,21.4 15.8,29.9 18.6,27.1 32.7,12.9 '/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg id='Search_4_'%3E%3C/g%3E%3Cg id='Zoom_In_5_'%3E%3C/g%3E%3Cg id='Zoom_Out_5_'%3E%3C/g%3E%3Cg id='Social_Network_5_'%3E%3C/g%3E%3Cg id='Anchor_2_'%3E%3C/g%3E%3Cg id='Link_4_'%3E%3C/g%3E%3Cg id='Cloud_Camera_6_'%3E%3C/g%3E%3Cg id='Cloud_Up_4_'%3E%3C/g%3E%3Cg id='Cloud_Down_4_'%3E%3C/g%3E%3Cg id='Cloud_Tunes'%3E%3C/g%3E%3Cg id='Broadcast_4_'%3E%3C/g%3E%3Cg id='Filter_3_'%3E%3C/g%3E%3Cg id='Paper_Plane_3_'%3E%3C/g%3E%3Cg id='Star_Fill_2_'%3E%3C/g%3E%3Cg id='Star_Stroke_3_'%3E%3C/g%3E%3Cg id='Heart_Fill_2_'%3E%3C/g%3E%3Cg id='Heart_Stroke_1_'%3E%3C/g%3E%3Cg id='Chat_Convo_Alt'%3E%3C/g%3E%3Cg id='Chat_Type_Alt'%3E%3C/g%3E%3Cg id='Chat_Alert_Alt'%3E%3C/g%3E%3Cg id='Chat_Alt'%3E%3C/g%3E%3Cg id='Chat_Convo'%3E%3C/g%3E%3Cg id='Chat_Type'%3E%3C/g%3E%3Cg id='Chat_Alert'%3E%3C/g%3E%3Cg id='Chat'%3E%3C/g%3E%3Cg id='Home_3_'%3E%3C/g%3E%3C/g%3E%3Cg id='Lockup'%3E%3C/g%3E%3C/svg%3E%0A");`;
const icon_heart 		= `background-image: url("data:image/svg+xml,%3Csvg version='1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' enable-background='new 0 0 48 48'%3E%3Cpath fill='%23F44336' d='M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z'/%3E%3C/svg%3E%0A");`;
const icon_user_f 		= `background-image: url("data:image/svg+xml,%3Csvg width='46px' height='60px' viewBox='0 0 46 60' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%3E%3C!-- Generator: Sketch 3.2.2 %289983%29 - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3E297 - User %28Webby%29%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'%3E%3Cg id='Icons' sketch:type='MSArtboardGroup' transform='translate%28-489.000000, -1317.000000%29'%3E%3Cg id='297---User-%28Webby%29' sketch:type='MSLayerGroup' transform='translate%28490.000000, 1318.000000%29'%3E%3Cpath d='M44,50.957 C44,47.919 42.283,45.142 39.566,43.783 L28.539,39.007 C27.936,38.705 27.445,38.063 27.099,37.367 C26.787,36.739 27.253,36 27.954,36 L35.72,36 C35.72,36 38.568,36.273 40.764,35.33 C42.05,34.777 42.494,33.162 41.689,32.017 C39.336,28.668 34.473,20.782 34.316,12.638 C34.316,12.638 34.046,0.102 21.678,0 C14.463,0.06 11.055,4.306 9.468,7.835 C8.582,9.804 8.203,11.95 8.06,14.104 C7.547,21.867 3.594,29.195 1.752,32.23 C1.127,33.259 1.429,34.629 2.463,35.247 C4.157,36.26 6.231,36 6.231,36 L14.18,36 C14.955,36 15.297,36.979 14.688,37.459 C14.192,37.85 13.72,38.204 13.464,38.343 L4.18,43.72 C1.603,45.126 0,47.826 0,50.761 L0,52 L0,53 C0,55.761 9.85,58 22,58 C34.15,58 44,55.761 44,53 L44,52 L44,50.957 L44,50.957 Z' id='Fill-212' fill='%23C6E3F8' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M44,50.957 C44,47.919 42.283,45.142 39.566,43.783 L28.539,39.007 C27.936,38.705 27.445,38.063 27.099,37.367 C26.787,36.739 27.253,36 27.954,36 L35.72,36 C35.72,36 38.568,36.273 40.764,35.33 C42.05,34.777 42.494,33.162 41.689,32.017 C39.336,28.668 34.473,20.782 34.316,12.638 C34.316,12.638 34.046,0.102 21.678,0 C14.463,0.06 11.055,4.306 9.468,7.835 C8.582,9.804 8.203,11.95 8.06,14.104 C7.547,21.867 3.594,29.195 1.752,32.23 C1.127,33.259 1.429,34.629 2.463,35.247 C4.157,36.26 6.231,36 6.231,36 L14.18,36 C14.955,36 15.297,36.979 14.688,37.459 C14.192,37.85 13.72,38.204 13.464,38.343 L4.18,43.72 C1.603,45.126 0,47.826 0,50.761 L0,52 L0,53 C0,55.761 9.85,58 22,58 C34.15,58 44,55.761 44,53 L44,52 L44,50.957 L44,50.957 Z' id='Stroke-213' stroke='%230F81E0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' sketch:type='MSShapeGroup'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");`;
const icon_user_m 		= `background-image: url("data:image/svg+xml,%3Csvg width='46px' height='60px' viewBox='0 0 46 60' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%3E%3C!-- Generator: Sketch 3.2.2 %289983%29 - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3E298 - User %28Webby%29%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'%3E%3Cg id='Icons' sketch:type='MSArtboardGroup' transform='translate%28-367.000000, -1317.000000%29'%3E%3Cg id='298---User-%28Webby%29' sketch:type='MSLayerGroup' transform='translate%28368.000000, 1318.000000%29'%3E%3Cpath d='M44,49.957 C44,46.919 42.283,44.142 39.566,42.783 L30.014,38.007 C28.78,37.39 28,36.128 28,34.748 L28,31 C28.268,30.695 28.576,30.302 28.904,29.838 C30.205,28 31.19,25.977 31.873,23.854 C33.097,23.477 34,22.345 34,21 L34,17 C34,16.12 33.609,15.333 33,14.783 L33,9 C33,9 34.187,0 22,0 C9.812,0 11,9 11,9 L11,14.783 C10.391,15.333 10,16.12 10,17 L10,21 C10,22.054 10.554,22.981 11.383,23.517 C12.382,27.869 15,31 15,31 L15,34.655 C15,35.989 14.272,37.215 13.101,37.854 L4.18,42.72 C1.603,44.125 0,46.826 0,49.761 L0,52 L0,53 C0,55.761 9.85,58 22,58 C34.15,58 44,55.761 44,53 L44,52 L44,49.957 L44,49.957 Z' id='Fill-210' fill='%23C6E3F8' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M44,49.957 C44,46.919 42.283,44.142 39.566,42.783 L30.014,38.007 C28.78,37.39 28,36.128 28,34.748 L28,31 C28.268,30.695 28.576,30.302 28.904,29.838 C30.205,28 31.19,25.977 31.873,23.854 C33.097,23.477 34,22.345 34,21 L34,17 C34,16.12 33.609,15.333 33,14.783 L33,9 C33,9 34.187,0 22,0 C9.812,0 11,9 11,9 L11,14.783 C10.391,15.333 10,16.12 10,17 L10,21 C10,22.054 10.554,22.981 11.383,23.517 C12.382,27.869 15,31 15,31 L15,34.655 C15,35.989 14.272,37.215 13.101,37.854 L4.18,42.72 C1.603,44.125 0,46.826 0,49.761 L0,52 L0,53 C0,55.761 9.85,58 22,58 C34.15,58 44,55.761 44,53 L44,52 L44,49.957 L44,49.957 Z' id='Stroke-211' stroke='%230F81E0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' sketch:type='MSShapeGroup'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");`;
const icon_message 		= `background-image: url("data:image/svg+xml,%3Csvg version='1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' enable-background='new 0 0 48 48'%3E%3Cpath fill='%23009688' d='M37,39H11l-6,6V11c0-3.3,2.7-6,6-6h26c3.3,0,6,2.7,6,6v22C43,36.3,40.3,39,37,39z'/%3E%3Cg fill='%23fff'%3E%3Ccircle cx='24' cy='22' r='3'/%3E%3Ccircle cx='34' cy='22' r='3'/%3E%3Ccircle cx='14' cy='22' r='3'/%3E%3C/g%3E%3C/svg%3E%0A");`;
const icon_facebook 	= `background-image: url("data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='64px' height='63.999px' viewBox='0 0 64 63.999' style='enable-background:new 0 0 64 63.999;' xml:space='preserve'%3E%3Cg id='Shape_74_'%3E%3Cg%3E%3Ccircle style='fill:%2348A0DC;' cx='32' cy='32' r='32'/%3E%3C/g%3E%3C/g%3E%3Cg id='Facebook_Logo'%3E%3Cg%3E%3Cpath style='fill:%23FFFFFF;' d='M35.896,22.028h4.125v-6.093h-4.848v0.022c-5.872,0.208-7.078,3.51-7.184,6.979h-0.011v3.04h-3.999 v5.968h3.999v15.991h6.029V31.944h4.938l0.951-5.968h-5.889V24.14C34.007,22.97,34.785,22.028,35.896,22.028z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A");`;
const icon_youtube 		= `background-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 40 40' enable-background='new 0 0 40 40' xml:space='preserve'%3E%3Cg id='Social'%3E%3Cg id='GitHub'%3E%3C/g%3E%3Cg id='Soundcloud_3_'%3E%3C/g%3E%3Cg id='Dropbox_2_'%3E%3C/g%3E%3Cg id='Instagram_7_'%3E%3C/g%3E%3Cg id='WordPress_3_'%3E%3C/g%3E%3Cg id='PlayStation'%3E%3C/g%3E%3Cg id='XBox_2_'%3E%3C/g%3E%3Cg id='Windows_2_'%3E%3C/g%3E%3Cg id='iOS_1_'%3E%3C/g%3E%3Cg id='Apple_2_'%3E%3C/g%3E%3Cg id='Android_2_'%3E%3C/g%3E%3Cg id='Deviantart_2_'%3E%3C/g%3E%3Cg id='Yelp_2_'%3E%3C/g%3E%3Cg id='Picassa_6_'%3E%3C/g%3E%3Cg id='LastFM_2_'%3E%3C/g%3E%3Cg id='Amazon_3_'%3E%3C/g%3E%3Cg id='AIM_2_'%3E%3C/g%3E%3Cg id='fffound_1_'%3E%3C/g%3E%3Cg id='Forrst_3_'%3E%3C/g%3E%3Cg id='Yahoo_3_'%3E%3C/g%3E%3Cg id='YouTube_3_'%3E%3Cpath fill='%23E74C3C' d='M18.9,10.5c0.7,0,1.5,0,2.2,0c0.1,0,0.1,0,0.2,0c0.7,0,1.3,0,2,0c0.9,0,1.7,0,2.6,0.1c1,0,2,0.1,3,0.1 c0.5,0,0.9,0.1,1.4,0.2c1,0.2,1.7,0.7,2.2,1.5c0.4,0.7,0.6,1.4,0.7,2.1c0.2,1.3,0.3,2.5,0.3,3.8c0,1.2,0,2.4,0,3.5 c0,0.9-0.1,1.8-0.2,2.6c0,0.7-0.2,1.4-0.4,2.1c-0.5,1.5-1.5,2.3-3,2.4c-0.9,0.1-1.7,0.1-2.6,0.2c-1,0-2.1,0.1-3.1,0.1 c-1,0-2,0-3.1,0c-0.1,0-0.1,0-0.2,0c-0.5,0-1,0-1.5,0c0,0-0.1,0-0.1,0c-0.6,0-1.3,0-1.9,0c-0.8,0-1.7,0-2.5-0.1 c-1.2,0-2.4-0.1-3.7-0.1c-0.6,0-1.2-0.1-1.8-0.3c-0.9-0.2-1.6-0.7-2-1.5c-0.4-0.7-0.6-1.4-0.7-2.1c-0.2-1.3-0.3-2.5-0.3-3.8 c0-1.1,0-2.3,0-3.4c0-0.9,0.1-1.8,0.2-2.7c0-0.7,0.2-1.5,0.4-2.2c0.4-1.2,1.2-2,2.4-2.3c0.7-0.2,1.4-0.2,2.1-0.2 c0.7,0,1.5-0.1,2.2-0.1c1.1,0,2.1-0.1,3.2-0.1c0.6,0,1.2,0,1.8,0C18.8,10.5,18.9,10.5,18.9,10.5z'/%3E%3Cpolygon fill='%23FFFFFF' points='24.5,20.2 17.3,16.4 17.3,23.6 '/%3E%3C/g%3E%3Cg id='Behance_2_'%3E%3C/g%3E%3Cg id='Tumblr_2_'%3E%3C/g%3E%3Cg id='Vimeo_2_'%3E%3C/g%3E%3Cg id='Skype_3_'%3E%3C/g%3E%3Cg id='Pinterest_2_'%3E%3C/g%3E%3Cg id='LinkedIn_1_'%3E%3C/g%3E%3Cg id='Dribbble_3_'%3E%3C/g%3E%3Cg id='Flickr_3_'%3E%3C/g%3E%3Cg id='Google_Plus_2_'%3E%3C/g%3E%3Cg id='RSS_2_'%3E%3C/g%3E%3Cg id='Twitter_2_'%3E%3C/g%3E%3Cg id='Facebook_2_'%3E%3C/g%3E%3C/g%3E%3Cg id='Lockup'%3E%3C/g%3E%3C/svg%3E%0A");`;
const icon_github 		= `background-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='7 7 28 28' enable-background='new 0 0 40 40' xml:space='preserve'%3E%3Cg id='Social'%3E%3Cg id='GitHub'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' fill='%23ECF0F1' d='M18.4,8.1c7.8-1,14.5,5.6,13.5,13.5c-0.7,5.3-5,9.7-10.3,10.3 c-7.8,1-14.5-5.6-13.5-13.5C8.8,13.1,13.1,8.8,18.4,8.1z'/%3E%3Cpath fill='%239B59B6' d='M16.7,31.3v-3.9c-0.6,0.1-1,0.1-1.2,0.1c-1.2,0-2.1-0.6-2.6-1.7c-0.2-0.4-0.4-0.8-0.6-1.1 c-0.1-0.1-0.2-0.2-0.4-0.3c-0.2-0.2-0.3-0.3-0.5-0.4c-0.2-0.1-0.2-0.2-0.2-0.3c0-0.1,0.2-0.2,0.5-0.2c0.7,0,1.2,0.4,1.5,0.8 c0.3,0.5,0.7,1,1.2,1.3c0.3,0.2,0.6,0.3,0.9,0.3c0.5,0,0.9-0.1,1.4-0.2c0.2-0.6,0.5-1.2,1.1-1.5c-3.7-0.4-5.5-1.7-5.5-5.2 c0-1.3,0.4-2.5,1.2-3.4c-0.2-0.5-0.2-0.9-0.2-1.4c0-0.7,0.2-1.3,0.5-1.8c1.3,0,2.1,0.4,3.4,1.4c0.9-0.2,1.8-0.3,2.9-0.3 c0.9,0,1.8,0.1,2.6,0.3c1.3-0.9,2.1-1.3,3.4-1.3c0.3,0.6,0.5,1.2,0.5,1.8c0,0.5-0.1,0.9-0.2,1.4c0.8,0.9,1.2,2,1.2,3.4 c0,3.5-1.8,4.9-5.5,5.2c0.8,0.5,1.2,1.3,1.2,2.2v4.8L16.7,31.3z'/%3E%3Cpath id='_x3C_Path_x3E_' fill='%239B59B6' d='M18.3,7.1C12.5,7.8,7.8,12.5,7.1,18.3C6,26.8,13.2,34,21.7,32.9 c5.8-0.7,10.5-5.4,11.2-11.2C34,13.2,26.8,6,18.3,7.1z M30.8,21.9c-0.7,4.6-4.4,8.2-9,9c-7.5,1.2-13.9-5.2-12.7-12.7 c0.7-4.6,4.4-8.2,9-9C25.7,7.9,32.1,14.3,30.8,21.9z'/%3E%3C/g%3E%3Cg id='Soundcloud_3_'%3E%3C/g%3E%3Cg id='Dropbox_2_'%3E%3C/g%3E%3Cg id='Instagram_7_'%3E%3C/g%3E%3Cg id='WordPress_3_'%3E%3C/g%3E%3Cg id='PlayStation'%3E%3C/g%3E%3Cg id='XBox_2_'%3E%3C/g%3E%3Cg id='Windows_2_'%3E%3C/g%3E%3Cg id='iOS_1_'%3E%3C/g%3E%3Cg id='Apple_2_'%3E%3C/g%3E%3Cg id='Android_2_'%3E%3C/g%3E%3Cg id='Deviantart_2_'%3E%3C/g%3E%3Cg id='Yelp_2_'%3E%3C/g%3E%3Cg id='Picassa_6_'%3E%3C/g%3E%3Cg id='LastFM_2_'%3E%3C/g%3E%3Cg id='Amazon_3_'%3E%3C/g%3E%3Cg id='AIM_2_'%3E%3C/g%3E%3Cg id='fffound_1_'%3E%3C/g%3E%3Cg id='Forrst_3_'%3E%3C/g%3E%3Cg id='Yahoo_3_'%3E%3C/g%3E%3Cg id='YouTube_3_'%3E%3C/g%3E%3Cg id='Behance_2_'%3E%3C/g%3E%3Cg id='Tumblr_2_'%3E%3C/g%3E%3Cg id='Vimeo_2_'%3E%3C/g%3E%3Cg id='Skype_3_'%3E%3C/g%3E%3Cg id='Pinterest_2_'%3E%3C/g%3E%3Cg id='LinkedIn_1_'%3E%3C/g%3E%3Cg id='Dribbble_3_'%3E%3C/g%3E%3Cg id='Flickr_3_'%3E%3C/g%3E%3Cg id='Google_Plus_2_'%3E%3C/g%3E%3Cg id='RSS_2_'%3E%3C/g%3E%3Cg id='Twitter_2_'%3E%3C/g%3E%3Cg id='Facebook_2_'%3E%3C/g%3E%3C/g%3E%3Cg id='Lockup'%3E%3C/g%3E%3C/svg%3E%0A");`;
const icon_add 			= `background-image: url("data:image/svg+xml,%3Csvg width='42px' height='42px' viewBox='0 0 42 42' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%3E%3C!-- Generator: Sketch 3.2.2 %289983%29 - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3E214 - Add %28Flat%29%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'%3E%3Cg id='214---Add-%28Flat%29' sketch:type='MSLayerGroup' fill='%2323A24D'%3E%3Cpath d='M37.059,16 L26,16 L26,4.941 C26,2.224 23.718,0 21,0 C18.282,0 16,2.224 16,4.941 L16,16 L4.941,16 C2.224,16 0,18.282 0,21 C0,23.718 2.224,26 4.941,26 L16,26 L16,37.059 C16,39.777 18.282,42 21,42 C23.718,42 26,39.777 26,37.059 L26,26 L37.059,26 C39.776,26 42,23.718 42,21 C42,18.282 39.776,16 37.059,16' id='Fill-800' sketch:type='MSShapeGroup'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");`;
const icon_remove 		= `background-image: url("data:image/svg+xml,%3Csvg version='1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' enable-background='new 0 0 48 48'%3E%3Cpath fill='%23D50000' d='M24,6C14.1,6,6,14.1,6,24s8.1,18,18,18s18-8.1,18-18S33.9,6,24,6z M24,10c3.1,0,6,1.1,8.4,2.8L12.8,32.4 C11.1,30,10,27.1,10,24C10,16.3,16.3,10,24,10z M24,38c-3.1,0-6-1.1-8.4-2.8l19.6-19.6C36.9,18,38,20.9,38,24C38,31.7,31.7,38,24,38 z'/%3E%3C/svg%3E%0A");`;
const icon_time 		= `background-image: url("data:image/svg+xml,%0A%3Csvg version='1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' enable-background='new 0 0 48 48'%3E%3Cg fill='%2337474F'%3E%3Cpath d='M38.5,44.6l-4-4l2.1-2.1l4,4c0.6,0.6,0.6,1.5,0,2.1l0,0C40.1,45.1,39.1,45.1,38.5,44.6z'/%3E%3Cpath d='M9.5,44.6l4-4l-2.1-2.1l-4,4c-0.6,0.6-0.6,1.5,0,2.1l0,0C7.9,45.1,8.9,45.1,9.5,44.6z'/%3E%3C/g%3E%3Ccircle fill='%23C62828' cx='24' cy='24' r='20'/%3E%3Ccircle fill='%23eee' cx='24' cy='24' r='16'/%3E%3Crect x='19' y='22.1' transform='matrix%28-.707 -.707 .707 -.707 12.904 62.537%29' fill='%23E53935' width='.8' height='13'/%3E%3Crect x='23' y='11' width='2' height='13'/%3E%3Crect x='26.1' y='22.7' transform='matrix%28-.707 .707 -.707 -.707 65.787 27.25%29' width='2.3' height='9.2'/%3E%3Ccircle cx='24' cy='24' r='2'/%3E%3Ccircle fill='%23C62828' cx='24' cy='24' r='1'/%3E%3Crect x='22' y='1' fill='%2337474F' width='4' height='3'/%3E%3Cg fill='%2337474F'%3E%3Cpath d='M44.4,16.2c2.5-3.5,2.1-8.4-1-11.5c-3.1-3.1-8-3.5-11.5-1L44.4,16.2z'/%3E%3Cpath d='M3.6,16.2c-2.5-3.5-2.1-8.4,1-11.5c3.1-3.1,8-3.5,11.5-1L3.6,16.2z'/%3E%3C/g%3E%3C/svg%3E%0A");`;
const icon_music 		= `background-image: url("data:image/svg+xml,%3Csvg version='1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' enable-background='new 0 0 48 48'%3E%3Cg fill='%23E91E63'%3E%3Ccircle cx='19' cy='33' r='9'/%3E%3Cpolygon points='24,6 24,33 28,33 28,14 39,17 39,10'/%3E%3C/g%3E%3C/svg%3E%0A");`;
const icon_setting 		= `background-image: url("data:image/svg+xml,%3Csvg version='1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' enable-background='new 0 0 48 48'%3E%3Cpath fill='%23607D8B' d='M39.6,27.2c0.1-0.7,0.2-1.4,0.2-2.2s-0.1-1.5-0.2-2.2l4.5-3.2c0.4-0.3,0.6-0.9,0.3-1.4L40,10.8 c-0.3-0.5-0.8-0.7-1.3-0.4l-5,2.3c-1.2-0.9-2.4-1.6-3.8-2.2l-0.5-5.5c-0.1-0.5-0.5-0.9-1-0.9h-8.6c-0.5,0-1,0.4-1,0.9l-0.5,5.5 c-1.4,0.6-2.7,1.3-3.8,2.2l-5-2.3c-0.5-0.2-1.1,0-1.3,0.4l-4.3,7.4c-0.3,0.5-0.1,1.1,0.3,1.4l4.5,3.2c-0.1,0.7-0.2,1.4-0.2,2.2 s0.1,1.5,0.2,2.2L4,30.4c-0.4,0.3-0.6,0.9-0.3,1.4L8,39.2c0.3,0.5,0.8,0.7,1.3,0.4l5-2.3c1.2,0.9,2.4,1.6,3.8,2.2l0.5,5.5 c0.1,0.5,0.5,0.9,1,0.9h8.6c0.5,0,1-0.4,1-0.9l0.5-5.5c1.4-0.6,2.7-1.3,3.8-2.2l5,2.3c0.5,0.2,1.1,0,1.3-0.4l4.3-7.4 c0.3-0.5,0.1-1.1-0.3-1.4L39.6,27.2z M24,35c-5.5,0-10-4.5-10-10c0-5.5,4.5-10,10-10c5.5,0,10,4.5,10,10C34,30.5,29.5,35,24,35z'/%3E%3Cpath fill='%23455A64' d='M24,13c-6.6,0-12,5.4-12,12c0,6.6,5.4,12,12,12s12-5.4,12-12C36,18.4,30.6,13,24,13z M24,30 c-2.8,0-5-2.2-5-5c0-2.8,2.2-5,5-5s5,2.2,5,5C29,27.8,26.8,30,24,30z'/%3E%3C/svg%3E%0A");`;
const icon_cursor 		= `background-image: url("data:image/svg+xml,%0A%3Csvg version='1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' enable-background='new 0 0 48 48'%3E%3Cpath fill='%23E0E0E0' d='M27.8,39.7c-0.1,0-0.2,0-0.4-0.1c-0.2-0.1-0.4-0.3-0.6-0.5l-3.7-8.6l-4.5,4.2C18.5,34.9,18.3,35,18,35 c-0.1,0-0.3,0-0.4-0.1C17.3,34.8,17,34.4,17,34l0-22c0-0.4,0.2-0.8,0.6-0.9C17.7,11,17.9,11,18,11c0.2,0,0.5,0.1,0.7,0.3l16,15 c0.3,0.3,0.4,0.7,0.3,1.1c-0.1,0.4-0.5,0.6-0.9,0.7l-6.3,0.6l3.9,8.5c0.1,0.2,0.1,0.5,0,0.8c-0.1,0.2-0.3,0.5-0.5,0.6l-2.9,1.3 C28.1,39.7,27.9,39.7,27.8,39.7z'/%3E%3Cpath fill='%23212121' d='M18,12l16,15l-7.7,0.7l4.5,9.8l-2.9,1.3l-4.3-9.9L18,34L18,12 M18,10c-0.3,0-0.5,0.1-0.8,0.2 c-0.7,0.3-1.2,1-1.2,1.8l0,22c0,0.8,0.5,1.5,1.2,1.8C17.5,36,17.8,36,18,36c0.5,0,1-0.2,1.4-0.5l3.4-3.2l3.1,7.3 c0.2,0.5,0.6,0.9,1.1,1.1c0.2,0.1,0.5,0.1,0.7,0.1c0.3,0,0.5-0.1,0.8-0.2l2.9-1.3c0.5-0.2,0.9-0.6,1.1-1.1c0.2-0.5,0.2-1.1,0-1.5 l-3.3-7.2l4.9-0.4c0.8-0.1,1.5-0.6,1.7-1.3c0.3-0.7,0.1-1.6-0.5-2.1l-16-15C19,10.2,18.5,10,18,10L18,10z'/%3E%3C/svg%3E%0A");`;
const icon_star 		= `background-image: url("data:image/svg+xml,%3Csvg width='54px' height='52px' viewBox='0 0 54 52' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%3E%3C!-- Generator: Sketch 3.2.2 %289983%29 - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3E161 - Star %28Flat%29%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'%3E%3Cg id='161---Star-%28Flat%29' sketch:type='MSLayerGroup' fill='%23F0CE49'%3E%3Cpath d='M27.03,0 L35.353,16.864 L53.963,19.568 L40.497,32.696 L43.676,51.231 L27.03,42.479 L10.384,51.231 L13.563,32.696 L0.096,19.568 L18.707,16.864 L27.03,0' id='Fill-1012' sketch:type='MSShapeGroup'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");`;
const icon_greenflag 	= `background-image: url("data:image/svg+xml,%3Csvg width='47px' height='60px' viewBox='0 0 47 60' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%3E%3C!-- Generator: Sketch 3.2.2 %289983%29 - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3E126 - Report %28Flat%29%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'%3E%3Cg id='126---Report-%28Flat%29' sketch:type='MSLayerGroup'%3E%3Cpath d='M2,4 L47,4 L47,36 L2,36 L2,4 Z' id='Fill-1069' fill='%2313A085' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M1,0 C0.448,0 0,0.448 0,1 L0,59 C0,59.553 0.448,60 1,60 C1.552,60 2,59.553 2,59 L2,1 C2,0.448 1.552,0 1,0' id='Fill-1073' fill='%23424A60' sketch:type='MSShapeGroup'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");`;
const icon_redflag 		= `background-image: url("data:image/svg+xml,%3Csvg width='55px' height='60px' viewBox='0 0 55 60' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%3E%3C!-- Generator: Sketch 3.2.2 %289983%29 - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3E123 - Flag %28Flat%29%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'%3E%3Cg id='123---Flag-%28Flat%29' sketch:type='MSLayerGroup'%3E%3Cpath d='M14,31 L24,31 L24,37 L14,37 L14,31 Z' id='Fill-190' fill='%23871B1B' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M1,0 C0.448,0 0,0.448 0,1 L0,59 C0,59.553 0.448,60 1,60 C1.552,60 2,59.553 2,59 L2,1 C2,0.448 1.552,0 1,0' id='Fill-1076' fill='%23424A60' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M2,4 L24,4 L24,33 L2,33 L2,4 Z' id='Fill-1077' fill='%23DD342E' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M24,9 L24,33 L18,33 C15.791,33 14,34.791 14,37 C14,39.209 15.791,41 18,41 L55,41 L44,25 L55,9 L24,9' id='Fill-1078' fill='%23C13A2A' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M14,37 C14,39.209 15.791,41 18,41 L24,41 L24,33 L18,33 C15.791,33 14,34.791 14,37' id='Fill-2705' fill='%23B12621' sketch:type='MSShapeGroup'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");`;
const icon_yellowflag 	= `background-image: url("data:image/svg+xml,%3Csvg width='44px' height='60px' viewBox='0 0 44 60' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%3E%3C!-- Generator: Sketch 3.2.2 %289983%29 - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3E125 - Flag %28Flat%29%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'%3E%3Cg id='125---Flag-%28Flat%29' sketch:type='MSLayerGroup'%3E%3Cpath d='M25,4.074 C16.833,8.407 2,4.074 2,4.074 L2,34.074 C2,34.074 16.833,38.407 25,34.074 C33.167,29.741 44,34.074 44,34.074 L44,4.074 C44,4.074 33.167,-0.259 25,4.074' id='Fill-1071' fill='%23ECBA16' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M1,0 C0.448,0 0,0.448 0,1 L0,59 C0,59.553 0.448,60 1,60 C1.552,60 2,59.553 2,59 L2,1 C2,0.448 1.552,0 1,0' id='Fill-1074' fill='%23424A60' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M28,2.879 C26.978,3.171 25.97,3.56 25,4.074 C21.901,5.718 17.844,6.114 14,5.973 L14,35.973 C17.844,36.114 21.901,35.718 25,34.074 C25.97,33.56 26.978,33.171 28,32.879 L28,2.879' id='Fill-2704' fill='%23DBA91F' sketch:type='MSShapeGroup'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");`;
const icon_blueflag 	= `background-image: url("data:image/svg+xml,%3Csvg width='48px' height='60px' viewBox='0 0 48 60' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%3E%3C!-- Generator: Sketch 3.2.2 %289983%29 - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3E124 - Flag %28Flat%29%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'%3E%3Cg id='124---Flag-%28Flat%29' sketch:type='MSLayerGroup'%3E%3Cpath d='M48,36 L2,36 L2,4 L48,4 L38,20 L48,36' id='Fill-1070' fill='%2348A0DC' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M1,0 C0.448,0 0,0.448 0,1 L0,59 C0,59.553 0.448,60 1,60 C1.552,60 2,59.553 2,59 L2,1 C2,0.448 1.552,0 1,0' id='Fill-1075' fill='%23424A60' sketch:type='MSShapeGroup'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");`;
const icon_key 			= `background-image: url("data:image/svg+xml,%3Csvg version='1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' enable-background='new 0 0 48 48'%3E%3Cg fill='%23FFA000'%3E%3Cpolygon points='30,41 26,45 22,45 18,41 18,21 30,21 30,29 28,31 30,33 30,35 28,37 30,39'/%3E%3Cpath d='M38,7.8C37.5,6,36,4.7,34.3,4.2C31.9,3.7,28.2,3,24,3s-7.9,0.7-10.3,1.2C12,4.7,10.5,6,10,7.8 c-0.5,1.7-1,4.1-1,6.7c0,2.6,0.5,5,1,6.7c0.5,1.8,1.9,3.1,3.7,3.5C16.1,25.3,19.8,26,24,26s7.9-0.7,10.3-1.2 c1.8-0.4,3.2-1.8,3.7-3.5c0.5-1.7,1-4.1,1-6.7C39,11.9,38.5,9.5,38,7.8z M29,13H19c-1.1,0-2-0.9-2-2V9c0-0.6,3.1-1,7-1s7,0.4,7,1v2 C31,12.1,30.1,13,29,13z'/%3E%3C/g%3E%3Crect x='23' y='26' fill='%23D68600' width='2' height='19'/%3E%3C/svg%3E%0A");`;
const icon_love 		= `background-image: url("data:image/svg+xml,%3Csvg version='1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' enable-background='new 0 0 48 48'%3E%3Cpath fill='%23F44336' d='M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z'/%3E%3C/svg%3E%0A");`;
const icon_map 			= `background-image: url("data:image/svg+xml,%3Csvg width='53px' height='49px' viewBox='0 0 53 49' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%3E%3C!-- Generator: Sketch 3.2.2 %289983%29 - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3E160 - Map %28Flat%29%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'%3E%3Cg id='160---Map-%28Flat%29' sketch:type='MSLayerGroup'%3E%3Cpath d='M18,21.243 L2.256,5.499 L0,6 L0,49 L2.099,48.534 L18,32.632 L18,21.243' id='Fill-2653' fill='%2342B05C' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M9.372,46.918 L18,45 L18,38.29 L9.372,46.918' id='Fill-2654' fill='%2348A0DC' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M18,2 L6.884,4.47 L18,15.586 L18,2' id='Fill-2655' fill='%2342B05C' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M49.449,1.184 L35,6 L35,15.633 L49.449,1.184' id='Fill-2656' fill='%2342B05C' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M35,21.289 L35,48 L53,41 L53,3.289 L35,21.289' id='Fill-2657' fill='%2348A0DC' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M26.523,24.109 L35,15.633 L35,6 L18,2 L18,15.586 L26.523,24.109' id='Fill-2658' fill='%233D994F' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M18,21.243 L18,32.632 L23.695,26.938 L18,21.243' id='Fill-2659' fill='%233D994F' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M18,38.29 L18,45 L35,48 L35,21.289 L18,38.29' id='Fill-2660' fill='%234393BF' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M18,15.586 L6.884,4.47 L2.256,5.499 L18,21.243 L18,15.586' id='Fill-2661' fill='%23F0CE49' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M18,32.632 L2.099,48.534 L9.372,46.918 L18,38.29 L18,32.632' id='Fill-2662' fill='%23F0CE49' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M35,21.289 L53,3.289 L53,0 L49.449,1.184 L35,15.633 L35,21.289' id='Fill-2663' fill='%23F0CE49' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M26.523,24.109 L18,15.586 L18,21.243 L23.695,26.938 L18,32.632 L18,38.29 L35,21.289 L35,15.633 L26.523,24.109' id='Fill-2664' fill='%23D6B445' sketch:type='MSShapeGroup'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");`;
const icon_thumb_up 	= `background-image: url("data:image/svg+xml,%3Csvg width='53px' height='56px' viewBox='0 0 53 56' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%3E%3C!-- Generator: Sketch 3.2.2 %289983%29 - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3E190 - Thumbs Up %28Flat%29%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'%3E%3Cg id='190---Thumbs-Up-%28Flat%29' sketch:type='MSLayerGroup'%3E%3Cpath d='M0,20 L14,20 L14,56 L0,56 L0,20 Z' id='Fill-848' fill='%234B6DAA' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M11,47 C11,49.209 9.209,51 7,51 C4.791,51 3,49.209 3,47 C3,44.791 4.791,43 7,43 C9.209,43 11,44.791 11,47' id='Fill-849' fill='%23D8A852' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M52,26 C52,23.791 50.209,22 48,22 L32.398,22 L33.385,17.381 C34.139,13.858 33.937,9.563 33.49,6.545 C33.042,3.528 30.34,0 27.513,0 L27.274,0 C24.864,0 24,2.659 24,6 C24,22.25 16,22 16,22 L14,22 L14,54 L43,54 C45.209,54 47,52.209 47,50 C47,47.791 45.209,46 43,46 L46,46 C48.209,46 50,44.209 50,42 C50,39.791 48.209,38 46,38 L49,38 C51.209,38 53,36.209 53,34 C53,31.507 51.387,30.558 49,30.204 C47.837,30.031 45.724,30 45,30 L48,30 C50.209,30 52,28.209 52,26' id='Fill-850' fill='%23FCCF9D' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M50.62,29 L38,29 C37.448,29 37,29.448 37,30 C37,30.553 37.448,31 38,31 L51.456,31 C50.799,30.598 49.968,30.347 49,30.204 C47.837,30.031 45.724,30 45,30 L48,30 C49.008,30 49.917,29.615 50.62,29' id='Fill-2614' fill='%23F8B563' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M51.62,37 L38,37 C37.448,37 37,37.448 37,38 C37,38.553 37.448,39 38,39 L48.621,39 C47.917,38.385 47.008,38 46,38 L49,38 C50.008,38 50.917,37.615 51.62,37' id='Fill-2615' fill='%23F8B563' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M48.62,45 L36,45 C35.448,45 35,45.447 35,46 C35,46.553 35.448,47 36,47 L45.621,47 C44.917,46.385 44.008,46 43,46 L46,46 C47.008,46 47.917,45.615 48.62,45' id='Fill-2616' fill='%23F8B563' sketch:type='MSShapeGroup'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");`;
const icon_thumb_down 	= `background-image: url("data:image/svg+xml,%3Csvg width='53px' height='56px' viewBox='0 0 53 56' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%3E%3C!-- Generator: Sketch 3.2.2 %289983%29 - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3E189 - Thumbs Down %28Flat%29%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'%3E%3Cg id='189---Thumbs-Down-%28Flat%29' sketch:type='MSLayerGroup'%3E%3Cpath d='M39,0 L53,0 L53,36 L39,36 L39,0 Z' id='Fill-851' fill='%234B6DAA' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M42,9 C42,6.791 43.791,5 46,5 C48.209,5 50,6.791 50,9 C50,11.209 48.209,13 46,13 C43.791,13 42,11.209 42,9' id='Fill-852' fill='%23D8A852' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M1,30 C1,32.209 2.791,34 5,34 L20.602,34 L19.615,38.619 C18.861,42.142 19.062,46.437 19.51,49.455 C19.958,52.472 22.66,56 25.487,56 L25.726,56 C28.136,56 29,53.341 29,50 C29,33.75 37,34 37,34 L39,34 L39,2 L10,2 C7.791,2 6,3.791 6,6 C6,8.209 7.791,10 10,10 L7,10 C4.791,10 3,11.791 3,14 C3,16.209 4.791,18 7,18 L4,18 C1.791,18 0,19.791 0,22 C0,24.493 1.613,25.442 4,25.796 C5.163,25.969 7.276,26 8,26 L5,26 C2.791,26 1,27.791 1,30' id='Fill-853' fill='%23FCCF9D' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M18,10 C18,9.447 17.552,9 17,9 L7.379,9 C8.083,9.615 8.992,10 10,10 L7,10 C5.992,10 5.083,10.385 4.38,11 L17,11 C17.552,11 18,10.553 18,10' id='Fill-2617' fill='%23F8B563' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M15,17 L4.379,17 C5.083,17.615 5.992,18 7,18 L4,18 C2.992,18 2.083,18.385 1.38,19 L15,19 C15.552,19 16,18.553 16,18 C16,17.448 15.552,17 15,17' id='Fill-2618' fill='%23F8B563' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M15,25 L1.544,25 C2.201,25.403 3.032,25.653 4,25.796 C5.163,25.969 7.276,26 8,26 L5,26 C3.992,26 3.083,26.385 2.38,27 L15,27 C15.552,27 16,26.553 16,26 C16,25.448 15.552,25 15,25' id='Fill-2619' fill='%23F8B563' sketch:type='MSShapeGroup'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");`;
const icon_zoomin 		= `background-image: url("data:image/svg+xml,%3Csvg width='51px' height='53px' viewBox='0 0 51 53' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%3E%3C!-- Generator: Sketch 3.2.2 %289983%29 - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3E380 - Zoom In %28Flat%29%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'%3E%3Cg id='Icons' sketch:type='MSArtboardGroup' transform='translate%28-127.000000, -361.000000%29'%3E%3Cg id='380---Zoom-In-%28Flat%29' sketch:type='MSLayerGroup' transform='translate%28128.000000, 362.000000%29'%3E%3Cpath d='M40,20 C40,31.046 31.046,40 20,40 C8.954,40 0,31.046 0,20 C0,8.954 8.954,0 20,0 C31.046,0 40,8.954 40,20 L40,20 Z' id='Fill-284' fill='%237383BF' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M40,20 C40,31.046 31.046,40 20,40 C8.954,40 0,31.046 0,20 C0,8.954 8.954,0 20,0 C31.046,0 40,8.954 40,20 L40,20 Z' id='Stroke-285' stroke='%23556080' stroke-width='2' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M27,21 L13,21 C12.448,21 12,20.553 12,20 C12,19.448 12.448,19 13,19 L27,19 C27.552,19 28,19.448 28,20 C28,20.553 27.552,21 27,21' id='Fill-286' fill='%23FFFFFF' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M33.454,34.798 L49,50.966' id='Stroke-287' stroke='%23556080' stroke-width='2' stroke-linecap='round' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M20,28 C19.448,28 19,27.552 19,27 L19,13 C19,12.448 19.448,12 20,12 C20.552,12 21,12.448 21,13 L21,27 C21,27.552 20.552,28 20,28' id='Fill-288' fill='%23FFFFFF' sketch:type='MSShapeGroup'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");`;
const icon_zoomout 		= `background-image: url("data:image/svg+xml,%3Csvg width='51px' height='53px' viewBox='0 0 51 53' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%3E%3C!-- Generator: Sketch 3.2.2 %289983%29 - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3E379 - Zoom Out %28Flat%29%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'%3E%3Cg id='Icons' sketch:type='MSArtboardGroup' transform='translate%28-245.000000, -361.000000%29'%3E%3Cg id='379---Zoom-Out-%28Flat%29' sketch:type='MSLayerGroup' transform='translate%28246.000000, 362.000000%29'%3E%3Cpath d='M40,20 C40,31.046 31.046,40 20,40 C8.954,40 0,31.046 0,20 C0,8.954 8.954,0 20,0 C31.046,0 40,8.954 40,20 L40,20 Z' id='Fill-289' fill='%237383BF' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M40,20 C40,31.046 31.046,40 20,40 C8.954,40 0,31.046 0,20 C0,8.954 8.954,0 20,0 C31.046,0 40,8.954 40,20 L40,20 Z' id='Stroke-290' stroke='%23556080' stroke-width='2' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M27,21 L13,21 C12.448,21 12,20.553 12,20 C12,19.448 12.448,19 13,19 L27,19 C27.552,19 28,19.448 28,20 C28,20.553 27.552,21 27,21' id='Fill-291' fill='%23FFFFFF' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M33.454,34.798 L49,50.966' id='Stroke-292' stroke='%23556080' stroke-width='2' stroke-linecap='round' sketch:type='MSShapeGroup'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");`;
const icon_wifi 		= `background-image: url("data:image/svg+xml,%3Csvg width='55px' height='40px' viewBox='0 0 55 40' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%3E%3C!-- Generator: Sketch 3.2.2 %289983%29 - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3E186 - Wi-Fi %28Flat%29%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'%3E%3Cg id='186---Wi-Fi-%28Flat%29' sketch:type='MSLayerGroup'%3E%3Cpath d='M54.013,13.811 C53.757,13.811 53.501,13.713 53.306,13.518 C46.439,6.651 37.296,2.87 27.559,2.87 C17.821,2.87 8.677,6.651 1.811,13.518 C1.421,13.908 0.788,13.908 0.397,13.518 C0.007,13.127 0.007,12.494 0.397,12.104 C7.641,4.859 17.287,0.87 27.559,0.87 C37.83,0.87 47.477,4.859 54.72,12.104 C55.11,12.494 55.11,13.127 54.72,13.518 C54.524,13.713 54.269,13.811 54.013,13.811' id='Fill-899' fill='%23424A60' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M6.983,19.688 C6.727,19.688 6.471,19.591 6.276,19.396 C5.885,19.005 5.885,18.372 6.276,17.982 C18.012,6.245 37.106,6.247 48.841,17.982 C49.231,18.372 49.231,19.005 48.841,19.396 C48.45,19.786 47.817,19.786 47.427,19.396 C36.471,8.439 18.645,8.439 7.69,19.396 C7.495,19.591 7.239,19.688 6.983,19.688' id='Fill-900' fill='%239777A8' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M42.255,25.567 C41.999,25.567 41.744,25.47 41.548,25.274 C37.818,21.544 32.85,19.489 27.559,19.489 C22.268,19.489 17.3,21.544 13.569,25.274 C13.178,25.665 12.545,25.665 12.155,25.274 C11.764,24.884 11.764,24.251 12.155,23.86 C16.263,19.752 21.734,17.49 27.559,17.49 C33.384,17.49 38.854,19.752 42.962,23.86 C43.353,24.251 43.353,24.884 42.962,25.274 C42.767,25.47 42.511,25.567 42.255,25.567' id='Fill-901' fill='%237FABDA' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M27.559,26.896 C23.946,26.896 21.007,29.836 21.007,33.448 C21.007,37.061 23.946,40 27.559,40 C31.171,40 34.11,37.061 34.11,33.448 C34.11,29.836 31.171,26.896 27.559,26.896' id='Fill-902' fill='%237FABDA' sketch:type='MSShapeGroup'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");`;
const icon_world 		= `background-image: url("data:image/svg+xml,%3Csvg width='58px' height='58px' viewBox='0 0 58 58' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%3E%3C!-- Generator: Sketch 3.2.2 %289983%29 - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3E87 - World-Wide %28Flat%29%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'%3E%3Cg id='Icons' sketch:type='MSArtboardGroup' transform='translate%28-481.000000, -3838.000000%29'%3E%3Cg id='87---World-Wide-%28Flat%29' sketch:type='MSLayerGroup' transform='translate%28481.000000, 3838.000000%29'%3E%3Cpath d='M58,29 C58,45.016 45.016,58 29,58 C12.984,58 0,45.016 0,29 C0,12.984 12.984,0 29,0 C45.016,0 58,12.984 58,29' id='Fill-1323' fill='%237FABDA' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M43.887,4.486 C44.007,4.445 44.106,4.375 44.207,4.307 C39.785,1.578 34.578,0 29,0 C22.866,0 17.181,1.91 12.496,5.159 C12.521,5.275 12.553,5.391 12.604,5.5 C14.582,9.762 17.128,16.996 21.473,18.662 C23.586,19.472 25.539,19.167 27.542,20.149 C27.757,20.253 28.069,20.497 28.203,20.694 C29.221,22.183 28.636,24.365 29.645,24.899 C30.444,25.322 30.898,26.184 30.557,27.021 C29.165,30.439 30.369,34.348 33.609,37.031 C35.89,38.919 33.992,43.295 32.073,46.73 C31.387,47.959 32.61,49.379 33.935,48.908 C36.031,48.162 37.766,47.081 39.776,45.352 C42.689,42.847 43.318,40.117 46.206,37.991 C46.238,37.967 46.262,37.938 46.275,37.9 C47.013,35.737 49.306,31.013 46.992,29.81 C44.832,28.688 44.024,25.439 41.916,23.225 C41.674,22.971 41.33,22.845 40.982,22.8 C38.398,22.467 37.235,20.502 35.497,21.808 C34.195,22.788 32.731,22.191 32.277,20.626 C32.129,20.116 31.868,19.661 30.931,19.372 C30.219,19.153 29.873,18.346 30.129,17.647 C30.133,17.637 30.137,17.627 30.14,17.617 C30.484,16.682 28.552,16.824 27.569,16.988 C27.294,17.034 28.228,15.923 27.921,16.104 C26.714,16.817 25.214,15.586 25.278,14.185 C25.344,12.765 25.609,12.832 28.045,12.552 C30.667,11.332 31.936,12.221 31.853,15.22 C33.474,15.46 34.04,14.744 33.551,13.071 C33.409,12.583 33.523,12.037 33.834,11.635 C36.82,7.75 39.315,6.055 43.887,4.486' id='Fill-1826' fill='%23199172' sketch:type='MSShapeGroup'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");`;
const icon_send 		= `background-image: url("data:image/svg+xml,%3Csvg width='58px' height='38px' viewBox='0 0 58 38' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%3E%3C!-- Generator: Sketch 3.2.2 %289983%29 - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3E301 - Send %28Flat%29%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'%3E%3Cg id='Icons' sketch:type='MSArtboardGroup' transform='translate%28-1201.000000, -1209.000000%29'%3E%3Cg id='301---Send-%28Flat%29' sketch:type='MSLayerGroup' transform='translate%281200.000000, 1209.000000%29'%3E%3Cpath d='M18,21 L59,0 L25,25 L45,38 L59,0 L0.936,12 L18,21' id='Fill-644' fill='%237383BF' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M25,25 L21.063,38 L18,21 L59,0 L25,25' id='Fill-645' fill='%23556080' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M25,25 L21,38 L32.848,30.102 L25,25' id='Fill-646' fill='%23464F66' sketch:type='MSShapeGroup'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");`;
const icon_hand 		= `background-image: url("data:image/svg+xml,%3Csvg width='47px' height='58px' viewBox='0 0 47 58' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%3E%3C!-- Generator: Sketch 3.2.2 %289983%29 - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3E103 - Privacy %28Flat%29%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'%3E%3Cg id='103---Privacy-%28Flat%29' sketch:type='MSLayerGroup' fill='%23F8B563'%3E%3Cpath d='M26,10 L26,25.5 C26,26.328 25.328,27 24.5,27 C23.672,27 23,26.328 23,25.5 L23,3 C23,1.343 21.657,0 20,0 C18.343,0 17,1.343 17,3 L17,25.5 C17,26.328 16.328,27 15.5,27 C14.672,27 14,26.328 14,25.5 L14,7.5 C14,6.12 12.881,5 11.5,5 C10.119,5 9,6.12 9,7.5 L9,27.5 C9,28.328 8.328,29 7.5,29 C6.672,29 6,28.328 6,27.5 L6,15 C6,13.62 4.881,12.5 3.5,12.5 L3.49,12.5 C2.109,12.5 0.99,13.62 0.99,15 L0.99,42.129 C1.826,54.208 8.45,57.066 17.8,57.066 C24.466,57.066 30.216,53.658 32.977,48.715 C34.138,46.841 41.171,35.89 41.775,34.747 C42.478,33.413 43.509,31.807 44.81,30.745 C45.503,30.178 45.964,29.427 46.391,28.64 C46.5,28.438 46.817,25.993 45,26 C43.424,26.006 41.625,26.67 40.32,27.552 C38.857,28.542 36.958,30.248 35.336,33.084 C34.809,34.005 33.866,34.648 32.804,34.672 C31.804,34.694 32.063,34.204 32,32.136 L32,10 C32,8.343 30.657,7 29,7 C27.343,7 26,8.343 26,10' id='Fill-1361' sketch:type='MSShapeGroup'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");`;
const icon_picture 		= `background-image: url("data:image/svg+xml,%3Csvg width='58px' height='46px' viewBox='0 0 58 46' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%3E%3C!-- Generator: Sketch 3.2.2 %289983%29 - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3E278 - Picture %28Flat%29%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'%3E%3Cg id='Icons' sketch:type='MSArtboardGroup' transform='translate%28-361.000000, -1565.000000%29'%3E%3Cg id='278---Picture-%28Flat%29' sketch:type='MSLayerGroup' transform='translate%28362.000000, 1566.000000%29'%3E%3Cpath d='M0,0 L56,0 L56,44 L0,44 L0,0 Z' id='Fill-663' fill='%23C3E1ED' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M0,0 L56,0 L56,44 L0,44 L0,0 Z' id='Stroke-664' stroke='%23E8EDEE' stroke-width='2' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M21.569,10.569 C21.569,14.197 18.628,17.138 15,17.138 C11.372,17.138 8.431,14.197 8.431,10.569 C8.431,6.941 11.372,4 15,4 C18.628,4 21.569,6.941 21.569,10.569' id='Fill-2563' fill='%23ED8A19' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M55,29.111 L54,28 L42,17 L31.5,28.5 L41,38 L55,38 L55,29.111' id='Fill-2564' fill='%23199172' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M1,42 L25,42 L10.017,27.017 L1,34.957 L1,42' id='Fill-2568' fill='%23199172' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M1,38 L55,38 L55,43 L1,43 L1,38 Z' id='Fill-2569' fill='%236B5B4B' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M36.983,33.983 L26.017,23.017 L9,38 L41,38 L36.983,33.983' id='Fill-2570' fill='%2325AE88' sketch:type='MSShapeGroup'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");`;
const icon_phone 		= `background-image: url("data:image/svg+xml,%3Csvg version='1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' enable-background='new 0 0 48 48'%3E%3Cpath fill='%23009688' d='M39.1,7l-3.7,0C22.2,7.2,7.1,24.1,7,35.4l0,3.7c0,1,0.8,1.9,1.9,1.9l7.5-0.1c1,0,1.9-0.9,1.9-1.9l0.2-8.2 l-4.7-4c0-2.6,10.5-13.1,13.2-13.2l4.3,4.7l7.9-0.2c1,0,1.9-0.9,1.9-1.9L41,8.9C41,7.8,40.2,7,39.1,7z'/%3E%3C/svg%3E%0A");`;
const icon_folder 		= `background-image: url("data:image/svg+xml,%3Csvg width='58px' height='47px' viewBox='0 0 58 47' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%3E%3C!-- Generator: Sketch 3.2.2 %289983%29 - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3E58 - Document Folder %28Flat%29%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'%3E%3Cg id='Icons' sketch:type='MSArtboardGroup' transform='translate%28-361.000000, -4202.000000%29'%3E%3Cg id='58---Document-Folder-%28Flat%29' sketch:type='MSLayerGroup' transform='translate%28360.000000, 4202.000000%29'%3E%3Cpath d='M47.324,47 L2.565,47 C1.535,47 0.786,46.022 1.055,45.028 L11.221,17.156 C11.405,16.474 12.024,16 12.731,16 L57.49,16 C58.52,16 59,16.985 59,17.973 L48.834,45.844 C48.65,46.526 48.031,47 47.324,47' id='Fill-1463' fill='%23F0CE49' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M11.221,17.156 C11.405,16.474 12.024,16 12.731,16 L54,16 L54,9 L10,9 L4,15 L4,36.953 L11.221,17.156' id='Fill-1549' fill='%23F4EFDC' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M24.571,5 L21,0 L2.732,0 C1.776,0 1,0.775 1,1.733 L1,44.46 C1.069,44.462 1.138,44.466 1.205,44.47 L4,36.849 L4,15 L6,13 L6,5 L24.571,5' id='Fill-1550' fill='%23ECBA16' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M6,5 L6,13 L10,9 L52,9 L52,5 L6,5' id='Fill-1551' fill='%23D1BF86' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M29,14 L31,14 L31,16 L29,16 L29,14 Z' id='Fill-2139' fill='%23BFBAA5' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M36,14 L38,14 L38,16 L36,16 L36,14 Z' id='Fill-2140' fill='%23BFBAA5' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M43,14 L45,14 L45,16 L43,16 L43,14 Z' id='Fill-2141' fill='%23BFBAA5' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M15,14 L17,14 L17,16 L15,16 L15,14 Z' id='Fill-2142' fill='%23BFBAA5' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M22,14 L24,14 L24,16 L22,16 L22,14 Z' id='Fill-2143' fill='%23BFBAA5' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M10,15 L10,9 L4,15 L10,15' id='Fill-3073' fill='%23CEC9AE' sketch:type='MSShapeGroup'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");`;
const icon_audio 		= `background-image: url("data:image/svg+xml,%3Csvg version='1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' enable-background='new 0 0 48 48'%3E%3Cg fill='%23E91E63'%3E%3Ccircle cx='19' cy='33' r='9'/%3E%3Cpolygon points='24,6 24,33 28,33 28,14 39,17 39,10'/%3E%3C/g%3E%3C/svg%3E%0A");`;
const icon_diamond 		= `background-image: url("data:image/svg+xml,%3Csvg width='58px' height='52px' viewBox='0 0 58 52' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%3E%3C!-- Generator: Sketch 3.2.2 %289983%29 - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3E102 - Diamond %28Flat%29%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'%3E%3Cg id='102---Diamond-%28Flat%29' sketch:type='MSLayerGroup'%3E%3Cpath d='M29,52 L0,16 L58,16 L29,52' id='Fill-204' fill='%23CC2E48' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M58,16 L0,16 L10,0 L48,0 L58,16' id='Fill-1362' fill='%23FC3951' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M42.154,16 L48,0 L10,0 L15.846,16 L42.154,16' id='Fill-2701' fill='%23F86363' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M42,16 L29,0 L16,16 L42,16' id='Fill-2702' fill='%23F49A9A' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M15.846,16 L29,52 L42.154,16 L15.846,16' id='Fill-2703' fill='%23CB465F' sketch:type='MSShapeGroup'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");`;
const icon_money 		= `background-image: url("data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='56px' height='63.999px' viewBox='0 0 56 63.999' style='enable-background:new 0 0 56 63.999;' xml:space='preserve'%3E%3Cg id='Sack'%3E%3Cg%3E%3Cpath style='fill-rule:evenodd;clip-rule:evenodd;fill:%2388C057;' d='M50,52c0-2.864,0-12-4-22c-4-10.001-14-12-14-16 c0-1.938,1.063-5.063,2-6.001c0.938-0.937,2-3.5,2-4C36,3.5,35.375,2,34,2s-3.688,0-6,0s-3.813-2-6-2s-4,0.875-4,2 s1.813,3.813,4,5.999C24.188,10.188,24,14,24,14c0,4-10,5.999-14,16C6,40,6,49.136,6,52s-6,6.946-6,8c0,1.053,1.044,2,2,2 c0.955,0,3.531-2,6-2s13.014,3.999,20,3.999S45.531,60,48,60s5.044,2,6,2c0.955,0,2-0.947,2-2C56,58.946,50,54.864,50,52z'/%3E%3C/g%3E%3C/g%3E%3Cg id='Rope_2_'%3E%3Cg%3E%3Cpath style='fill:%23FFCC66;' d='M32,11.999h-8c-1.104,0-2,0.896-2,2.001s0.896,2,2,2h8c1.104,0,2-0.896,2-2 S33.104,11.999,32,11.999z'/%3E%3C/g%3E%3C/g%3E%3Cg id='Dollar_2_'%3E%3Cg%3E%3Cpath style='fill-rule:evenodd;clip-rule:evenodd;fill:%23638C3F;' d='M30,38.321v-7.169C33.757,31.759,34.371,34,36,34 c1.156,0,2-0.969,2-2c0-1.859-2.761-4.375-8-4.897V26c0-1.105-0.896-2.001-2-2.001S26,24.895,26,26v1.121 c-4.563,0.569-8,3.153-8,7.879c0,4.825,3.839,6.011,8,6.696v7.127C22.547,48.187,21.757,46,20,46c-1.281,0-2,0.98-2,2 c0,1.565,2.639,4.324,8,4.889v1.11C26,55.104,26.896,56,28,56s2-0.896,2-2.001v-1.105c5.644-0.575,8-3.647,8-7.895 C38,40.516,34.919,39.188,30,38.321z M22,35c0-1.417,0.616-3.322,4-3.854v6.579C23.688,37.396,22,36.969,22,35z M30,48.8v-6.452 c2.818,0.59,4,1.393,4,2.651C34,46.817,32.584,48.295,30,48.8z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A");`;
const icon_idea 		= `background-image: url("data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='44px' height='64px' viewBox='0 0 44 64' style='enable-background:new 0 0 44 64;' xml:space='preserve'%3E%3Cg id='Bulb'%3E%3Cg%3E%3Cpath style='fill:%23FFD073;' d='M22,0C9.85,0,0,9.551,0,21.333C0,38,12,40,12,48h20c0-8,12-10,12-26.667C44,9.551,34.15,0,22,0z'/%3E%3C/g%3E%3C/g%3E%3Cg id='Spark'%3E%3Cg%3E%3Cpath style='fill-rule:evenodd;clip-rule:evenodd;fill:%23D4A548;' d='M28,20c-2.209,0-4,1.791-4,4h-4c0-2.209-1.791-4-4-4 s-4,1.791-4,4s1.791,4,4,4v20h4V28h4v20h4V28c2.209,0,4-1.791,4-4S30.209,20,28,20z'/%3E%3C/g%3E%3C/g%3E%3Cg id='Head'%3E%3Cg%3E%3Cellipse style='fill:%23949393;' cx='22' cy='58.014' rx='6' ry='5.986'/%3E%3C/g%3E%3C/g%3E%3Cg id='Body_2_'%3E%3Cg%3E%3Cpath style='fill-rule:evenodd;clip-rule:evenodd;fill:%23B3B3B3;' d='M32,50v-2H12v2c0,1.104,0.896,2,2,2c-1.104,0-2,0.895-2,2 c0,1.104,0.896,2,2,2h2c-1.104,0-2,0.895-2,2c0,1.104,0.896,1.999,2,1.999h12c1.104,0,2-0.895,2-1.999c0-1.105-0.896-2-2-2h2 c1.104,0,2-0.896,2-2c0-1.105-0.896-2-2-2C31.104,52,32,51.104,32,50z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A");`;
const icon_computer 	= `background-image: url("data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='64px' height='68px' viewBox='0 0 64 68' style='enable-background:new 0 0 64 68;' xml:space='preserve'%3E%3Cg id='Body_49_'%3E%3Cg%3E%3Cpath style='fill:%23CCCCCC;' d='M60,0H4C1.791,0,0,1.79,0,4v44c0,2.209,1.791,4,4,4h56c2.209,0,4-1.791,4-4V4 C64,1.79,62.209,0,60,0z'/%3E%3C/g%3E%3C/g%3E%3Cg id='Frame_9_'%3E%3Cg%3E%3Cpath style='fill-rule:evenodd;clip-rule:evenodd;fill:%234D4D4D;' d='M60,0H4C1.791,0,0,1.79,0,4v34v2v4h4h56h4v-4v-2V4 C64,1.79,62.209,0,60,0z'/%3E%3C/g%3E%3C/g%3E%3Cg id='Display_3_'%3E%3Cg%3E%3Cpath style='fill:%23808080;' d='M58,4H6C4.896,4,4,4.895,4,6v32c0,1.104,0.896,2,2,2h52c1.104,0,2-0.896,2-2V6 C60,4.895,59.104,4,58,4z'/%3E%3C/g%3E%3C/g%3E%3Cg id='Leg_4_'%3E%3Cg%3E%3Cpolygon style='fill-rule:evenodd;clip-rule:evenodd;fill:%23B3B3B3;' points='40,52 32,52 24,52 22,64 32,64 42,64 '/%3E%3C/g%3E%3C/g%3E%3Cg id='Stand_5_'%3E%3Cg%3E%3Cpath style='fill-rule:evenodd;clip-rule:evenodd;fill:%23CCCCCC;' d='M44,60H20c-2.209,0-4,1.79-4,4h32C48,61.79,46.209,60,44,60z' /%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A");`;
const icon_video 		= `background-image: url("data:image/svg+xml,%3Csvg version='1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' enable-background='new 0 0 48 48'%3E%3Cpath fill='%234CAF50' d='M8,12h22c2.2,0,4,1.8,4,4v16c0,2.2-1.8,4-4,4H8c-2.2,0-4-1.8-4-4V16C4,13.8,5.8,12,8,12z'/%3E%3Cpolygon fill='%23388E3C' points='44,35 34,29 34,19 44,13'/%3E%3C/svg%3E%0A");`;
const icon_pen 			= `background-image: url("data:image/svg+xml,%3Csvg width='54px' height='54px' viewBox='0 0 54 54' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%3E%3C!-- Generator: Sketch 3.2.2 %289983%29 - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3E83 - Edit %28Flat%29%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'%3E%3Cg id='Icons' sketch:type='MSArtboardGroup' transform='translate%28-964.000000, -3839.000000%29'%3E%3Cg id='83---Edit-%28Flat%29' sketch:type='MSLayerGroup' transform='translate%28964.000000, 3839.000000%29'%3E%3Cpath d='M40.343,3.089 C43.467,-0.036 48.533,-0.036 51.657,3.089 C54.781,6.213 54.781,11.278 51.657,14.402 L40.343,3.089' id='Fill-1364' fill='%23D75A4A' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M43.171,18.644 L17.257,44.559 L16.727,49.332 L45.293,20.766 L43.171,18.644' id='Fill-1365' fill='%23ED8A19' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M11.07,43.676 L15.843,43.145 L41.757,17.23 L37.515,12.988 L11.6,38.902 L11.07,43.676' id='Fill-1366' fill='%23ED8A19' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M36.101,11.574 L33.979,9.452 L5.413,38.018 L10.186,37.488 L36.101,11.574' id='Fill-1367' fill='%23ED8A19' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M49.535,16.524 L49.535,16.524 L51.657,14.402 L40.343,3.089 L38.222,5.21 L49.535,16.524' id='Fill-1368' fill='%23C7CBC7' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M36.808,6.624 L36.808,6.624 L35.393,8.038 L35.394,8.038 L46.707,19.352 L48.121,17.938 L36.808,6.624' id='Fill-1369' fill='%23C7CBC7' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M15.17,45.233 L10.048,45.802 C10.012,45.806 9.975,45.808 9.939,45.808 L9.937,45.808 L9.936,45.808 C9.899,45.808 9.863,45.806 9.827,45.802 C9.788,45.798 9.756,45.776 9.719,45.767 C9.646,45.751 9.577,45.732 9.511,45.701 C9.461,45.677 9.418,45.648 9.373,45.616 C9.316,45.576 9.264,45.534 9.216,45.483 C9.179,45.443 9.147,45.401 9.117,45.355 C9.078,45.299 9.048,45.24 9.022,45.175 C9,45.121 8.984,45.068 8.971,45.01 C8.965,44.978 8.947,44.951 8.943,44.918 C8.939,44.88 8.953,44.845 8.953,44.808 C8.953,44.77 8.939,44.736 8.943,44.697 L9.512,39.576 L4.391,40.145 C4.354,40.149 4.315,40.151 4.279,40.151 C4.2,40.151 4.127,40.126 4.053,40.108 L1.187,52.144 L3.293,50.038 C3.684,49.648 4.316,49.648 4.707,50.038 C5.098,50.429 5.098,51.062 4.707,51.452 L2.601,53.558 L14.631,50.694 C14.605,50.585 14.588,50.472 14.601,50.355 L15.17,45.233' id='Fill-1370' fill='%23FCCF9D' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M4.707,50.038 C4.316,49.648 3.684,49.648 3.293,50.038 L1.187,52.144 L0.745,54 L2.601,53.558 L4.707,51.452 C5.098,51.062 5.098,50.429 4.707,50.038' id='Fill-1371' fill='%2338454F' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M49.535,16.524 L38.222,5.21 L36.808,6.624 L48.121,17.938 L49.535,16.524' id='Fill-1372' fill='%23F3EDBF' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M41.757,17.23 L15.843,43.145 L11.07,43.676 L11.6,38.902 L37.515,12.988 L36.101,11.574 L10.186,37.488 L5.413,38.018 L4.281,39.151 L4.053,40.108 C4.127,40.126 4.2,40.151 4.279,40.151 C4.315,40.151 4.354,40.149 4.391,40.145 L9.512,39.576 L8.943,44.697 C8.939,44.736 8.953,44.77 8.953,44.808 C8.953,44.845 8.939,44.88 8.943,44.918 C8.947,44.951 8.965,44.978 8.971,45.01 C8.983,45.067 9,45.122 9.022,45.175 C9.047,45.239 9.079,45.299 9.117,45.355 C9.147,45.401 9.179,45.443 9.216,45.483 C9.263,45.533 9.317,45.577 9.373,45.616 C9.418,45.647 9.463,45.677 9.511,45.701 C9.576,45.732 9.647,45.75 9.719,45.767 C9.756,45.776 9.788,45.798 9.827,45.802 C9.863,45.806 9.899,45.808 9.936,45.808 L9.938,45.808 C9.975,45.808 10.012,45.806 10.048,45.802 L15.17,45.233 L14.601,50.355 C14.588,50.472 14.605,50.585 14.631,50.694 L15.594,50.464 L16.727,49.332 L17.257,44.559 L43.171,18.644 L41.757,17.23' id='Fill-1373' fill='%23ECBA16' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M46.707,19.352 L35.394,8.038 L35.393,8.038 L33.979,9.452 L45.293,20.766 L46.707,19.352' id='Fill-1374' fill='%23F3EDBF' sketch:type='MSShapeGroup'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");`;







/**
 * CoolConsole : Convert Any Param to String
 * @param {*} obj 
 */
function Convert2String(obj) {
    if (typeof obj == 'object' )      {   return JSON.stringify(obj);   }
    else if (typeof obj == 'string')  {   return obj;                   }
    else if (typeof obj == 'number')  {   return "" + obj + "";         } 
    else if (typeof obj == 'boolean') {   return obj.ValueOf();         }
    else                              {   return obj;                   }
   
}

/**
 * CoolConsole : Test if String or Number
 * @param {*} text text to verify
 */
function isStringOrNumber(text) {
    if (typeof text == 'string') { return true;}
    else if (typeof text == 'number') {return true;}
    else {return false;}
}




/**
 * CoolConsole : Test if CSS class exists
 * Return True if exists
 * Return False if not exists
 * @param {string} classname Class Name
 * 
 */
function class_exists(classname) {
    
    classname = '.' + classname;
    let exists = false;   
    let styles = document.styleSheets[0].cssRules;

    for (let index = 0; index < styles.length; index++) {
        if (styles[index].selectorText == classname) {  exists = true; }
        else  { continue; }
    }

    if (exists == true)     { return true;  }
    else                    { return false; }
    
}


/**
 * CoolConsole : if classexists return class CSS text
 * @param {string} classname Class Name
 */

function get_style(classname) {
    classname = '.' + classname;
    let styles = document.styleSheets[0].cssRules;

    for (let index = 0; index < styles.length; index++) {
        if (styles[index].selectorText == classname) {
           return styles[index].style.cssText;
        }
        else 
            continue;
            
    }
}


/**
 * CoolConsole : Write in Console using CSS
 * @param {string} text Text to Write
 * @param {string} classname Class Name
 */

function cc_custom(text, classname) {

    if (isStringOrNumber(text)) {            
            if (class_exists(classname) ) 
            {  console.log("%c" + text , get_style(classname)); }
            else
            { console.error("Class '" + classname + "' does not exists! Please Check your CSS Class name");  }
    }

    else {
        console.warn("You Can't use PrettyConsole with Objects 😪 ! Please Read Documentation");
        console.log(text);
    }

}




/**
 * CoolConsole : Primary Console Text
 * @param {string} text Text to Write
 * @param {boolean} [title] Optional - if you want to add Title
 * @param {string} [customTitle] Optional - Custom Title
 **/

function cc_primary(text, title, customTitle) {
    let title_text = "%c";

    if (!title && !customTitle) {
        title_text = "%c";
    }

    if (title && !customTitle) {
        title_text = "%c[ Primary ]";
    }

    if (title && customTitle) {
        title_text = "%c[ " + customTitle + " ]";
    }
    
    if (isStringOrNumber(text)){

        console.log("%c       "+title_text+" \n%c" + text, 

        `    background-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 40 40' enable-background='new 0 0 40 40' xml:space='preserve'%3E%3Cg id='Office'%3E%3Cg id='Drive_Lock_6_'%3E%3C/g%3E%3Cg id='Drive_Down_6_'%3E%3C/g%3E%3Cg id='Drive_Up_6_'%3E%3C/g%3E%3Cg id='Drive_4_'%3E%3C/g%3E%3Cg id='Screwdriver_3_'%3E%3C/g%3E%3Cg id='Wrench_2_'%3E%3C/g%3E%3Cg id='Flag_4_'%3E%3C/g%3E%3Cg id='Whistle_4_'%3E%3C/g%3E%3Cg id='Eye_Off_8_'%3E%3C/g%3E%3Cg id='Eye'%3E%3C/g%3E%3Cg id='Wand_4_'%3E%3C/g%3E%3Cg id='Swatches'%3E%3C/g%3E%3Cg id='Crop_6_'%3E%3C/g%3E%3Cg id='Adjust_3_'%3E%3C/g%3E%3Cg id='Picker'%3E%3C/g%3E%3Cg id='Vector_5_'%3E%3C/g%3E%3Cg id='Layer_Lock_6_'%3E%3C/g%3E%3Cg id='Layer_Minus_6_'%3E%3C/g%3E%3Cg id='Layer_Plus_6_'%3E%3C/g%3E%3Cg id='Layer_4_'%3E%3C/g%3E%3Cg id='File_Export_6_'%3E%3C/g%3E%3Cg id='File_Import_6_'%3E%3C/g%3E%3Cg id='File_4_'%3E%3C/g%3E%3Cg id='Note_Flag_5_'%3E%3C/g%3E%3Cg id='Note_Lock_5_'%3E%3C/g%3E%3Cg id='Note_Minus_5_'%3E%3C/g%3E%3Cg id='Note_Plus_5_'%3E%3C/g%3E%3Cg id='Note_3_'%3E%3C/g%3E%3Cg id='Folder_Flag_5_'%3E%3C/g%3E%3Cg id='Folder_Lock_5_'%3E%3C/g%3E%3Cg id='Folder_Minus_5_'%3E%3C/g%3E%3Cg id='Folder_Plus_5_'%3E%3C/g%3E%3Cg id='Folder_3_'%3E%3C/g%3E%3Cg id='Magnet_3_'%3E%3C/g%3E%3Cg id='Versions_6_'%3E%3C/g%3E%3Cg id='Inbox_Down_5_'%3E%3C/g%3E%3Cg id='Inbox_Up_5_'%3E%3C/g%3E%3Cg id='Inbox_3_'%3E%3C/g%3E%3Cg id='Email_Lock_5_'%3E%3C/g%3E%3Cg id='Email_Star_5_'%3E%3C/g%3E%3Cg id='Email_Flag'%3E%3C/g%3E%3Cg id='Email_Ban_5_'%3E%3C/g%3E%3Cg id='Email_Plus_5_'%3E%3C/g%3E%3Cg id='Email_Minus_5_'%3E%3C/g%3E%3Cg id='Email_Contact_5_'%3E%3C/g%3E%3Cg id='Email_3_'%3E%3C/g%3E%3Cg id='Bulb_4_'%3E%3C/g%3E%3Cg id='Shield_4_'%3E%3C/g%3E%3Cg id='Key_3_'%3E%3C/g%3E%3Cg id='Heat_4_'%3E%3C/g%3E%3Cg id='Calendar_6_'%3E%3C/g%3E%3Cg id='Briefcase'%3E%3C/g%3E%3Cg id='Messenger_Bag'%3E%3C/g%3E%3Cg id='Suitcase_5_'%3E%3C/g%3E%3Cg id='Trophy_4_'%3E%3C/g%3E%3Cg id='Bookmark'%3E%3C/g%3E%3Cg id='Book_03'%3E%3C/g%3E%3Cg id='Book_02'%3E%3C/g%3E%3Cg id='Book_01'%3E%3C/g%3E%3Cg id='Timer_8_'%3E%3C/g%3E%3Cg id='Alarm_10_'%3E%3C/g%3E%3Cg id='Clock_6_'%3E%3C/g%3E%3Cg id='Albums_5_'%3E%3C/g%3E%3Cg id='Plane_4_'%3E%3C/g%3E%3Cg id='Pin_Flag_4_'%3E%3C/g%3E%3Cg id='Tack'%3E%3Cg%3E%3Cg id='Tack_6_'%3E%3Cg%3E%3Cpolygon fill-rule='evenodd' clip-rule='evenodd' fill='%23BDC3C7' points='19,19.6 9.3,29.3 8.5,31.5 10.7,30.7 20.4,21 '/%3E%3C/g%3E%3C/g%3E%3Cg id='Tack_5_'%3E%3Cg%3E%3Crect x='18.2' y='13.3' transform='matrix%280.7071 -0.7071 0.7071 0.7071 -4.6318 21.513%29' fill-rule='evenodd' clip-rule='evenodd' fill='%233498D8' width='10.9' height='6'/%3E%3C/g%3E%3C/g%3E%3Cg id='Tack_4_'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' fill='%232980B9' d='M14.4,17.1l8.6,8.6l2.1-2.1l-8.6-8.6L14.4,17.1z M24.4,8.5 l-1.4,1.4l7.1,7.1l1.4-1.4L24.4,8.5z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg id='Paper_Clip'%3E%3C/g%3E%3Cg id='Pencil_4_'%3E%3C/g%3E%3Cg id='Lead_Pencil_3_'%3E%3C/g%3E%3Cg id='Sharpie_6_'%3E%3C/g%3E%3Cg id='Piechart_4_'%3E%3C/g%3E%3Cg id='Bargraph_6_'%3E%3C/g%3E%3C/g%3E%3Cg id='Lockup'%3E%3C/g%3E%3C/svg%3E%0A");
        background-repeat: no-repeat;background-size: contain ; 
         font-size: 13px; padding: 5px ; color: ` + COLOR_CONSOLE_PRIMARY + `;
        `   ,bold + DEFAULT_STYLE +`color:` + COLOR_CONSOLE_PRIMARY, `color: `+COLOR_CONSOLE_PRIMARY+ `;` + DEFAULT_STYLE
        
        );

        //console.log("%c" + text , `color: `+COLOR_CONSOLE_PRIMARY+ `;` + DEFAULT_STYLE);
    }
    else {
        console.warn("You Can't use PrettyConsole with Objects 😪 ! Please Read Documentation");
        console.log(text);
    }
    
}


/**
 * CoolConsole : Success Console Text
 * @param {string} text Text to Write
 * @param {boolean} [title] Optional - if you want to add Title
 * @param {string} [customTitle] Optional - Custom Title
 */
function cc_success(text, title, customTitle) {
    
    let title_text = "%c";

    if (!title && !customTitle) {
        title_text = "%c";
    }

    if (title && !customTitle) {
        title_text = "%c[ Success ]";
    }

    if (title && customTitle) {
        title_text = "%c[ " + customTitle + " ]";
    }


    if (isStringOrNumber(text)) {
        console.log("%c       "+title_text+" \n%c" + text,  

        `    background-image: url("data:image/svg+xml,%0A%3Csvg version='1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' enable-background='new 0 0 48 48'%3E%3Ccircle fill='%234CAF50' cx='24' cy='24' r='21'/%3E%3Cpolygon fill='%23CCFF90' points='34.6,14.6 21,28.2 15.4,22.6 12.6,25.4 21,33.8 37.4,17.4'/%3E%3C/svg%3E%0A");
        background-repeat: no-repeat;background-size: contain ; 
         font-size: 13px; padding: 5px ; color: ` + COLOR_CONSOLE_SUCCESS + `;
        `   ,bold + DEFAULT_STYLE +`color:` + COLOR_CONSOLE_SUCCESS, `color: `+COLOR_CONSOLE_SUCCESS+ `;` + DEFAULT_STYLE
        
        );
        
        //console.log("%c      " + text , `color: `+COLOR_CONSOLE_SUCCESS+ `;` + DEFAULT_STYLE + logo_success);
    }
    else {
        console.warn("You Can't use PrettyConsole with Objects 😪 ! Please Read Documentation");
        console.log(text);
    }
}


/**
 * CoolConsole : Info Console Text
 * @param {string} text Text to Write
 * @param {boolean} [title] Optional - if you want to add Title
 * @param {string} [customTitle] Optional - Custom Title
 */
function cc_info(text, title, customTitle) {
    let title_text = "%c";

    if (!title && !customTitle) {
        title_text = "%c";
    }

    if (title && !customTitle) {
        title_text = "%c[ Info ]";
    }

    if (title && customTitle) {
        title_text = "%c[ " + customTitle + " ]";
    }
    
    if (isStringOrNumber(text)) {
        
        console.log("%c       "+title_text+" \n%c" + text,  

        `    background-image: url("data:image/svg+xml,%0A%3Csvg version='1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' enable-background='new 0 0 48 48'%3E%3Ccircle fill='%232196F3' cx='24' cy='24' r='21'/%3E%3Crect x='22' y='22' fill='%23fff' width='4' height='11'/%3E%3Ccircle fill='%23fff' cx='24' cy='16.5' r='2.5'/%3E%3C/svg%3E%0A");
        background-repeat: no-repeat;background-size: contain ; 
         font-size: 13px; padding: 5px ; color: ` + COLOR_CONSOLE_INFO + `;
        `   ,bold + DEFAULT_STYLE +`color:` + COLOR_CONSOLE_INFO, `color: `+COLOR_CONSOLE_INFO+ `;` + DEFAULT_STYLE
        
        );
        
        
        //console.log("%c      " + text , `color: `+COLOR_CONSOLE_INFO+ `;` + DEFAULT_STYLE + logo_info);
    }
    else {
        console.warn("You Can't use PrettyConsole with Objects 😪 ! Please Read Documentation");
        console.log(text);
    }
}


/**
 * CoolConsole : Warning Console Text
 * @param {string} text Text to Write
 * @param {boolean} [title] Optional - if you want to add Title
 * @param {string} [customTitle] Optional - Custom Title
 */
function cc_warning(text, title, customTitle) {
    let title_text = "%c";

    if (!title && !customTitle) {
        title_text = "%c";
    }

    if (title && !customTitle) {
        title_text = "%c[ Warning ]";
    }

    if (title && customTitle) {
        title_text = "%c[ " + customTitle + " ]";
    }
    
    if (isStringOrNumber(text)) {
       
        console.log("%c       "+title_text+" \n%c" + text,  

        `    background-image: url("data:image/svg+xml,%3Csvg width='50px' height='50px' viewBox='-5 -5 58 58' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%3E%3C!-- Generator: Sketch 3.2.2 %289983%29 - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3E226 - Warning %28Flat%29%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'%3E%3Cg id='226---Warning-%28Flat%29' sketch:type='MSLayerGroup'%3E%3Cpath d='M50,25 C50,38.807 38.807,50 25,50 C11.193,50 0,38.807 0,25 C0,11.193 11.193,0 25,0 C38.807,0 50,11.193 50,25' id='Fill-718' fill='%23F0CE49' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M25,10 L25,32' id='Path' stroke='%23FFFFFF' stroke-width='2' stroke-linecap='round' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M25,37 L25,39' id='Path' stroke='%23FFFFFF' stroke-width='2' stroke-linecap='round' sketch:type='MSShapeGroup'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        background-repeat: no-repeat;background-size: contain ; 
         font-size: 13px; padding: 5px ; color: ` + COLOR_CONSOLE_WARNING+ `;
        `   ,bold + DEFAULT_STYLE +`color:` + COLOR_CONSOLE_WARNING, `color: `+COLOR_CONSOLE_WARNING+ `;` + DEFAULT_STYLE
        
        );
       
       
       
        // console.log("%c" + text , `color: `+COLOR_CONSOLE_WARNING+ `;` + DEFAULT_STYLE);
    }
    else {
        console.warn("You Can't use PrettyConsole with Objects 😪 ! Please Read Documentation");
        console.log(text);
    }
}


/**
 * CoolConsole : Danger Console Text
 * @param {string} text Text to Write
 * @param {boolean} [title] Optional - if you want to add Title
 * @param {string} [customTitle] Optional - Custom Title
 */
function cc_danger(text, title, customTitle) {
    let title_text = "%c";

    if (!title && !customTitle) {
        title_text = "%c";
    }

    if (title && !customTitle) {
        title_text = "%c[ Danger ]";
    }

    if (title && customTitle) {
        title_text = "%c[ " + customTitle + " ]";
    }
    
    if (isStringOrNumber(text)) {

        console.log("%c       "+title_text+" \n%c" + text,  

        `    background-image: url("data:image/svg+xml,%3Csvg width='50px' height='50px' viewBox='-5 -5 58 58' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%3E%3C!-- Generator: Sketch 3.2.2 %289983%29 - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3E228 - Error %28Flat%29%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'%3E%3Cg id='228---Error-%28Flat%29' sketch:type='MSLayerGroup'%3E%3Cpath d='M50,25 C50,38.807 38.807,50 25,50 C11.193,50 0,38.807 0,25 C0,11.193 11.193,0 25,0 C38.807,0 50,11.193 50,25' id='Fill-716' fill='%23D75A4A' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M16,34 L34,16' id='Path' stroke='%23FFFFFF' stroke-width='2' stroke-linecap='round' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M16,16 L34,34' id='Path' stroke='%23FFFFFF' stroke-width='2' stroke-linecap='round' sketch:type='MSShapeGroup'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        background-repeat: no-repeat;background-size: contain ; 
         font-size: 13px; padding: 5px ; color: ` + COLOR_CONSOLE_DANGER+ `;
        `  ,bold + DEFAULT_STYLE +`color:` + COLOR_CONSOLE_DANGER, `color: `+COLOR_CONSOLE_DANGER+ `;` + DEFAULT_STYLE
        
        );
        //console.log("%c      " + text , `color: `+COLOR_CONSOLE_DANGER+ `;` + DEFAULT_STYLE + logo_danger);
    }
    else {
        console.warn("You Can't use PrettyConsole with Objects 😪 ! Please Read Documentation");
        console.log(text);
    }
}

/**
 * CoolConsole : Error Console Text (Same as cc_danger)
 * @param {string} text Text to Write
 * @param {boolean} [title] Optional - if you want to add Titles
 * @param {string} [customTitle] Optional - Custom Title
 */
function cc_error(text, title, customTitle) {
    let title_text = "%c";

    if (!title && !customTitle) {
        title_text = "%c";
    }

    if (title && !customTitle) {
        title_text = "%c[ Error ]";
    }

    if (title && customTitle) {
        title_text = "%c[" + customTitle + "]";
    }
    
    if (isStringOrNumber(text)) {

        console.log("%c       "+title_text+" \n%c" + text, 

        `    background-image: url("data:image/svg+xml,%3Csvg width='50px' height='50px' viewBox='-5 -5 58 58' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%3E%3C!-- Generator: Sketch 3.2.2 %289983%29 - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3E228 - Error %28Flat%29%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'%3E%3Cg id='228---Error-%28Flat%29' sketch:type='MSLayerGroup'%3E%3Cpath d='M50,25 C50,38.807 38.807,50 25,50 C11.193,50 0,38.807 0,25 C0,11.193 11.193,0 25,0 C38.807,0 50,11.193 50,25' id='Fill-716' fill='%23D75A4A' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M16,34 L34,16' id='Path' stroke='%23FFFFFF' stroke-width='2' stroke-linecap='round' sketch:type='MSShapeGroup'%3E%3C/path%3E%3Cpath d='M16,16 L34,34' id='Path' stroke='%23FFFFFF' stroke-width='2' stroke-linecap='round' sketch:type='MSShapeGroup'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        background-repeat: no-repeat;background-size: contain ; 
         font-size: 13px; padding: 5px ; color: ` + COLOR_CONSOLE_DANGER+ `;
        `  ,bold + DEFAULT_STYLE +`color:` + COLOR_CONSOLE_DANGER, `color: `+COLOR_CONSOLE_DANGER+ `;` + DEFAULT_STYLE
        
        );
        //console.log("%c      " + text , `color: `+COLOR_CONSOLE_DANGER+ `;` + DEFAULT_STYLE + logo_danger);
    }
    else {
        console.warn("You Can't use PrettyConsole with Objects 😪 ! Please Read Documentation");
        console.log(text);
    }
}


/**
 * CoolConsole : check if param is icon
 * @param {string} icon - ICON to check 
 */
function check_icon(logo) {
    if (
               logo != icon_flower 		
            && logo != icon_ok 			
            && logo != icon_heart 		
            && logo != icon_user_f 		
            && logo != icon_user_m 		
            && logo != icon_message 		
            && logo != icon_facebook 	
            && logo != icon_youtube 		
            && logo != icon_github 		
            && logo != icon_add 			
            && logo != icon_remove 		
            && logo != icon_time 		
            && logo != icon_music 		
            && logo != icon_setting 		
            && logo != icon_cursor 		
            && logo != icon_star 		
            && logo != icon_greenflag 	
            && logo != icon_redflag 		
            && logo != icon_yellowflag 	
            && logo != icon_blueflag 	
            && logo != icon_key 			
            && logo != icon_love 		
            && logo != icon_map 			
            && logo != icon_thumb_up 	
            && logo != icon_thumb_down 	
            && logo != icon_zoomin 		
            && logo != icon_zoomout 		
            && logo != icon_wifi 		
            && logo != icon_world 		
            && logo != icon_send 		
            && logo != icon_hand 		
            && logo != icon_picture 		
            && logo != icon_phone 		
            && logo != icon_folder 		
            && logo != icon_audio 		
            && logo != icon_diamond 		
            && logo != icon_money 		
            && logo != icon_idea 		
            && logo != icon_computer 	
    )
        return false;
    else {
        return true;
    }
}



/**
 * Console Text with Icon 
 * @param {string} text Text to Write
 * @param {string} [customTitle] Optional - Custom Title
 */
function cc_icon(logo, text, customTitle) {
    
    if(!text) {
        console.error("Text is empty! Please check your text");
        return;
    }

    if (check_icon(logo)) {
        
        let title_text = "%c";

        if (!customTitle) {
            title_text = "%c";
        }
    
        if (customTitle) {
            title_text = "%c[ " + customTitle + " ]";
        }
        
        if (isStringOrNumber(text)) {
    
            console.log("%c     "+title_text+"\n%c " + text, 
    
            `    `+logo+`
            background-repeat: no-repeat;background-size: contain ; 
             font-size: 13px; padding: 5px ; color: ` + COLOR_CONSOLE_DEFAULT+ `;
            `  ,bold, `color: `+COLOR_CONSOLE_DEFAULT+ `;` + DEFAULT_STYLE
            
            );
            //console.log("%c      " + text , `color: `+COLOR_CONSOLE_DANGER+ `;` + DEFAULT_STYLE + logo_danger);
        }
        else {
            console.warn("You Can't use PrettyConsole with Objects 😪 ! Please Read Documentation");
            console.log(text);
        }
    }
    else {
        console.error("Incorrect Icon! Please Read Documentation");
    }

    
}












/**
 * CoolConsole : Custom Color Console Text
 * @param {string} text Text To Write
 * @param {string} color Color of Text 
 */
function cc_color(text, color) {
    if (isStringOrNumber(text)) {
        console.log("%c" + text , `color: `+color+ `;` + DEFAULT_STYLE);
    }
    else {
        console.warn("You Can't use PrettyConsole with Objects 😪 ! Please Read Documentation");
        console.log(text);
    }

}




/**
 * CoolConsole : Zebre Colors : Console Text
 * @param {string} text  Text to Write
 */

function cc_zebre(){
        
    if (isStringOrNumber(arguments[0])) {
        
        let color1 = DEFAULT_STYLE + " color: grey";
        let color2 = DEFAULT_STYLE + " color : black";
    
        let text = arguments[0].toString();
        let args = new Array();
        /*for (let i = 1; i < arguments.length; i++) {
                args.push(arguments[i]);
        }*/
    
        let newtext = '';
        let text_length = text.length;
        for (let index = 0; index < text_length; index++) {
    
            newtext += "%c" + text.charAt(index);
            
        }
    
        args.push(newtext);
    
        for (let index = 0; index < text_length; index++) {
            if (index % 2 == 0 /*zawji*/)
                args.push(color1);
            else {
                args.push(color2);
            }
        }
        // text will be like this 
        //%cH %cE %cL %cL %cO
    
        return console.log.apply(this , args);
    }
    
    else {
        console.warn("You Can't use PrettyConsole with Objects 😪 ! Please Read Documentation");
        console.log(arguments[0]);
    }
}

/**
 * CoolConsole : Rainbow Colors : Console Text
 * @param {string} text  Text to Write
 */
function cc_rainbow(text) {

    if (isStringOrNumber(arguments[0])) {

    let args = Array();
    let color1 = DEFAULT_STYLE +" color: red";
    let color2 = DEFAULT_STYLE +" color: orange";
    let color3 = DEFAULT_STYLE +" color: yellow";
    let color4 = DEFAULT_STYLE +" color: green";
    let color5 = DEFAULT_STYLE +" color: blue";
    let color6 = DEFAULT_STYLE +" color: indigo";
    let color7 = DEFAULT_STYLE +" color: violet";

    let colors = [color1, color2, color3, color4, color5, color6, color7];
    text = text.toString();

    let newtext = '';
    let text_length = text.length;
    for (let index = 0; index < text_length; index++) {

        newtext += "%c" + text.charAt(index);
        
    }


    args.push(newtext);

    let counter = 0;
    for (let index = 0; index < text_length; index++) {
        if (counter < 7) {
            args.push(colors[counter]);
            counter++
        }
        else {
            counter = 0
            args.push(colors[counter]);
            counter++;
        }
    }
    //newtext = "%cH%c.....;

    //return args;

    return console.log.apply(this , args);
}

    else {
        console.warn("You Can't use PrettyConsole with Objects 😪 ! Please Read Documentation");
        console.log(text);
    }

}


/**
 * CoolConsole : Bold Text : Console Text
 * @param {string} text  Text to Write
 */
function cc_bold(text) {
    if (isStringOrNumber(text)) {
        console.log("%c" + text , DEFAULT_STYLE + bold);
    }
    else {
        console.warn("You Can't use PrettyConsole with Objects 😪 ! Please Read Documentation");
        console.log(text);
    }
}


/**
 * CoolConsole : Italic Text : Console Text
 * @param {string} text  Text to Write
 */

function cc_italic(text) {
    if (isStringOrNumber(text)) {
        console.log("%c" + text , DEFAULT_STYLE + italic);
    }
    else {
        console.warn("You Can't use PrettyConsole with Objects 😪 ! Please Read Documentation");
        console.log(text);
    }
}


/**
 * CoolConsole : Midline Text : Console Text
 * @param {string} text  Text to Write
 */
function cc_midline(text) {
    if (isStringOrNumber(text)) {
        console.log("%c" + text , DEFAULT_STYLE + midline);
    }
    else {
        console.warn("You Can't use PrettyConsole with Objects 😪 ! Please Read Documentation");
        console.log(text);
    }
}

/**
 * CoolConsole : Underline Text : Console Text
 * @param {string} text  Text to Write
 */
function cc_underline(text) {
    if (isStringOrNumber(text)) {
        console.log("%c" + text , DEFAULT_STYLE + underline);
    }
    else {
        console.warn("You Can't use PrettyConsole with Objects 😪 ! Please Read Documentation");
        console.log(text);
    } 
}

/**
 * CoolConsole : Small Text : Console Text
 * @param {string} text  Text to Write
 */
function cc_xsmall(text) {
    if (isStringOrNumber(text)) {
        console.log("%c" + text , DEFAULT_STYLE + xsmall);
    }
    else {
        console.warn("You Can't use PrettyConsole with Objects 😪 ! Please Read Documentation");
        console.log(text);
    } 
}

/**
 * CoolConsole : Small Text : Console Text
 * @param {string} text  Text to Write
 */
function cc_small(text) {
    if (isStringOrNumber(text)) {
        console.log("%c" + text , DEFAULT_STYLE + small);
    }
    else {
        console.warn("You Can't use PrettyConsole with Objects 😪 ! Please Read Documentation");
        console.log(text);
    } 
}


/**
 * CoolConsole : Medium Text : Console Text
 * @param {string} text  Text to Write
 */
function cc_medium(text) {
    if (isStringOrNumber(text)) {
        console.log("%c" + text , DEFAULT_STYLE + medium);
    }
    else {
        console.warn("You Can't use PrettyConsole with Objects 😪 ! Please Read Documentation");
        console.log(text);
    } 
}


/**
 * CoolConsole : Large Text : Console Text
 * @param {string} text  Text to Write
 */
function cc_large(text) {
    if (isStringOrNumber(text)) {
        console.log("%c" + text , DEFAULT_STYLE + large);
    }
    else {
        console.warn("You Can't use PrettyConsole with Objects 😪 ! Please Read Documentation");
        console.log(text);
    } 
}


/**
 * CoolConsole : X-Large Text : Console Text
 * @param {string} text  Text to Write
 */
function cc_xlarge(text) {
    if (isStringOrNumber(text)) {
        console.log("%c" + text , DEFAULT_STYLE + xlarge);
    }
    else {
        console.warn("You Can't use PrettyConsole with Objects 😪 ! Please Read Documentation");
        console.log(text);
    } 
}


/**
 * CoolConsole : ColorConsole - Apply Style to All Text
 * @param {string} text  Text to Write
 * @param {...*} [style] bold, italic, underline, midline, small, medium, large, xlarge
 * @param {...*} [color] Color of text
 * @param {...*} [customcolor] Color of text (using #ffffff colors)
 * @param {...*} [bgcolor] Background Color
 * @param {...*} [fontsize] Font Size
 * @example
 * // returns bold , italic , red console.log text
 * cc("text", bold, italic, red);
 * @example
 * // returns underline, 25px, #ff00ff console.log text
 * cc("text", underline, "25px", "#ff00ff")
 */
function cc_all() {

if (isStringOrNumber(arguments[0])) {
    let text = arguments[0];
    let text_styles = "";
    let args = Array();

    //push text to "args" array at args[0]  
    args.push(text);
    
    //push arguments inside "args" array
    for (let index = 1; index < arguments.length; index++) {
        args.push(arguments[index]);
    }

    // Loop through Arguments
    args.forEach(element => {

        
        
         /** Font Styles */
         if (element == normal)       { text_styles += normal ;     }
         if (element == bold)       { text_styles += bold ;     }
         if (element == italic)     { text_styles += italic;    }
         if (element == underline)  { text_styles += underline; }
         if (element == midline)    { text_styles += midline;   }
         if (element == xsmall)    { text_styles += xsmall;   }
         if (element == small)    { text_styles += small;   }
         if (element == medium)    { text_styles += medium;   }
         if (element == large)    { text_styles += large;   }
         if (element == xlarge)    { text_styles += xlarge;   }
         /** Colors */

         if (element == red)        { text_styles += red;       }
         if (element == orange)     { text_styles += orange;    }
         if (element == yellow)     { text_styles += yellow;    } 
         if (element == green)      { text_styles += green;     } 
         if (element == blue)       { text_styles += blue;      } 
         if (element == indigo)     { text_styles += indigo;    } 
         if (element == violet)     { text_styles += violet;    } 
         if (element == brown)      { text_styles += brown;     } 
         if (element == black)      { text_styles += black;     } 
         if (element == grey)       { text_styles += grey;      } 
         if (element == white)      { text_styles += white;     } 
         if (element == cyan)       { text_styles += cyan;      } 
         if (element == pink)       { text_styles += pink;      } 
         if (element == magenta)    { text_styles += magenta;   } 
         if (element == navy)       { text_styles += navy;      } 
         if (element == gold)       { text_styles += gold;      }


         /** Background Colors */

         if (element == bg_red)        { text_styles += bg_red;       }
         if (element == bg_orange)     { text_styles += bg_orange;    }
         if (element == bg_yellow)     { text_styles += bg_yellow;    } 
         if (element == bg_green)      { text_styles += bg_green;     } 
         if (element == bg_blue)       { text_styles += bg_blue;      } 
         if (element == bg_indigo)     { text_styles += bg_indigo;    } 
         if (element == bg_violet)     { text_styles += bg_violet;    } 
         if (element == bg_brown)      { text_styles += bg_brown;     } 
         if (element == bg_black)      { text_styles += bg_black;     } 
         if (element == bg_grey)       { text_styles += bg_grey;      } 
         if (element == bg_white)      { text_styles += bg_white;     } 
         if (element == bg_cyan)       { text_styles += bg_cyan;      } 
         if (element == bg_pink)       { text_styles += bg_pink;      } 
         if (element == bg_magenta)    { text_styles += bg_magenta;   } 
         if (element == bg_navy)       { text_styles += bg_navy;      } 
         if (element == bg_gold)       { text_styles += bg_gold;      }

         /** CUSTOM FONT COLOR */

         if (element.toString().includes("#")) {  text_styles += " color: " + element + ";"    }
         
         /** CUSTOM FONT SIZE */

         if (element.toString().includes("%")   || 
             element.toString().includes("ch")  ||
             element.toString().includes("cm")  ||
             element.toString().includes("em")  ||
             element.toString().includes("ex")  ||
             element.toString().includes("in")  ||
             element.toString().includes("mm")  ||
             element.toString().includes("pc")  ||
             element.toString().includes("pt")  ||
             element.toString().includes("px")  ||
             element.toString().includes("rem") ||
             element.toString().includes("vh")
            ) {
            text_styles += " font-size: " + element + ";"
        }

    });

    /** RESULT */
    console.log("%c" + arguments[0], text_styles);
    
}
else {
    console.warn("You Can't use PrettyConsole with Objects 😪 ! Please Read Documentation");
    console.log(arguments[0]);
}
}



/**
 * CoolConsole : Check if text is a string not a style param
 * @param {text} text 
 */
function isTextNotParam(text) {
    if ( text != normal &&
         text != bold &&
         text != italic &&
         text != underline &&
         text != midline &&
         text != xsmall    &&
         text != small  &&
         text != medium &&
         text != large &&
         text != xlarge &&
         text != red &&
         text != orange &&
         text != yellow &&
         text != blue &&
         text != green &&
         text != indigo &&
         text != brown &&
         text != black &&
         text != grey &&
         text != white &&
         text != cyan &&
         text != pink &&
         text != magenta &&
         text != gold &&
         text != navy &&
         text != bg_red &&
         text != bg_orange &&
         text != bg_yellow &&
         text != bg_blue &&
         text != bg_indigo &&
         text != bg_brown &&
         text != bg_black &&
         text != bg_grey &&
         text != bg_white &&
         text != bg_cyan &&
         text != bg_pink &&
         text != bg_magenta &&
         text != bg_gold &&
         text != bg_green &&
         text != bg_navy &&
         /** Check size param */
         !(text.toString().includes("px")) &&
         /** Check custom color param */
         !(text.toString().includes("#"))
         // !(text.includes("%" )) &&
         //!(text.includes("ch"))  &&
         //!(text.includes("cm"))  &&
         //!(text.includes("em"))  &&
         //!(text.includes("ex"))  &&
         //!(text.includes("in"))  &&
         //!(text.includes("mm"))  &&
         //!(text.includes("pc"))  &&
         //!(text.includes("pt"))  &&
         //!(text.includes("px"))  &&
         //!(text.includes("rem")) &&
         //!(text.includes("vh"))

        /** Must find a fix for % ch cm em ex in ... */
      )
      return true;

      else {
          return false;
      }

}


/**
 * CoolConsole : Check if text is Size Param
 * @param {string} text 
 */
function test_sizeparam(text) {
    if ((text.includes("px"))   &&  (!text.includes("font-size"))     )
    //(text.includes("%" ))  ||
    //(text.includes("ch"))  ||
    //(text.includes("cm"))  ||
    //(text.includes("em"))  ||
    //(text.includes("ex"))  ||
    //(text.includes("in"))  ||
    //(text.includes("mm"))  ||
    //(text.includes("pc"))  ||
    //(text.includes("pt"))  ||
    //(text.includes("px"))  ||
    //(text.includes("rem")) ||
    //(text.includes("vh")))
    
                return true;

    else
                return false;
}



/**
 * CoolConsole : Convert Text to CSS "font-size" 
 * @param {string} text 
 */
function add_stylesizeparam(text) {
    let  text_size_css = "";    
    if (test_sizeparam(text)) {
        text_size_css += " font-size: " + text + ";"
    }
    return text_size_css;
}



/**
 * CoolConsole : Check if text is RGB Color
 * @param {text} text 
 */
function test_customcolor(text) {
    if ((text.includes("#")))
    
                return true;

    else
                return false;
}


/**
 * CoolConsole : Convert Text to CSS "color"
 * @param {string} text 
 */
function add_StyleCustomColorParam(text) {
    let  style_color_css = "";    
    if (test_customcolor(text)) {
        style_color_css += " color: " + text + ";"
    }
    return style_color_css;
}



/**
 * CoolConsole : ColorConsole - Default with Multi Text Style
 * @param {...string} text  Text to Write
 * @param {...*} [style] bold, italic, underline, midline, small, medium, large, xlarge
 * @param {...*} [color] Color of text
 * @param {...*} [customcolor] Color of text (using #ffffff colors)
 * @param {...*} [bgcolor] Background Color
 * @param {...*} [fontsize] Font Size
 * @example
 * cc("Hello", bold, italic, red , " World" , underline, "20px");
 */
function cc() {

        let all_text_with_c = "";
        let args = Array();
        let text_array = Array();
        
        let counter_args = 0;
        let counter_text = 0;

        let isObj = false;
        //push arguments inside "args" array
        for (let index = 0; index < arguments.length; index++) {

            if (typeof arguments[index] != "string" && typeof arguments[index] != "number") {
                isObj = true;
                console.warn("You Can't use CoolConsole with Objects 😪 ! Please Read Documentation");
                console.log(arguments[index]);
                
            }
            
            if (isTextNotParam(arguments[index])) {
                all_text_with_c += "%c" + arguments[index] ;
                text_array.push(arguments[index]);
                counter_text++; 
            }

            else {
              

                //fix for custom color
                if (test_customcolor(arguments[index])) {
                    arguments[index] = add_StyleCustomColorParam(arguments[index]);
                }



                //fix for px param
                if (test_sizeparam(arguments[index])) {
                    arguments[index] = add_stylesizeparam(arguments[index]);
                }
                   
                
                if (counter_args >= counter_text) {
                    
                    args[args.length - 1] = args[args.length - 1] + arguments[index];                     
                }
                else{
                    args.push(arguments[index]);
                    counter_args++;
               
                }  
            }
            
            
            
        }

        args.unshift(all_text_with_c);
        
        if ( isTextNotParam(   arguments[arguments.length - 1] ) )
            {
                args.push(normal);
                //console.error("The last Parameter must be a style not a text! Please Read Documentation" );
                //return;
            }       
        
        //console.log("counter args : " +counter_args);
        //console.log("counter text : " +counter_text);
        //return args;
            if (!isObj){
                return console.log.apply(this , args);
            }
           
    

}



/**
 * CoolConsole : Line Break
 * @param {string} [color] Color of Line 
 */
function cc_line(color){

    if(!color) {
        color = "ED7161";
    }
    let mycolor = color.replace("#" , "%23");
            console.log("%c\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" , 
            `
            font-size: 12px;
            background-image: url("data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='64px' height='64px' viewBox='0 0 64 64' style='enable-background:new 0 0 64 64;' xml:space='preserve'%3E%3Cg id='Line_11_'%3E%3Cg%3E%3Cpath style='fill:`+mycolor+`;' d='M62,60H2c-1.104,0-2,0.896-2,2.001C0,63.104,0.896,64,2,64h60c1.104,0,2-0.896,2-1.999 C64,60.896,63.104,60,62,60z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A");
            background-size: contain ;
            background-position-y: 7px;
            `);
}
