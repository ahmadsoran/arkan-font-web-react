import { Link, useMatch, useResolvedPath } from "react-router-dom";


export function MyLinks({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ textDecoration: match ? "underline" : "none", opacity: match ? 1 : 0.5 }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}