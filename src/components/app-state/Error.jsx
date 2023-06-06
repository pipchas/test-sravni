const Error = ({ error }) => {
    return (
        <div class="error-container">
            <h2 class="error-title">{error}</h2>
            <div class="error-animation"></div>
        </div>
    )
}

export default Error