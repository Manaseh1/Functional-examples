var num=78;
var num2=89;
var sum=num+num2;
//zile stuff za c kuhusu variables ndo ziko bado
var ghu=['red','bage'];
ghu.push("tryangle");
//alert("new file=  "+ ghu + sum);
//reverse()
//sort()
var mabel=6;
/*switch(mabel){
    case 1:
        console.log("You love anime");
        break;
    case 2:
        console.log("You lovee anime");
        break;
    case 3: 
        console.log("you are obsessed with it");
        break;
    default:
        console.log("You dont desersve life");


}*/
//Object literals
var dog={
    name: 'lex',
    breed: 'German_Shepherd',
    age: 8,
    puppies:['Karla','barbra'],
    //object in literals
    petstore:{
        name:'Sanjay_s patel',
        type:'Dogs only ',
        otherbreeds:['Chihuaua','bulldogs']
    },
    name_breed:function(){
        return this.name+" "+this.breed;
    }

}
console.log(dog.name_breed());
//constructor 
var whasup=new Object();
whasup.greetin='wazzup';
whasup.meaning='how r u';
whasup.attr=function(){
    return this.greetin+' means '+this.meaning;
}
// constructor pattern
function animals(namae,covertype,hierachy){
    this.namae=namae;
    this.covertype=covertype;
    this.hierachy=hierachy;

}
var carni=new animals('Lion','fur','Food chain top');
me=new animals('Child of God','human body','King ')
console.log(me);
function myfn(id){
    id.innerHTML='You Clicked!';
}


console.log(carni);   