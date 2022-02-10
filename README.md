# Parcel vs Webpack Bundling of mobx + keycloak

Demo to show that Parcel bundle size is twice the bundle of size using webpack, when mobx and keycloak-js are bundled.

## Parcel 2.2.1 result

- [dist-parcel/index.js](dist-parcel/index.js)
- 163 KB
- [Source Map analyzed](dist-parcel/source-map.html)
- Reproduce with `yarn build-parcel`

## Webpack 5.68.0 result

- [dist-webpack/index.js](dist-webpack/index.js)
- 85 KB
- [Source Map analyzed](dist-webpack/source-map.html)
- Reproduce with `yarn build-webpack`
