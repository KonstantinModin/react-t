const test = () => {
    return {
        type: "TEST"
    }
}
const handleFavorite = (id) => {
    return {
        type: "HANDLE_FAVORITE",
        id
    }
}

export { test, handleFavorite };