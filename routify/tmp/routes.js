
/**
 * @sveltech/routify 1.7.10
 * File generated Mon May 18 2020 19:36:03 GMT+0300 (Eastern European Summer Time)
 */

export const __version = "1.7.10"
export const __timestamp = "2020-05-18T16:36:03.882Z"

//buildRoutes
import { buildClientTree } from "/Users/adrianjager/.nvm/versions/node/v13.13.0/lib/node_modules/@sveltech/routify/runtime/buildRoutes"

//imports
import _1 from '/Users/adrianjager/dev/snowpack-svelte-routify-template/src/pages/1.svelte'
import _2 from '/Users/adrianjager/dev/snowpack-svelte-routify-template/src/pages/2.svelte'
import _3 from '/Users/adrianjager/dev/snowpack-svelte-routify-template/src/pages/3.svelte'
import _index from '/Users/adrianjager/dev/snowpack-svelte-routify-template/src/pages/index.svelte'

//options
export const options = {}

//tree
export const _tree = {
  "name": "root",
  "filepath": "/",
  "root": true,
  "ownMeta": {},
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "ext": "svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "preload": false,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/1",
      "id": "_1",
      "component": () => _1
    },
    {
      "isFile": true,
      "isDir": false,
      "ext": "svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "preload": false,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/2",
      "id": "_2",
      "component": () => _2
    },
    {
      "isFile": true,
      "isDir": false,
      "ext": "svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "preload": false,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/3",
      "id": "_3",
      "component": () => _3
    },
    {
      "isFile": true,
      "isDir": false,
      "ext": "svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "preload": false,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => _index
    }
  ],
  "isLayout": false,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "meta": {
    "preload": false,
    "precache-order": false,
    "precache-proximity": true,
    "recursive": true
  },
  "path": "/"
}


export const {tree, routes} = buildClientTree(_tree)

