import {Link} from "react-router-dom"
import React from "react"
import useScript from 'react-script-hook';

export default function Begin() {
    const [loading, error] = useScript({ src: 'https://varden-scripts.s3-eu-west-1.amazonaws.com/booking/vbgate.js' });

    return (
        <>
            <p>
                The first script (gate) is loaded here.
            </p>
            {loading ? <p>Loading tracking script...</p> : null}
            {error ? <p>Could not load the script: .</p> : null}
            {!loading && !error ? <p>Script loaded!</p> : null}
            <Link to="/finish">Finish!</Link>
        </>
    )
}
