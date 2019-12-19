/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// TODO: https://github.com/gatsbyjs/gatsby/issues/14703
// change build output path

// You can delete this file if you're not using it
// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions
//   // console.log(page.path);
//   // page.matchPath is a special key that's used for matching pages
//   // only on the client.
//   if (page.path.match(/^\/app/)) {
//     console.log(page);
//     page.matchPath = "/app/*"
//     // Update the page.
//     createPage(page)
//   }
// }


// support less
// exports.onCreateWebpackConfig = ({
//   stage,
//   rules,
//   loaders,
//   plugins,
//   actions,
// }) => {
//   actions.setWebpackConfig({
//     module: {
//       rules: [
//         {
//           test: /\.less$/,
//           use: [
//             loaders.postcss(),
//             loaders.miniCssExtract(),
//             loaders.css({ importLoaders: 1 }),
//             { 
//               loader: 'less-loader', 
//               options: { 
//                 javascriptEnabled: true 
//               }   // less 3.X
//             },
//           ],
//         },
//       ],
//     },
//     plugins: [
//       plugins.define({
//         __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
//       }),
//     ],
//   })
// }