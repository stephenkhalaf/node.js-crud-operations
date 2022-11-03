const bcrypt = require('bcrypt')

async function run(){
    const salt = await bcrypt.genSalt()
    const hashed = await bcrypt.hash('royaldiva',salt)
    console.log(hashed)
}

run()