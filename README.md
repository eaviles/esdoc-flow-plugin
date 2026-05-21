# esdoc-flow-plugin

> ## ⚠️ Archived &amp; deprecated
>
> This project is no longer maintained and the npm package is deprecated.
>
> ESDoc itself has been unmaintained since 2018, and the ESDoc team already
> ships an official Flow plugin. If you still need to strip Flow annotations
> when generating ESDoc documentation, please use that instead:
>
> - **[`esdoc-flow-type-plugin`](https://www.npmjs.com/package/esdoc-flow-type-plugin)**
>   ([source](https://github.com/esdoc/esdoc-plugins/tree/master/esdoc-flow-type-plugin))
>
> For new projects, consider TypeScript with [TypeDoc](https://typedoc.org/),
> which is the actively maintained, modern equivalent.
>
> The instructions below are kept for historical reference only.

---

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
