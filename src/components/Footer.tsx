import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
    return (
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 mt-28">
            <div className="py-6 text-sm text-center uppercase tracking-wide">© {new Date().getFullYear()} <Link to="https://elitecodec.com.ng/web">EliteCodec Inc</Link>. All rights reserved.</div>
        </div>
    )
}

export default Footer