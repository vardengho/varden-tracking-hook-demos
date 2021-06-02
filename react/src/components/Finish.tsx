import {Link} from "react-router-dom"
import React, {useState} from "react"
import useScript from "react-script-hook"

export default function Finish() {
    const [loading, error] = useScript({ src: 'https://varden-scripts.s3-eu-west-1.amazonaws.com/booking/vbnotification.js' });
    const [sent, setSent] = useState(false)
    if (!loading && !error && !sent) {
        (window as any).VardenBookingNotification.init({
            sourceSystem: 'React Demo',
            careProvider: '12345',
            additionalInfo: JSON.stringify({
                'bookingId': '54321',
                'terapeut': 'Terapeutens namn',
                'treatment': 'Behandlingens namn'
            })
            , debugMode: true // !!!!!!!!!!! REMOVE THIS LINE IN PRODUCTION !!!!!!!!!!!
        });
        setSent(true)
    }

    return (
        <>
            <p>
                The second script (notification) is loaded and called here.
            </p>
            {loading ? <p>Loading tracking script...</p> : null}
            {error ? <p>Could not load the script: .</p> : null}
            {!error && !error ? <p>Script loaded!</p> : null}
            <Link to="/">Back to start</Link>
        </>
    )
}
