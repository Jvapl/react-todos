interface ErrorBannerProps {
    message: string;
    onDismiss: () => void;
}

export const ErrorBanner = ({ message, onDismiss }: ErrorBannerProps) => {
    if (!message) return null;

    return (
        <div style={{ display: "flex", justifyContent: "space-between" }} 
            className="CSSBase error-message ErrorMSG">
            <p style={{ margin: 0 }}><strong>Error:</strong> {message}</p>
            <button onClick={onDismiss} className="CSSBase cursorPointer" 
            style={{ padding: '0.2rem 0.6rem' }}> X </button>
        </div>
    );
};