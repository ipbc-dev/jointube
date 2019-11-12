# JoinPeerTube

## Dev

```
$ npm run serve
```

## Build for production

```
$ npm run build
```

## Update translations

Add Weblate remote:

```
$ git remote add weblate https://weblate.framasoft.org/git/joinpeertube/main
```

Update from Weblate:

```
$ git fetch weblate && git merge weblate/master
```

Re generate translations:

```
$ npm run i18n:generate
```

Push on master (Weblate will be automatically updated)

```
$ git push origin master
```
