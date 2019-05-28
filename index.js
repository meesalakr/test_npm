// class StringUtil {
function convertToArray(str) {
    if (typeof str !== 'string') {
        return str;
    }
    return str.split('')
}
// }

module.exports = convertToArray;