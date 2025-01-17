import React from 'react';
import { Box, Text } from 'zmp-ui';

const DanhMuc = () => {
  return (
    <Box className="danh-muc-container" p={4}>
      <Text size="large" className="mb-4">Danh Mục</Text>
      <Box className="category-grid">
        {/* Add your category content here */}
        <Text>Nội dung danh mục sẽ được hiển thị tại đây</Text>
      </Box>
    </Box>
  );
};

export default DanhMuc;
