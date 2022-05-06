const NpmImportPlugin = require('less-plugin-npm-import')
const fs = require('fs');

const gulp = require('gulp')
const gulpless = require('gulp-less')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

gulp.task('compile-less', function () {
  return gulp.src('src/theme/*Theme.less')
    .pipe(
      gulpless({
        javascriptEnabled: true,
        plugins: [new NpmImportPlugin({ prefix: '~' })],
      }),
    )
    .pipe(gulp.dest('public'))
})

gulp.task('watch-less',gulp.series('compile-less'), function () {
  return gulp.watch('src/theme/*Theme.less')
})

async function createFile(dir, name) {
  let indexContent = `export { default as ${name}} from "./${name}"`
  let mainContent = `export interface ${name}Props {\n\n}\nexport default function ${name}({ ...props }: ${name}Props){\n\n\treturn (\n\t\t<div>${name}</div>\n\t)\n}`

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  fs.writeFile(dir + "/index.ts", indexContent, () => { })
  fs.writeFile(dir + `/${name}.tsx`, mainContent, () => { })
  
}

gulp.task('template', function () {
  let at = argv.at?.replace("src/","")
  let splite_at = at.split("/")
  let name = splite_at[splite_at.length-1]
  let dir = `./src/${at}`
  return createFile(dir,name)
  return true
})



gulp.task('default', gulp.series('watch-less'));