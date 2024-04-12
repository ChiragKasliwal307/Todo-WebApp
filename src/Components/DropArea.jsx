import React, { useState } from 'react'

function DropArea() {
    const [showDrop, setShowDrop] = useState(false)
    return (
        <section
            onDragEnter={() => setShowDrop(true)}
            onDragLeave={() => setShowDrop(false)}
            className={showDrop ? "" : ""}
        >
            Drop Here
        </section>
    )
}

export default DropArea