const icons = {
  // TODO: check icons
  icon_delivery: `
    <svg data-name="Group 10 copy" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><defs><style>.cls-1,.cls-2{fill:#307fdd;fill-rule:evenodd;}.cls-2{opacity:0.1;}</style></defs><path data-name="Ellipse 3 copy" class="cls-1" d="M707,96h-1.1a5,5,0,0,1-9.8,0H683.9a5,5,0,0,1-9.8,0H673a3,3,0,0,1-3-3V80a3,3,0,0,1,3-3h26.974c1.657,0,2.884,1.325,4.044,2.609L710,85.989V93A3,3,0,0,1,707,96Zm-6,2a3,3,0,1,0-3-3A3,3,0,0,0,701,98Zm-22,0a3,3,0,1,0-3-3A3,3,0,0,0,679,98Zm29-11h-9a2,2,0,0,1-2-2V82a1,1,0,0,1,2,0v3h7.51l-4.646-4.9A3.29,3.29,0,0,0,699.81,79H673a1,1,0,0,0-1,1V93a1,1,0,0,0,1,1h1.1a5,5,0,0,1,9.8,0h12.2a5,5,0,0,1,9.8,0H707a1,1,0,0,0,1-1V87Zm-17,1h-5a1,1,0,0,1,0-2h5A1,1,0,0,1,691,88Zm0-3H679a1,1,0,0,1,0-2h12A1,1,0,0,1,691,85ZM680.076,69.593a1,1,0,0,1,1.322-.5l3.45,1.546a2.454,2.454,0,0,1,2.568-.458l2.872-2.913A1,1,0,0,1,691.7,68.68L688.825,71.6a2.463,2.463,0,0,1,.175.9,2.5,2.5,0,0,1-5,0c0-.017,0-0.033,0-0.05l-3.426-1.535A1,1,0,0,1,680.076,69.593ZM686.5,73a0.5,0.5,0,1,0-.5-0.5A0.5,0.5,0,0,0,686.5,73Zm10.188,2a10.5,10.5,0,1,0-20.376,0h-2.061a12.5,12.5,0,1,1,24.5,0h-2.061Z" transform="translate(-670 -60)"></path><path class="cls-2" d="M701,99a4,4,0,1,1,4-4A4,4,0,0,1,701,99ZM679.13,75a9.5,9.5,0,1,1,18.74,0H679.13ZM683,95a4,4,0,1,1-4-4A4,4,0,0,1,683,95Z" transform="translate(-670 -60)"></path></svg>
  `,
  icon_service: `
    <svg data-name="Group 9 copy" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><defs><style>.cls-1,.cls-2{fill:#307fdd;fill-rule:evenodd;}.cls-2{opacity:0.1;}</style></defs><path data-name="Rounded Rectangle 24 copy" class="cls-1" d="M974,85h-1l-4,4h-1l-1-1V85h-2.1a11.879,11.879,0,0,0,.709-2H968l1,1v2.344L972.266,83H974a2,2,0,0,0,2-2V64a2,2,0,0,0-2-2H942a2,2,0,0,0-2,2V81a2,2,0,0,0,2,2h0.393a11.879,11.879,0,0,0,.709,2H942a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4h32a4,4,0,0,1,4,4V81A4,4,0,0,1,974,85Zm-33.9,7.159c0.01,0,.016-0.011.025-0.014l7.9-2.87c0-.093-0.028-0.181-0.028-0.275V86.7a8.976,8.976,0,0,1-2.954-5.8A1.483,1.483,0,0,1,944,79.5v-3a1.488,1.488,0,0,1,1-1.4V71a6,6,0,0,1,6-6h6a6,6,0,0,1,6,6v4.1a1.488,1.488,0,0,1,1,1.4v3a1.483,1.483,0,0,1-1.046,1.408A8.976,8.976,0,0,1,960,86.7V89c0,0.094-.023.182-0.028,0.275l7.9,2.87c0.009,0,.015.01,0.025,0.014A2.984,2.984,0,0,1,970,95v2a3,3,0,0,1-3,3H941a3,3,0,0,1-3-3V95A2.984,2.984,0,0,1,940.1,92.159ZM950,68V67.141A3.991,3.991,0,0,0,947,71h0a3.972,3.972,0,0,0,3.181-1.6A5.916,5.916,0,0,1,950,68Zm11,3a4,4,0,0,0-4-4h-5v1a4,4,0,0,0,4,4h3a3.959,3.959,0,0,0,2-.555V71Zm0,9V79a1,1,0,0,0,0-2V73.633A5.942,5.942,0,0,1,959,74h-3a5.992,5.992,0,0,1-4.946-2.609A5.92,5.92,0,0,1,947,73h0v4a1,1,0,0,0,0,2v1A7,7,0,0,0,961,80Zm-11,8.062V89a4,4,0,0,0,8,0V88.062A9,9,0,0,1,950,88.062ZM940,97h0a1,1,0,0,0,1,1h26a1,1,0,0,0,1-1V95a0.986,0.986,0,0,0-.788-0.957l0-.012-7.659-2.782a5.99,5.99,0,0,1-11.112,0l-7.659,2.782,0,0.012A0.986,0.986,0,0,0,940,95v2Zm18-18h-1a1,1,0,0,1,0-2h1A1,1,0,0,1,958,79Zm-1.716,2.307a1,1,0,1,1,1.43,1.39l0.01,0.01A5.617,5.617,0,0,1,953.973,84a5.424,5.424,0,0,1-3.677-1.28l0.007-.006a0.995,0.995,0,1,1,1.435-1.375l0,0A3.206,3.206,0,0,0,954,82a3.106,3.106,0,0,0,2.282-.695ZM951,79h-1a1,1,0,0,1,0-2h1A1,1,0,0,1,951,79Z" transform="translate(-938 -60)"></path><path data-name="Rounded Rectangle 30" class="cls-2" d="M977,80v3l-1,1h-3l-3,3h-1a2,2,0,0,1-2-2V67a2,2,0,0,1,2-2h7a2,2,0,0,1,2,2V80h-1Zm-8,14v3l-1,2H940l-1-1,13-5,1,1,2,2h3l4-3,2-1,3,1ZM956,73l-3-1-1-1-1-2V66h6l4,1,1,2v4h-6Z" transform="translate(-938 -60)"></path></svg>
  `,
  icon_bonus: `
    <svg data-name="Group 11 copy" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><defs><style>.cls-1,.cls-2{fill:#307fdd;fill-rule:evenodd;}.cls-2{opacity:0.1;}</style></defs><path data-name="Rounded Rectangle 10 copy" class="cls-1" d="M1246,82V98a2,2,0,0,1-2,2h-32a2,2,0,0,1-2-2V82a2,2,0,0,1-2-2V73a2,2,0,0,1,2-2h5.82a6.492,6.492,0,0,1,4.68-11,8.494,8.494,0,0,1,7.5,4.5,8.494,8.494,0,0,1,7.5-4.5,6.492,6.492,0,0,1,4.68,11H1246a2,2,0,0,1,2,2v7A2,2,0,0,1,1246,82Zm-12,16h10V82h-10V98Zm-10,0h8V82h-5a1,1,0,0,1,0-2h5V73h-8V98Zm-14-18h9a1,1,0,0,1,0,2h-7V98h10V73h-12v7Zm17-11.5a6.5,6.5,0,0,0-6.5-6.5,4.5,4.5,0,0,0,0,9h6.5V68.5Zm13-2a4.5,4.5,0,0,0-4.5-4.5,6.5,6.5,0,0,0-6.5,6.5V71h6.5A4.5,4.5,0,0,0,1240,66.5Zm6,6.5h-12v7h12V73Z" transform="translate(-1208 -60)"></path><path class="cls-2" d="M1244,80V98h-10V76h12v4h-2Zm-21,18h-8V80h-2V76h10V98Z" transform="translate(-1208 -60)"></path></svg>
  `,
  icon_quality: `
    <svg data-name="Group 12 copy" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><defs><style>.cls-1,.cls-2{fill:#307fdd;fill-rule:evenodd;}.cls-2{opacity:0.1;}</style></defs><path class="cls-1" d="M1501,70h4a1,1,0,0,1,0,2h-4A1,1,0,0,1,1501,70Zm0,4h4a1,1,0,0,1,0,2h-4A1,1,0,0,1,1501,74Zm0,8h4a1,1,0,0,1,0,2h-4A1,1,0,0,1,1501,82Zm0-4h4a1,1,0,0,1,0,2h-4A1,1,0,0,1,1501,78Zm15-7h-4V96.5a3.5,3.5,0,0,1-3.5,3.5,3.415,3.415,0,0,1-.5-0.05V100h-27V99.95a3.415,3.415,0,0,1-.5.05,3.5,3.5,0,0,1-3.5-3.5V92a1,1,0,0,1,2,0v4.5a1.5,1.5,0,0,0,1.5,1.5,1.472,1.472,0,0,0,.5-0.1V98h24.35a3.436,3.436,0,0,1-.35-1.5V93h-9a1,1,0,0,1,0-2h11v5.5a1.5,1.5,0,0,0,3,0v-33a3.436,3.436,0,0,1,.35-1.5H1487v0.1a1.472,1.472,0,0,0-.5-0.1,1.5,1.5,0,0,0-1.5,1.5V64a1,1,0,0,1-2,0V63.5a3.5,3.5,0,0,1,3.5-3.5,3.415,3.415,0,0,1,.5.05V60h26v0.05a3.415,3.415,0,0,1,.5-0.05,3.5,3.5,0,0,1,3.5,3.5V71h-1Zm-1-7.5a1.5,1.5,0,0,0-3,0V68h0v1h3V63.5ZM1497,77a9.989,9.989,0,0,1-4,7.988V92a0.964,0.964,0,0,1-.08.4,1,1,0,0,1-1.31.525l-4.6-1.852-4.62,1.852a1,1,0,0,1-1.31-.525A0.964,0.964,0,0,1,1481,92V84.988A10,10,0,1,1,1497,77Zm-14,13.54,3.61-1.446a0.982,0.982,0,0,1,.4-0.076,1,1,0,0,1,.41.076l3.58,1.442V86.162a9.969,9.969,0,0,1-8,0v4.378ZM1479,77a8,8,0,1,0,8-8A8,8,0,0,0,1479,77Zm14,0a6,6,0,1,1-6-6A6,6,0,0,1,1493,77Zm-10,0a4,4,0,1,0,4-4A4,4,0,0,0,1483,77Z" transform="translate(-1477 -60)"></path><path data-name="Rounded Rectangle 31" class="cls-2" d="M1508,99h-2V92h-3V65a3,3,0,0,1,3-3h5V96A3,3,0,0,1,1508,99Zm-19.5-17a3.5,3.5,0,1,1,3.5-3.5A3.5,3.5,0,0,1,1488.5,82ZM1503,97l1,1-25,1-1-1V95h25v2Z" transform="translate(-1477 -60)"></path></svg>
  `,
  icon_price: `
    <svg data-name="Group 8 copy 2" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><defs><style>.cls-1,.cls-2{fill:#307fdd;fill-rule:evenodd;}.cls-2{opacity:0.1;}</style></defs><path data-name="Ellipse 1 copy" class="cls-1" d="M439,92v5a3,3,0,0,1-3,3H405a4,4,0,0,1-4-4V72h0.05a3.491,3.491,0,0,1,3.45-3h1.087a8,8,0,0,0,1.173,2H404.5a1.5,1.5,0,0,0,0,3h15.733a5.5,5.5,0,1,1,10.534,0H435V72a1,1,0,0,0-1-1h-1.151a7.423,7.423,0,0,0-.718-2H434a3,3,0,0,1,3,3v2.184A2.991,2.991,0,0,1,439,77v5a2,2,0,0,1,2,2v6A2,2,0,0,1,439,92ZM429,72.5a3.5,3.5,0,0,0-7,0,3.464,3.464,0,0,0,.35,1.5h6.3A3.464,3.464,0,0,0,429,72.5Zm8,4.5a1,1,0,0,0-1-1H403V96a2,2,0,0,0,2,2h31a1,1,0,0,0,1-1V92h-8.5a4.5,4.5,0,0,1-4.5-4.5v-1a4.5,4.5,0,0,1,4.5-4.5H437V77Zm2,7H428.5a2.5,2.5,0,0,0-2.5,2.5v1a2.5,2.5,0,0,0,2.5,2.5H439V84Zm-11.672,3A1.672,1.672,0,1,1,429,88.672,1.672,1.672,0,0,1,427.328,87ZM407,95a1,1,0,0,1-1-1V80a1,1,0,0,1,2,0V94A1,1,0,0,1,407,95Zm6-23a6,6,0,1,1,6-6A6,6,0,0,1,413,72Zm0-10a4,4,0,1,0,4,4A4,4,0,0,0,413,62Z" transform="translate(-401 -60)"></path><path class="cls-2" d="M429,83a4,4,0,0,0,0,8h9v8H413V81a2,2,0,0,1,2-2h23v4h-9Zm-7.24-8a4.5,4.5,0,1,1,7.48,0h-7.48ZM413,71a5,5,0,1,1,5-5A5,5,0,0,1,413,71Z" transform="translate(-401 -60)"></path></svg>
  `,
  icon_hot: `
    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="11" viewBox="0 0 8 11"><path class="cls-1" d="M295.1,63s3.092,1.026,3.937,3.242a5.765,5.765,0,0,1-.073,4.172s1.1-.5,1.367-2.974c0,0,1.01,1.088.535,3.76-0.378,2.124-2.081,2.993-4.22,2.789-2.068-.2-3.659-1.335-3.647-3.481A4.617,4.617,0,0,1,294.3,67.55a3.012,3.012,0,0,0,.649-2.169s1.324,0.749.725,3.6a4.5,4.5,0,0,0,.981-3.439A4.96,4.96,0,0,0,295.1,63Z" transform="translate(-293 -63)"></path></svg>
  `,
}

export default icons;