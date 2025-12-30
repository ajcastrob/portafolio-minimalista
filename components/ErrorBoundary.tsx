import React, { ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return this.props.fallback || (
                <div className="p-4 text-center text-slate-600 dark:text-slate-400">
                    <h2>Algo salió mal al cargar esta sección.</h2>
                    <button
                        className="mt-2 text-accent underline"
                        onClick={() => this.setState({ hasError: false })}
                    >
                        Intentar de nuevo
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
