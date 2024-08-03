import './globals.css';

export const metadata = {
    title: 'Banner',
    description: 'A Next.js project',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
