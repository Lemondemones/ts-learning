import { useTheme, ThemeProvider } from "./context";

function ParentComponent() {
    return (
        <ThemeProvider>
            <Component />
        </ThemeProvider>
    );
}

function Component() {
    const context = useTheme();

    return (
        <div>
            <h2>React & Typescript</h2>
            <button
                onClick={() => {
                    context.theme === "dark" ? context.setTheme("system") : context.setTheme("dark");
                }}
                className="btn btn-center">
                toggle theme
            </button>
        </div>
    );
}
export default ParentComponent;
