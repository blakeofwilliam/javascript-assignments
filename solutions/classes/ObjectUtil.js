export default class ObjectUtil {
    mergeObjects(obj1, obj2) {
        if (!(obj1 instanceof Object) || !(obj2 instanceof Object)) {
            return {}
        }

        return Object.assign({}, obj1, obj2)
    }
}