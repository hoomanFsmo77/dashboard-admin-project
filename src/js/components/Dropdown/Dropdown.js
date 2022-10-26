export default ()=>({
    open:false,
    trigger:{
        ['@click'](){
            this.open=!this.open
        }
    },
    appear:{
        ['x-show'](){
            return this.open
        }
    }
})