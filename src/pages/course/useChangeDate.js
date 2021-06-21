const useChangeDate = () => {

    const changeDate = (stringDate) => {

        const dt = new Date(stringDate)
        const year = dt.getFullYear()
        const date = dt.getDate()
        const month = dt.toLocaleString('default', { month: 'short' })
        return ` ${month} ${date}, ${year}`
    }

    return {
        changeDate
    }
}

export default useChangeDate
