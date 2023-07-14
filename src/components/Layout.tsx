import { FC } from 'react';

import { LayoutProps } from '../utils/component';

const Layout: FC<LayoutProps> = ({ children, type }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="flex flex-col md:flex-row">
                {
                    type === "handphone" ?
                        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                            {children}
                        </div> :
                        type === "tablet" ?
                            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                                {children}
                            </div> :
                            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                                {children}
                            </div>
                }
            </div>
        </div>
    );
};

export default Layout;
