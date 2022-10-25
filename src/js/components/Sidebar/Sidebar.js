export  default ()=>({
    isExpanded:false,
    trigger:{
        ['@click'](){
            this.isExpanded=!this.isExpanded
        }
    }


})