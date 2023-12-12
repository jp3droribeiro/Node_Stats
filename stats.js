const os = require('os')



const { freemem, totalmem } = os

const total = parseInt(totalmem() / 1024 / 1024)

const mem = parseInt(freemem() /1024 /1024 )

//criando a porcentagem
const percents = parseInt((mem/total) * 100)



const stats = {
    free: `${mem} MB`,
    total: `${total} MB`,
    usage: `${percents}%`

}
console.log(" === PC STATS MEMORY ===")
console.table(stats)


