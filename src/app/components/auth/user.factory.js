export function UserFactory ($localStorage) {
    'ngInject'
    var storage = $localStorage;
    
    return {
        storage: storage
    }
}