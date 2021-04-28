
export default function renderFire(fireWidth,fireHeight) {
    const debug = false
    let html = '<table cellpadding=0 cellspacing=0>'

    for (let row = 0; row < fireHeight; row++) {
        html += '<tr>'

        for (let column = 0; column < fireWidth; column++) {
            const pixelIndex = column + (fireWidth * row)
            const fireIntensity = firePixelsArray[pixelIndex]

            if (debug === true) {
                html += '<td>'
                html += `<div class="pixel-index">${pixelIndex}</div>`
                html += fireIntensity
                html += '</td>'
            } else {
                const color = fireColorsPalette[fireIntensity]
                const colorString = `${color.r},${color.g},${color.b}`
                html += `<td class="pixel" style="background-color: rgb(${colorString})">`
                html += '</td>'
            }
        }

        html += '</tr>'
    }

    html += '</table>'

    document.querySelector('#fireCanvas').innerHTML = html
}