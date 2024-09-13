import { fromJS } from "immutable";

export default function accessImmutableObject(object, array) {
  const mappedObj = fromJS(object);

  return mappedObj.getIn(array, undefined);
}

const obj = {
  name: {
    first: "Guillaume",
    last: "Salva",
  },
};

console.log(accessImmutableObject(obj, ["name", "first"]));
