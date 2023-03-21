export const getItem = (key) => {
    let result = sessionStorage.getItem(key)
    try {
        result = JSON.parse(result)
    } catch (error) {
        console.log('err', error);
    }
    return result
}

export const setItem = (key, data) => {
    if (typeof data === 'object') {
        data = JSON.stringify(data)
    }

    sessionStorage.setItem(key, data)

}