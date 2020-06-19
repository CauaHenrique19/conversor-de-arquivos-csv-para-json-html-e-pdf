class Processor{
    static Process(data){
        var splitedData = data.split('\r\n')
        var rows = []

        splitedData.forEach((row) => {
            rows.push(row.split(';'))
        })

        return rows
    }
}

module.exports = Processor