var mobileList = [
    {
        name:'OP 7t',
        price:35999,
        features:{
                RAM:'8GB',
                Camera:'24MP',
                ScreenSize:'6.3"'
            },
        accessories:['charger','screen-guard'],
    },
    {
        name:'POCO f1',
        price:22999,
        features:{
                RAM:'8GB',
                Camera:'24MP',
                ScreenSize:'6"'
            },
        accessories:['charger','earphones','screen-guard'],
    },
    {
        name:'APPLE iPhone 11',
        price:75999,
        features:{
                RAM:'4GB',
                Camera:'24MP',
                ScreenSize:'6.3"'
            },
        accessories:['charger'],
    }
]
mobileList.forEach(mobileList=>{
for (const prop in mobileList){
    var item = mobileList[prop];
    if(item instanceof Array){
        item.forEach(elem=>console.log('features: '+elem));
    }else if(typeof item == 'object'){
        for (const key in item){
            console.log(key+' : '+item[key]);
        }
    }else{
        console.log(item);
    }
}
});
