export default function getRandomColor(seed?: number) {
    var rgb = [];

    for (var i = 0; i < 3; i++)
        rgb.push(Math.floor((seed || Math.random()) * 255))

    return 'rgb(' + rgb.join(',') + ')'
}