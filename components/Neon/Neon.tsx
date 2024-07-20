const Neon = () => {
    return (
        // <div className="w-10 h-10 bg-[#101C5CA3] shadow-[0_0_10px_5px_#101C5CA3] rounded-bl-3xl rounded-br-2xl"></div>
        <div className="container">
            <svg width="200" height="100" viewBox="0 0 200 100">
                <defs>
                    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#101C5CA3" floodOpacity="1" />
                    </filter>
                </defs>
                <ellipse filter="url(#shadow)" cx="100" cy="50" rx="100" ry="60" fill="#101C5CA3" />
            </svg>
        </div>

    )
}

export default Neon