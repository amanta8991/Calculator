function display_data(e){
result.value+=e
}

function out(){
    result.value=eval(result.value)
}

function remove(){
    result.value=""
}

function del(){
    result.value=result.value.slice(0,-1)
}