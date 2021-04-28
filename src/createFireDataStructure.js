
export default function createFireDataStructure(fireWidth, fireHeight, firePixelsArray) {
   
    const numberOfPixels = fireWidth * fireHeight

    for (let i = 0; i < numberOfPixels; i++) {
        firePixelsArray[i] = 0
    }
}

