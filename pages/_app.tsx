import '@mantine/core/styles.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider as ReduxProvider } from 'react-redux';
import { MantineProvider } from '@mantine/core';
//
import store from '@/store';
import { NavigatorWidget } from '@/components/widgets/navigator-widget';
import { THEME } from '@/constants/THEME';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <MantineProvider theme={THEME}>
        <Component {...pageProps} />
        {process.env.NODE_ENV === 'production' ? null : <NavigatorWidget />}
      </MantineProvider>
    </ReduxProvider>
  );
}
