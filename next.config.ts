import { withPayload } from "@payloadcms/next/withPayload";
/** import type { NextConfig } from "next"; **/

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'novaeafit.blob.core.windows.net',
        port: '',
        pathname: '/*/**', 
      }
    ]
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
};

export default withPayload(nextConfig);
