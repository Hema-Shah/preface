const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      "root": [
        "./src"
      ],
      extensions: [
        '.ios.ts',
        '.android.ts',
        '.ts',
        '.ios.tsx',
        '.android.tsx',
        '.tsx',
        '.jsx',
        '.js',
        '.json',
        '.svg',
      ],
      "alias": {
        "models": "./app/models/index",
        "components": "./app/components/index",
        "screens": "./app/screens/index",
        "navigators": "./app/navigators/index",
      }
    }
  ],
  require.resolve('react-native-paper/babel'),
];


module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: plugins
};
