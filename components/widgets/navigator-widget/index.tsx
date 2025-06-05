import { useRouter } from 'next/router';
// LOCAL IMPORTS
import cx from './styles.module.scss';
// SHARED IMPORTS
import { IconCircle, IconCircleFilled } from '@tabler/icons-react';
import { Box, Button, Menu } from '@mantine/core';
import { PATH } from '@/constants/PATH';

export const NavigatorWidget = () => {
  const router = useRouter();
  // RENDER
  return (
    <Box className={cx.container}>
      <Menu
        shadow="md"
        width={160}
        position="top-end"
        transitionProps={{ transition: 'rotate-left', duration: 150 }}
      >
        <Menu.Target>
          <Button size="xs"></Button>
        </Menu.Target>
        <Menu.Dropdown>
          {Object.entries(PATH).map(([name, path]) => {
            const pathIsStr = typeof path === 'string';
            const href = pathIsStr ? path : path('b3fc3c8b-2c79-4d99-8b2d-bcd7380167aa');
            // render
            return (
              <Menu.Item
                key={name}
                leftSection={pathIsStr ? <IconCircle size={8} /> : <IconCircleFilled size={8} />}
                onClick={() => router.replace(href)}
              >
                {name}
              </Menu.Item>
            );
          })}
        </Menu.Dropdown>
      </Menu>
    </Box>
  );
};
