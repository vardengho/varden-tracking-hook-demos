import {
    Link
} from "react-router-dom"

export default function About() {
    return (
        <>
            <p>
                This is a demo of varden.se tracking script implemented on a ReactJs website.
            </p>
            {window.location.host.startsWith('localhost') ?
                <div style={{color: 'red'}}>
                    <p>
                        The demo needs to be run from a FQDN (not localhost).
                        You can add the entry below to your hosts file and then run this demo from
                        local.vardenhooks.com:3000.
                    </p>
                    <p>
                        127.0.0.1 local.vardenhooks.com
                    </p>
                </div>
                : null}
            <Link to="/begin">Begin!</Link>
        </>
    )
}
