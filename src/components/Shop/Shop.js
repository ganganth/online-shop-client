import { useState } from 'react';
import MainLayout from '../MainLayout';
import ShopDetail from './ShopDetail';
import ItemDetail from './ItemDetail';

const Shop = () => {
    const [selectedItem, setSelectedItem] = useState(false);
    return (
        <MainLayout window={() => window}>
            { selectedItem ? (
                <ItemDetail setSelectedItem = {setSelectedItem}/>
            ): (
                <ShopDetail setSelectedItem = {setSelectedItem} />
            )}
        </MainLayout>
    );
}

export default Shop;