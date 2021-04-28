export default function createFireSource(state.fireWidth,state.fireHeight) {
            for (let column = 0; column <= state.fireWidth; column++) {
                const overflowPixelIndex = state.fireWidth * state.fireHeight
                const pixelIndex = (overflowPixelIndex - fireWidth) + column

                state.firePixelsArray[pixelIndex] = 35
            }
        }