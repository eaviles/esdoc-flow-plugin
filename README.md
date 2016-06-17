# esdoc-flow-plugin

This plugin will remove all Flow annotations and types to produce the documentation.

## Install and usage

```sh
npm install esdoc-flow-plugin
```

Setup ``plugin`` property in ``esdoc.json``

```json
{
  "source": "./src",
  "destination": "./doc",
  "plugins": [{
    "name": "esdoc-flow-plugin"
  }]
}
```

Execute ESDoc

```sh
esdoc -c esdoc.json
```

## License

MIT

## Author

[Edgardo Avilés @eaviles](https://twitter.com/eaviles)
