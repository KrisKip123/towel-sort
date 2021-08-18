
module.exports = function towelSort (matrix) {

    if(!matrix || !matrix.length){
        return [];
    }


    matrix.map((item, index) => {
        if(index % 2 === 1){
            item.sort((a, b) => b - a);
        }
    });
    return matrix.join().split(',');
}
