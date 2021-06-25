# This is my-site

## About

This is a NPM driven site...

## Dependencies

For development, you need:

* **ruby-sass** (DEPRECATED): `sudo gem install sass`
* **dart-sass**: Download binary from [https://github.com/sass/dart-sass/releases](https://github.com/sass/dart-sass/releases). Move the unzipped folder content to `/usr/local/dart-sass`. Add this folder to *PATH*: append to `~./bashrc` (finally `source ~/.bashrc`)

```bash
#DART-SASS
export PATH="/usr/local/dart-sass/:$PATH"
```



* **npm** and **node-js**, last version: [Nodesource](https://github.com/nodesource/distributions/blob/master/README.md). For *ubuntu/mint*:

```bash
# Using Ubuntu
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
```

* Some libraries are required for correct functioning.

```bash
sudo apt install jpegoptim optipng
```

Finally, **VSCode** and **git** may help in development cycle.

In production, just you need a good HTTP server.....



## Install for development

In project do:

```bash
npm install 
npm update debug
```

The last is for remove Warnings.

## Build

Running this is very easy.

In first time, *always* you need a build. So, from root folder do:

```bash
npm run build
```

After this, in dist folder you will have a ready to serve, project folder.

### Development mode

In development mode, this project has *browser-sync* package and a special script. You must:

```bash
npm run watch
```

  After this, the project will be served in system default a web browser. In this mode, *webpack* work in **development** mode (ie. no minify code) and not compress images. 
