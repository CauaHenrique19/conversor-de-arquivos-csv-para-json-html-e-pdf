class Table{

    constructor(data){
        this.header = data[0]
        data.shift()
        data.pop()
        this.rows = data
    }

    get RowCount(){
        return this.rows.length
    }

    get columnCount(){
        return this.header.length
    }
}

module.exports = Table