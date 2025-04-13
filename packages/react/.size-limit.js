module.exports = [
  {
    name: 'LiveKitRoom only',
    path: 'dist/index.mjs',
    import: '{ LiveKitRoom }',
    limit: '9 kB',
    ignore: [
      '@ms-dosx86/livekit-client',
      'react',
      'react-dom',
      'react/jsx-runtime',
      'loglevel',
      '@livekit/krisp-noise-filter',
    ],
  },
  {
    name: 'LiveKitRoom with VideoConference',
    path: 'dist/index.mjs',
    import: '{ LiveKitRoom, VideoConference }',
    limit: '40 kB',
    ignore: [
      '@ms-dosx86/livekit-client',
      'react',
      'react-dom',
      'react/jsx-runtime',
      'loglevel',
      '@livekit/krisp-noise-filter',
    ],
  },
  {
    name: 'All exports',
    path: 'dist/index.mjs',
    import: '*',
    limit: '100 kB',
    ignore: [
      '@ms-dosx86/livekit-client',
      'react',
      'react-dom',
      'react/jsx-runtime',
      'loglevel',
      '@livekit/krisp-noise-filter',
    ],
  },
];
