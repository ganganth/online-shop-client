import {
    Box,
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';

const products = [
    {
        id: 1,
        name: 'Premium Package',
        price: 49.99,
        category: 'Package',
        status: 'Active',
    },
    {
        id: 2,
        name: 'Basic Package',
        price: 29.99,
        category: 'Package',
        status: 'Active',
    },
    {
        id: 3,
        name: 'Enterprise Package',
        price: 99.99,
        category: 'Package',
        status: 'Inactive',
    },
];

const ProductContent = () => {
    const handleAddProduct = () => {
        // TODO: Open add product dialog
    };

    return (
        <Box>
            {/* Add Product Button */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    mb: 2,
                }}
            >
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={handleAddProduct}
                >
                    Add Product
                </Button>
            </Box>

            {/* Product Table */}
            <TableContainer
                component={Paper}
                elevation={2}

            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <strong>ID</strong>
                            </TableCell>

                            <TableCell>
                                <strong>Product Name</strong>
                            </TableCell>

                            <TableCell>
                                <strong>Category</strong>
                            </TableCell>

                            <TableCell align="right">
                                <strong>Price</strong>
                            </TableCell>

                            <TableCell>
                                <strong>Status</strong>
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>
                                    {product.id}
                                </TableCell>

                                <TableCell>
                                    {product.name}
                                </TableCell>

                                <TableCell>
                                    {product.category}
                                </TableCell>

                                <TableCell align="right">
                                    ${product.price.toFixed(2)}
                                </TableCell>

                                <TableCell>
                                    {product.status}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default ProductContent;

