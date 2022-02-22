const fs = require('fs');
const yaml = require('js-yaml');

let data = {
    title: 'Reading and Writing YAML to a File in Node.js/JavaScript',
    'url path': '/reading-and-writing-yaml-to-a-file-in-node-js-javascript',
    domain: 'stackabuse.com',
    port: 443,
    'is-https': true,
    meta: {
        'published-at': 'Nov. 1st, 2019',
        author: {
            name: 'Scott Robinson',
            contact: 'scott@stackabuse.com'
        },
        tags: [
            'javascript', 'node.js', 'web development'
        ]
    }
};

let yamlStr = yaml.dump(data);
fs.writeFileSync('data-out.yaml', yamlStr, 'utf8');