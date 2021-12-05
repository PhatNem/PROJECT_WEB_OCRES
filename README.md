SpotiGraph - spotify data-viz
==========================================

* 23 Nov. 2021 - Gis-Druide - initial commit
* 28 Nov. 2021 - React Component: fetch and display data from third party api 
* 29 Nov. 2021 - React Component: Line Chart with apache echarts.js
* 30 Nov. 2021 - React Component: Map with maplibre.js
* 02 Dec. 2021 - React Router v6 implement (navbar, switch pages)
* 03 Dec. 2021 - Simple Map Layer from local geojson file

## Road map

* full-stack compact project using NodeJS, React, Mongo
* retrieve data from third parties API like [spotify](https://developer.spotify.com/documentation/web-api/)
* dashboard fency display using [echarts.js](https://echarts.apache.org/en/index.html) or [grafana](https://grafana.com/) or similar
* embed charts into React reusable widgets
* mongo-db is required, even if not necessary
* responsive html output

## Set up

#### docker network

docker network for testing purposes (move to docker-compose later)

```sh
docker network create spotigraph-net
```

#### mongo

run database with [Mongo](./db/README.md)



## Tests 

### Python - spotiPy lib : Spotify data -> mongoDB


* OK pull spotify-data(Artists)
* OK load data to mongo

### React tests

* /src/components (component.js, component.css)
* Getweather: json data from [openweathermap.org/data](https://api.openweathermap.org/data/2.5/forecast/daily?q=Sonsonate&units=metric&appid=4081444b7b90198136fefe6ed4ccf35b)
* Getadress: json data from [api-adresse.data.gouv.fr/search](https://api-adresse.data.gouv.fr/search/?q=ornano%2075018%20paris)
* Maplibre.js
* react-dom-router
* dependencies issues


## docs

* [how-to Node-Docker](https://practicalprogramming.fr/docker-node-api)
* [REST in React](https://pusher.com/tutorials/consume-restful-api-react/)
* [Restful react component](https://medium.com/@nutanbhogendrasharma/step-by-step-consume-rest-api-in-react-application-48388f6c4d9c)
* [simple React component design](https://www.digitalocean.com/community/tutorials/how-to-create-custom-components-in-react-fr)
* [do not git node_modules](https://gist.github.com/lmcneel/45594e550a3403d589bdcaad38138a83)
* [how-to React-echarts.js](https://medium.com/@mailjontay/make-a-dynamic-chart-with-react-and-echarts-a-simple-tutorial-92a5c3c053a2)
* [react Router doc](https://reactrouter.com/docs/en/v6/upgrading/v5)