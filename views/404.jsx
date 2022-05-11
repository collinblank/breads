const React = require('react')
const Default = require('./layouts/Default')

function error404() {
    console.log('404')
    return (
    <Default>
        <h3>404</h3>
        <a href="/breads"><button>Show Me Bread</button></a>
    </Default>
    )
}

module.exports = error404