export default ()=>({
    open:false,
    trigger:{
        ['@click'](){
            this.open=!this.open
        },
        ['@click.outside'](){
            this.open=false
        }
    },
    appear:{
        ['x-show'](){
            return this.open
        }
    },
    close:{
        ['@click'](){
            this.open=false
        }
    }
})