function sumTwoLargest(arr) {
    if (!Array.isArray(arr) || arr.length < 2) return 0;
    const sorted = [...arr].sort((a, b) => b - a);
    return sorted[0] + sorted[1];
}
module.exports = sumTwoLargest;
