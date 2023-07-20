# Spotlight

Spotlight is a [Tailwind UI](https://tailwindui.com) site template built using [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org).

## Getting started

To get started with this template, first install the npm dependencies:

```bash
npm install
```

Next, create a `.env.local` file in the root of your project and set the `NEXT_PUBLIC_SITE_URL` variable to your site's public URL:

```
NEXT_PUBLIC_SITE_URL=https://example.com
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Customizing

You can start editing this template by modifying the files in the `/src` folder. The site will auto-update as you edit these files.

## License

This site template is a commercial product and is licensed under the [Tailwind UI license](https://tailwindui.com/license).

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
- [MDX](https://mdxjs.com) - the MDX documentation

docker

```sh
docker volume create sonaqube_data
docker volume create sonaqube_logs
docker volume create sonaqube_extensions

docker run -d --name sonarqube -p 9000:9000 -p 9092:9092 sonarqube
```

Docker Swarm

```sh
docker swarm init
docker join <ip>
docker node ls
```

```sh
docker service create --name myporto -p 3000:3000 fajjarnr/myportofolio:latest

docker service ps myporto

docker volume create jenkins_home

docker service create --name jenkins -p 8080:8080 -p 50000:50000 --mount type=volume,source=jenkins_home,target=/var/jenkins_home fajjarnr/jenkins:latest

docker service create --name sonarqube \
-p 9000:9000 \
--mount type=volume,source=sonaqube_data,target=/opt/sonarqube/data \
--mount type=volume,source=sonaqube_logs,target=/opt/sonarqube/logs \
--mount type=volume,source=sonaqube_extensions,target=/opt/sonarqube/extensions \
sonarqube
```

exec container

```sh
docker container ls
docker container exec -it -u 0 jenkins.1.onoz03y3ottabg8olfi5xa1v1 bash

curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh
bash nodesource_setup.sh
apt install nodejs
node -v
npm -v
```
