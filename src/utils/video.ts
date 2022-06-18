export function resoleVideo (link: string) {
    console.log('link',link);
    let param = link.split('/')[1];
    let start = link.split('/')[0];
    start += '/embed/' + param;
    console.log('start', start);
    return start;
}