module.exports = {
  components: "src/app/components/**/[a-zA-Z]*.{js,jsx,ts,tsx}",
  propsParser: require("react-docgen-typescript").withCustomConfig(
    "./tsconfig.json",
    [{}]
  ).parse,
  ignore: [
    "**/__tests__/**",
    "**/*.test.{js,jsx,ts,tsx}",
    "**/*.spec.{js,jsx,ts,tsx}",
    "**/*.d.ts",
    "src/app/components/atoms/index.ts",
    "src/app/components/molecules/index.ts",
    "src/app/components/organisms/index.ts",
    "src/app/components/organisms/App/index.tsx",
    "src/app/components/pages/**/*.{js,jsx,ts,tsx}",
  ],
};
