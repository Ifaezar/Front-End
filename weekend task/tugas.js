const destructuring = (huruf) => {
    let [pertama,...lainnya] = huruf
    huruf = pertama.toUpperCase() + lainnya.join('')
    return huruf
}

console.log(destructuring("ilham"))
console.log(destructuring("faezar"))
console.log(destructuring("luffy"))