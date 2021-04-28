 import renderFire from '../src/renderFire.js'

 export default function calculateFirePropagation(fireWidth,fireHeight) {
    for (let column = 0; column < fireWidth; column++) {
        for (let row = 0; row < fireHeight; row++) {
            const pixelIndex = column + (fireWidth * row)

            updateFireIntensityPerPixel(pixelIndex)
        }
    }

    renderFire()
}