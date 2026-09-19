import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';

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

const ComplainContent = () => {
    return (
        <Box>
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

export default ComplainContent;

