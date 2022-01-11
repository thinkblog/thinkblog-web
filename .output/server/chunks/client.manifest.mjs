const client_manifest = {
  "node_modules/nuxt3/dist/app/entry.mjs": {
    "file": "entry-f110d98e.mjs",
    "src": "node_modules/nuxt3/dist/app/entry.mjs",
    "isEntry": true,
    "dynamicImports": [
      "_bootstrap-fab435f2.mjs"
    ]
  },
  "_bootstrap-fab435f2.mjs": {
    "file": "bootstrap-fab435f2.mjs",
    "isDynamicEntry": true,
    "dynamicImports": [
      "pages/admin/editor.vue",
      "pages/admin/post-list.vue",
      "pages/admin.vue",
      "pages/index.vue",
      "pages/page/[pageIndex].vue",
      "pages/post/[cid].vue"
    ],
    "css": [
      "assets/bootstrap.02e2ffd9.css"
    ]
  },
  "pages/admin/editor.vue": {
    "file": "editor-df6e2455.mjs",
    "src": "pages/admin/editor.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-fab435f2.mjs"
    ],
    "css": [
      "assets/editor.09771dd1.css"
    ]
  },
  "pages/admin/post-list.vue": {
    "file": "post-list-cccfe159.mjs",
    "src": "pages/admin/post-list.vue",
    "isDynamicEntry": true,
    "imports": [
      "_Post-574e22f0.mjs",
      "_bootstrap-fab435f2.mjs"
    ]
  },
  "_Post-574e22f0.mjs": {
    "file": "Post-574e22f0.mjs"
  },
  "pages/admin.vue": {
    "file": "admin-403ca329.mjs",
    "src": "pages/admin.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-fab435f2.mjs"
    ],
    "css": [
      "assets/admin.87f2a328.css"
    ]
  },
  "pages/index.vue": {
    "file": "index-3fa728ea.mjs",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-fab435f2.mjs"
    ]
  },
  "pages/page/[pageIndex].vue": {
    "file": "_pageIndex_-7adb7f45.mjs",
    "src": "pages/page/[pageIndex].vue",
    "isDynamicEntry": true,
    "imports": [
      "_Post-574e22f0.mjs",
      "_bootstrap-fab435f2.mjs"
    ],
    "css": [
      "assets/_pageIndex_.8e548ad6.css"
    ]
  },
  "pages/post/[cid].vue": {
    "file": "_cid_-96cdfd39.mjs",
    "src": "pages/post/[cid].vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-fab435f2.mjs",
      "_Post-574e22f0.mjs"
    ]
  }
};

export { client_manifest as default };
