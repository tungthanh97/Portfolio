import ThemeProvider from './ThemeProvider';

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
