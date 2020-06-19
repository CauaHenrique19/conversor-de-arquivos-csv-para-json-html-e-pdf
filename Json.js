class Json{

    constructor(){
        this.obj = {}
    }
    
    static Load(data){

        let array = []

        data.rows.forEach((item) => {
            this.obj = {...item}
            var quantKeys = Object.keys(this.obj).length

            for (let i = 0; i < quantKeys; i++) {
                const key = data.header[i]
                this.obj[`${key}`] = this.obj[`${i}`]
                delete this.obj[`${i}`]
            }

            array.push(this.obj)
        })
        
        return array
    }
}

module.exports = Json