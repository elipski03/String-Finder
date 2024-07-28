function GusfieldsAlgo(str, pattern) {
    const new_string = pattern + "#" + str;
    const Z_Array = new Array(new_string.length).fill(0);

    let left = 0;
    let right = 0;

    for (let i = 1; i < new_string.length; i++) {
        if (i > right) {
            left = i;
            right = i;
            while (right < new_string.length && new_string[right - left] === new_string[right]) {
                right++;
            }
            Z_Array[i] = right - left;
            right--;
        } else {
            const k = i - left;
            if (Z_Array[k] < right - i + 1) {
                Z_Array[i] = Z_Array[k];
            } else {
                left = i;
                while (right < new_string.length && new_string[right - left] === new_string[right]) {
                    right++;
                }
                Z_Array[i] = right - left;
                right--;
            }
        }
    }
    for (let i = 0; i < new_string.length; i++) {
        if (Z_Array[i] === pattern.length) {
            console.log("Pattern found!");
        }
    }
}
export {GusfieldsAlgo}