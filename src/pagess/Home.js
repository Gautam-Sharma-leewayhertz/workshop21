import React, { useEffect,useState } from 'react'




export default function Home() {
    const vc=useState(false);
    useEffect(() => {
        
		const token = localStorage.getItem('token')
        
		if (token) {
			console.log(token);
		}
	}, [])

    return (
        <div>
            hello user
        </div>
    )
}
