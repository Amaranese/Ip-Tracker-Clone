const { useState, useEffect } = require("react")

const useFetch = (url) => {
    const [state, setState] = useState({data: [40.463667, -3.74922], loading: true})
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(res => res.loc.split(',').map(i => parseFloat(i)))
        .then(data => setState({data, loading: false}))
    }, [url])

    return state

}

export default useFetch