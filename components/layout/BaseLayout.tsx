const BaseLayout: React.FC = ({ children }) => {
    return (
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">{children}</div>
        </div>
    );
};

export default BaseLayout;
