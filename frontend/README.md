tests
========================================

### Nodejs for ubuntu

* apt latest package is 10.19
* node 17 throws an error with openssl 3
* downgrade to node 16

```sh
curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
npm -v
node -v
```

### dependencies

* ! react-dom v5 vs. v6 is uneasy

```sh
npm install -g npm
npm install react react-dom --save
npm install react-router-dom --save
npm install --save echarts-for-react
npm install --save echarts
npm install maplibre-gl
npm install react-bootstrap
npm install react-router-bootstrap
```

### possible errors 

* dependency error react-scripts depends on babel 8.1.0 while latest is 8.2.3 -> edit package.json

```json
  "optionalDependencies": {
    "babel-loader": "8.1.0"
  }
```

