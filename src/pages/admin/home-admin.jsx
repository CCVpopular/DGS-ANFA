import React from 'react';
import { Page } from 'zmp-ui';

const HomeAdmin = () => {
    return (
        <Page className="page">
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
                <div className="grid gap-4">
                    <div className="p-4 bg-white rounded-lg shadow">
                        <h2 className="text-lg font-semibold">Quản lý người dùng</h2>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow">
                        <h2 className="text-lg font-semibold">Quản lý sản phẩm</h2>
                    </div>
                    {/* Add more admin sections as needed */}
                </div>
            </div>
        </Page>
    );
};

export default HomeAdmin;