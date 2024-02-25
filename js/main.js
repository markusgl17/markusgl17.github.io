const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Select tab content item

function selectItem(e){
    removeBorder();
    displayNone();

    if (this.id === 'tab-1'){
        
        var element = document.getElementById('tab-1-content');
        element.classList.add('show');
    }
    else if(this.id=='tab-2'){
        var element = document.getElementById('tab-2-content');
        element.classList.add('show');
    }
    else{
        var element = document.getElementById('tab-3-content');
        element.classList.add('show');
    }

    this.classList.add('tab-border')
}


function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

function displayNone(){
    tabContentItems.forEach(item => item.classList.remove('show'))
}

//Listen for tab click
tabItems.forEach(item => item.addEventListener('click',selectItem))