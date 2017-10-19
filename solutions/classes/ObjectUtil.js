export default class ObjectUtil {
    mergeObjects(obj1, obj2) {
        if (!(obj1 instanceof Object) || !(obj2 instanceof Object)) {
            return {}
        }

        return Object.assign({}, obj1, obj2)
    }

    getObjectKeys(obj) {
        if (!(obj instanceof Object)) {
            return []
        }

        return Object.keys(obj)
    }

    getObjectValues(obj) {
        if (!(obj instanceof Object)) {
            return []
        }

        return Object.values(obj)
    }

    objectHasProperty(obj, prop) {
        if (!(obj instanceof Object)) {
            return false
        }

        return obj.hasOwnProperty(prop)
    }
}