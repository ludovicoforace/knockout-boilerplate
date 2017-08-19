# knockout-boilerplate

[KnockoutJS](http://knockoutjs.com) boilerplate using Typescript and Gulp

## Features
- Typescript
- Less
- Views as html transformed with browserify
- Knockout custom elements
- CSS autoprefixing
- CSS reset and layout [sash-layout](https://github.com/ludovicoforace/sash-layout)
- Production asset minification
- Gulp tasking
- Image optimization

## Usage

**dev**:  
```shell
$ gulp
```

- Get http://localhost:3000/

**clean**:  
```shell
$ gulp clean
```

Clean the /dist folder

**deployment**:  
```shell
$ gulp deploy
```

Minify and uglify the files into /dist