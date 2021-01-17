# Linked Read

Web app for net visualization of linked data about books and their authors.

For now, data are fetched only from Dbpedia using their [Sparql endpoint](http://dbpedia.org/sparql/).

I would like to add other endpoints or data dumps later on. Now a content which user can search is quite limited. Also some reasonable integration of [Open library](https://openlibrary.org/developers) would be nice.

## Features

User is able to:

- search books and authors by a text query
- see a network map with all found books and authors
- see relationships between books, authors and their series (if exists)
- see a detail of selected book

## Development

### Prerequisites

- Yarn or Npm
- Node 10+

### Build Setup

Project is a static web app. Build with [Nuxt.js](https://nuxtjs.org/).

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Contribution

If you want to collaborate or just suggest me a better solution of some problems, then feel free to open a pull request on [Github](https://github.com/dmitrijt9/linked-read/pulls) ✌

It is my first experience of working with open linked data. So I will appreciate any feedback.
