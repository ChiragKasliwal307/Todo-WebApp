import React, { useState } from 'react'

function DropArea() {
    const [showDrop, setShowDrop] = useState(false)
    return (
        <section
            onDragEnter={() => setShowDrop(true)}
            onDragLeave={() => setShowDrop(false)}
            className={showDrop ? "block" : " hidden"}
        >
            Drop Here
        </section>
    )
}

export default DropArea