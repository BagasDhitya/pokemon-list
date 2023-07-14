import { FC } from 'react';

import { LayoutProps } from '../utils/component';

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="flex flex-col lg:justify-center md:flex-row">
                <div className="w-full md:w-1/2 lg:w-1/3 p-10">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
