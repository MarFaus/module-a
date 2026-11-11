function shiftedDiff(first, second) {
    if (first.length !== second.length) return -1;
    return (second + second).indexOf(first);
}
module.exports = shiftedDiff;
