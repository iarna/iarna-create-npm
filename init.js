#!/usr/bin/env node
'use strict'
const initIt = require('@iarna/create')

initIt(process.cwd(), `${__dirname}/node_modules/@iarna/create/template`, {
  github: 'npm',
  copyright: 'npm, Inc',
  namespaces: ['npmcorp', 'npm']
})
console.log('* project initialized')
