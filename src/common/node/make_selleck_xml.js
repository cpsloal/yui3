#!/usr/bin/env node

var examples = require('./selleck'),
    fs = require('fs'),
    path = require('path'),
    tab = '    ',
    xml = path.join(__dirname, '../tests', 'selleck.xml'),
    str = [
        '<?xml version="1.0"?>',
        '<!-- Dynamically generated by src/common/node/make_selleck_xml.js -->',
        '<yuitest>',
        tab + '<tests base="@TEST_ARTIFACTS_BASE@" timeout="120000">'
    ];

    examples.forEach(function(url) {
        str.push(tab + tab + '<url>' + url + '</url>');
    });

    str.push(tab + '</tests>');
    str.push('</yuitest>');
    
    fs.writeFileSync(xml, str.join('\n'), 'utf8');
