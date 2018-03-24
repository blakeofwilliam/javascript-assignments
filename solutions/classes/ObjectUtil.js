export default class ObjectUtil {
    excludeInvalidObjectKeys(obj, invalidKeys) {
        if (!(obj instanceof Object) || !Array.isArray(invalidKeys)) {
            return []
        }

        return Object.keys(obj).filter(key => !invalidKeys.includes(key))
    }

    filterObject(obj, validKeys) {
        const { getValidObjectKeys } = this

        return getValidObjectKeys(obj, validKeys)
            .reduce((acc, key) => {
                acc[key] = obj[key]
                return acc
            }, {})
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

    getValidObjectKeys(obj, validKeys) {
        if (!(obj instanceof Object)  || !Array.isArray(validKeys)) {
            return []
        }

        return Object.keys(obj)
            .filter(key => validKeys.includes(key))
    }

    mergeObjects(obj1, obj2) {
        if (!(obj1 instanceof Object) || !(obj2 instanceof Object)) {
            return {}
        }

        return Object.assign({}, obj1, obj2)
    }

    objectHasProperty(obj, prop) {
        if (!(obj instanceof Object)) {
            return false
        }

        return obj.hasOwnProperty(prop)
    }

    sanitizeObject(obj, invalidKeys) {
        const { excludeInvalidObjectKeys } = this

        return excludeInvalidObjectKeys(obj, invalidKeys)
            .reduce((acc, key) => {
                acc[key] = obj[key]
                return acc
            }, {})
    }
}