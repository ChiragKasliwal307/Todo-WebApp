import React, { useState } from 'react'

function DropArea({ onDrop }) {
    const [showDrop, setShowDrop] = useState(false)
    return (
        <section
            onDragEnter={() => setShowDrop(true)}
            onDragLeave={() => setShowDrop(false)}
            onDrop={() => {
                onDrop()
                setShowDrop(false)
            }}
            onDragOver={(e) => e.preventDefault()}
            className={showDrop ? " border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 bg-[#ccbed7] text-black w-full " : "h-1 opacity-0"}
        >
            Drop Here
        </section>
    )
}

export default DropArea