// form 验证正数
export const validatePositive = (message) => {
    const validator = async (rule, value, callback) => {
        var reg = /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/;
        if (reg.test(value) && value != 0) {
          return Promise.resolve();
        }
        return Promise.reject(message || '输入正数');
    }
    return validator
}

// form 验证正整数
export const validatePositiveInt = (message) => {
    const validator = async (rule, value, callback) => {
        var reg = /(^[1-9]\d*$)/;
        if (reg.test(value) && value != 0) {
            return Promise.resolve();
        }
        return Promise.reject(message || '输入正整数');
    }
    return validator
}

// form 验证正整数和0
export const validatePositiveIntAndZero = (message) => {
    const validator = async (rule, value, callback) => {
        var reg = /(^[1-9]\d*$)/;
        if (reg.test(value) || value == 0) {
            return Promise.resolve();
        }
        return Promise.reject(message || '输入非负整数');
    }
    return validator
}

// form 验证正数、0
export const validatePositiveAndZero = (message) => {
    const validator = async (rule, value, callback) => {
        var reg = /^(0|[1-9][0-9]*)(\.\d+)?$/;
        if (reg.test(value)) {
            return Promise.resolve();
        }
        return Promise.reject(message || '输入非负数');
    }
    return validator
}
