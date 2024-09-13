export default function accessImmutableObject(object, array) {
    return array.reduce((acc, key)=>{
        if(acc && acc[key] !== undefined){
            return acc[key];
        }
        return undefined;
    }, object);
}

const obj = {
  name: {
    first: "Guillaume",
    last: "Salva",
  },
};

console.log(accessImmutableObject(obj, ["name", "first"]));