export function resoleVideo (link: string) {
    let param = link.split('.')[1].split('/')[1];
    let res = 'https://www.youtube.com/embed/' + param;
    return res;
}