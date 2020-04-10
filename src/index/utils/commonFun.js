export const formatNumber =(value) =>{
    return   Math.round(Number(value)*10000);
};

// 数字补零， num: 需要补零的数值， len: 补零后的总位数
export const foramtZero = (num, len) => {
    if (String(num).length > len) {
        return num
    }

    return (Array(len).join(0) + num).slice(-len)
}
