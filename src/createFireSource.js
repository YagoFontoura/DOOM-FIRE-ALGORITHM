 export default function createFireSource(fireWidth, fireHeight, firePixelsArray) {
    for (let column = 0; column <= fireWidth; column++) {
        const overflowPixelIndex = fireWidth * fireHeight
        const pixelIndex = (overflowPixelIndex - fireWidth) + column

        firePixelsArray[pixelIndex] = 35
    }
}