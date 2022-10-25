export  default ()=>({
    isExpanded:false,
    trigger:{
        ['@click'](){
            this.isExpanded=!this.isExpanded
        }
    },
    close_trigger:{
        ['@click'](){
            this.isExpanded=false
        }
    }


})