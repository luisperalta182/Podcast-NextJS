# Podcast SPA

Hi, this project has been developed using Next.js, to install the project please clone the repository and install all the packages with 

```bash
npm install
```
Then run the development server with

```
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## General Information

The project is using a Wordpress site as content manager using the GraphQL plugin to retreive the content, the wordpress site is running  [here](https://nicasource-c083a5.ingress-erytho.ewp.live/)

The wordpress theme and Blueprint can be found on the following repository

```
https://github.com/luisperalta182/podcastWP-Theme
```

To run the blueprint please use [localwp](https://localwp.com/)

If you want to change the url-domain of the wordpress site, please update the ```.env ``` variables

## Vercel

This project is running on https://podcast-next-js.vercel.app/