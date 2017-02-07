# js-algorithms

A set of common algorithms implemented in JS. Includes binary search, selection
and insertion sort, merge sort, quicksort and breadth-first search.

## Installation

The sources from this project can be used directly from a browser, although you
may want to install Node.js for command-line execution and testing purposes. The
[official installation guide][install-nodejs] covers this process.

## Usage

The sources can be cloned and used from the command-line with Node.js.

```bash
git clone https://github.com/marcbperez/js-algorithms
cd js-algorithms
node src/binary-search.js
```

They can also be embedded in other modules.

```javascript
var algorithms = require('js-algorithms/src/binary-search.js');
console.log(algorithms.binarySearch(primes, 53));
```

Or included in an HTML document.

```html
<script src="js-algorithms/src/binary-search.js"></script>
<script>
  console.log(binarySearch(primes, 53));
</script>
```

## Testing

Tests are executed with Mocha. Install the package for the local user and invoke
the Mocha runner from the project folder.

```bash
npm install mocha
./node_modules/mocha/bin/mocha
```

## Troubleshooting

The [issue tracker][issue-tracker] intends to manage and compile bugs,
enhancements, proposals and tasks. Reading through its material or reporting to
its contributors via the platform is strongly recommended.

## Contributing

This project adheres to [Semantic Versioning][semver] and to certain syntax
conventions defined in [.editorconfig][editorconfig]. To get a list of changes
refer to the [CHANGELOG][changelog]. Only branches prefixed by *feature-*,
*hotfix-*, or *release-* will be considered:

  - Fork the project.
  - Create your new branch: `git checkout -b feature-my-feature develop`
  - Commit your changes: `git commit -am 'Added my new feature.'`
  - Push the branch: `git push origin feature-my-feature`
  - Submit a pull request.

## Credits

This project is created by [marcbperez][author] and maintained by its
[author][author] and contributors.

## License

This project is licensed under the [Apache License Version 2.0][license].

[author]: https://marcbperez.github.io
[issue-tracker]: https://github.com/marcbperez/js-algorithms/issues
[editorconfig]: .editorconfig
[changelog]: CHANGELOG.md
[license]: LICENSE
[semver]: http://semver.org
[install-nodejs]: https://docs.npmjs.com/getting-started/installing-node
