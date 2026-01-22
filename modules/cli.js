

const logger = () =>{
    let res = {}
    for(let i = 2; i< process.argv.length; i++ ){
        const arg = process.argv[i].split("=")
        res[arg[0]]= arg[1]? arg[1]:true
    }
    return res
}

console.log(logger());
