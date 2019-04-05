import React from 'react';
import UserLayout from '../../../hoc/user';
import ManageBrands from './manage_brands';
import ManageMaterials from './manage_materials';

const ManageCategories = () => {
    return (
        <UserLayout>
            <ManageBrands/>
            <ManageMaterials/>
        </UserLayout>
    );
};

export default ManageCategories;